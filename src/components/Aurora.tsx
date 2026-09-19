import { useEffect, useRef } from "react";

import { Renderer, Program, Mesh, Color, Triangle } from "ogl";

const VERT = `#version 300 es

in vec2 position;

void main() {

  gl_Position = vec4(position, 0.0, 1.0);

}

`;

const FRAG = `#version 300 es

precision highp float;

uniform float uTime;

uniform float uAmplitude;

uniform vec3 uColorStops[3];

uniform vec2 uResolution;

uniform float uBlend;

uniform float uLightMode;

out vec4 fragColor;

vec3 permute(vec3 x) {

  return mod(((x * 34.0) + 1.0) * x, 289.0);

}

float snoise(vec2 v) {

  const vec4 C = vec4(

    0.211324865405187,

    0.366025403784439,

    -0.577350269189626,

    0.024390243902439

  );

  vec2 i = floor(v + dot(v, C.yy));

  vec2 x0 = v - i + dot(i, C.xx);

  vec2 i1 = (x0.x > x0.y)

    ? vec2(1.0, 0.0)

    : vec2(0.0, 1.0);

  vec4 x12 = x0.xyxy + C.xxzz;

  x12.xy -= i1;

  i = mod(i, 289.0);

  vec3 p = permute(

    permute(i.y + vec3(0.0, i1.y, 1.0))

    + i.x + vec3(0.0, i1.x, 1.0)

  );

  vec3 m = max(

    0.5 - vec3(

      dot(x0, x0),

      dot(x12.xy, x12.xy),

      dot(x12.zw, x12.zw)

    ),

    0.0

  );

  m = m * m;

  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;

  vec3 h = abs(x) - 0.5;

  vec3 ox = floor(x + 0.5);

  vec3 a0 = x - ox;

  m *= 1.79284291400159

    - 0.85373472095314 * (a0 * a0 + h * h);

  vec3 g;

  g.x = a0.x * x0.x + h.x * x0.y;

  g.yz = a0.yz * x12.xz + h.yz * x12.yw;

  return 130.0 * dot(m, g);

}

void main() {

  vec2 uv = gl_FragCoord.xy / max(uResolution, vec2(1.0));

  vec3 rampColor;

  if (uv.x < 0.5) {

    rampColor = mix(

      uColorStops[0],

      uColorStops[1],

      clamp(uv.x * 2.0, 0.0, 1.0)

    );

  } else {

    rampColor = mix(

      uColorStops[1],

      uColorStops[2],

      clamp((uv.x - 0.5) * 2.0, 0.0, 1.0)

    );

  }

  float height = snoise(

    vec2(

      uv.x * 2.0 + uTime * 0.1,

      uTime * 0.25

    )

  ) * 0.5 * uAmplitude;

  height = exp(height);

  height = uv.y * 2.0 - height + 0.2;

  float intensity = 0.6 * height;

  float midPoint = 0.20;

  float auroraAlpha = smoothstep(

    midPoint - uBlend * 0.5,

    midPoint + uBlend * 0.5,

    intensity

  );

  vec3 auroraColor = intensity * rampColor;

  if (uLightMode > 0.5) {

    float energy = clamp(

      max(intensity, 0.0),

      0.0,

      1.0

    );

    float coverage = clamp(

      auroraAlpha * (0.55 + 0.45 * energy),

      0.0,

      0.86

    );

    vec3 chroma = pow(

      clamp(rampColor, 0.0, 1.0),

      vec3(1.2)

    );

    float chromaPeak = max(

      chroma.r,

      max(chroma.g, chroma.b)

    );

    chroma /= max(chromaPeak, 0.0001);

    fragColor = vec4(

      mix(

        vec3(1.0),

        chroma,

        min(coverage * 1.08, 0.94)

      ),

      1.0

    );

  } else {

    fragColor = vec4(

      auroraColor * auroraAlpha,

      auroraAlpha

    );

  }

}

`;

interface AuroraProps {
  colorStops?: [string, string, string];

  amplitude?: number;

  blend?: number;

  time?: number;

  speed?: number;

  lightMode?: boolean;

  className?: string;
}

const DEFAULT_COLORS: [string, string, string] = [
  "#4C3219",

  "#A97732",

  "#1B1714",
];

function convertColors(stops: [string, string, string]) {
  return stops.map((hex) => {
    const color = new Color(hex);

    return [color.r, color.g, color.b];
  });
}

export default function Aurora(props: AuroraProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep the latest props available without

  // recreating the WebGL renderer.

  const propsRef = useRef(props);

  propsRef.current = props;

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let renderer: Renderer;

    try {
      renderer = new Renderer({
        alpha: true,

        premultipliedAlpha: true,

        antialias: false,

        dpr: Math.min(window.devicePixelRatio || 1, 1.5),
      });
    } catch (error) {
      console.warn(
        "Aurora: WebGL is unavailable. Using the static background.",

        error,
      );

      return;
    }

    const gl = renderer.gl;

    gl.clearColor(0, 0, 0, 0);

    gl.enable(gl.BLEND);

    gl.blendFunc(
      gl.ONE,

      gl.ONE_MINUS_SRC_ALPHA,
    );

    gl.canvas.style.display = "block";

    gl.canvas.style.width = "100%";

    gl.canvas.style.height = "100%";

    gl.canvas.style.backgroundColor = "transparent";

    gl.canvas.style.pointerEvents = "none";

    const geometry = new Triangle(gl);

    const initialColors = propsRef.current.colorStops ?? DEFAULT_COLORS;

    const program = new Program(gl, {
      vertex: VERT,

      fragment: FRAG,

      uniforms: {
        uTime: {
          value: 0,
        },

        uAmplitude: {
          value: propsRef.current.amplitude ?? 0.8,
        },

        uColorStops: {
          value: convertColors(initialColors),
        },

        uResolution: {
          value: [1, 1],
        },

        uBlend: {
          value: propsRef.current.blend ?? 0.6,
        },

        uLightMode: {
          value: propsRef.current.lightMode ? 1 : 0,
        },
      },
    });

    const mesh = new Mesh(gl, {
      geometry,

      program,
    });

    container.appendChild(gl.canvas);

    let animationId = 0;

    let isVisible = true;

    let lastColorKey = initialColors.join("|");

    const startTime = performance.now();

    function updateUniforms(elapsedSeconds: number) {
      const current = propsRef.current;

      const speed = current.speed ?? 0.5;

      const time = current.time ?? elapsedSeconds;

      program.uniforms.uTime.value = time * speed;

      program.uniforms.uAmplitude.value = current.amplitude ?? 0.8;

      program.uniforms.uBlend.value = Math.max(
        current.blend ?? 0.6,

        0.001,
      );

      program.uniforms.uLightMode.value = current.lightMode ? 1 : 0;

      const stops = current.colorStops ?? DEFAULT_COLORS;

      const colorKey = stops.join("|");

      // Update colours only when they change.

      if (colorKey !== lastColorKey) {
        program.uniforms.uColorStops.value = convertColors(stops);

        lastColorKey = colorKey;
      }
    }

    function renderFrame(elapsedSeconds: number) {
      updateUniforms(elapsedSeconds);

      renderer.render({
        scene: mesh,
      });
    }

    function animate(now: number) {
      const elapsedSeconds = (now - startTime) / 1000;

      renderFrame(elapsedSeconds);

      animationId = requestAnimationFrame(animate);
    }

    function stopAnimation() {
      cancelAnimationFrame(animationId);

      animationId = 0;
    }

    function shouldAnimate() {
      return !reducedMotion.matches && isVisible && !document.hidden;
    }

    function syncAnimation() {
      stopAnimation();

      if (shouldAnimate()) {
        animationId = requestAnimationFrame(animate);
      } else {
        // Keep a static Aurora frame visible

        // when animation is disabled.

        renderFrame((performance.now() - startTime) / 1000);
      }
    }

    function resize() {
      const currentContainer = containerRef.current;

      if (!currentContainer) return;

      const width = Math.max(
        1,

        currentContainer.clientWidth,
      );

      const height = Math.max(
        1,

        currentContainer.clientHeight,
      );

      renderer.setSize(width, height);

      // Match the actual WebGL drawing-buffer dimensions.

      program.uniforms.uResolution.value = [gl.canvas.width, gl.canvas.height];

      if (!shouldAnimate()) {
        renderFrame((performance.now() - startTime) / 1000);
      }
    }

    const resizeObserver = new ResizeObserver(resize);

    resizeObserver.observe(container);

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? false;

        syncAnimation();
      },

      {
        threshold: 0,
      },
    );

    visibilityObserver.observe(container);

    const handleVisibilityChange = () => {
      syncAnimation();
    };

    const handleMotionChange = () => {
      syncAnimation();
    };

    document.addEventListener(
      "visibilitychange",

      handleVisibilityChange,
    );

    reducedMotion.addEventListener(
      "change",

      handleMotionChange,
    );

    resize();

    syncAnimation();

    return () => {
      stopAnimation();

      resizeObserver.disconnect();

      visibilityObserver.disconnect();

      document.removeEventListener(
        "visibilitychange",

        handleVisibilityChange,
      );

      reducedMotion.removeEventListener(
        "change",

        handleMotionChange,
      );

      if (gl.canvas.parentNode === container) {
        container.removeChild(gl.canvas);
      }

      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`h-full w-full ${props.className ?? ""}`}
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(ellipse at 55% 65%, rgba(169,119,50,0.14), transparent 65%)",
      }}
    />
  );
}
