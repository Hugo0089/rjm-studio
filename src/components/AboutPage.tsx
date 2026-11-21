import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Menu,
  MessageCircle,
  Pencil,
  LayoutTemplate,
  BarChart3,
} from "lucide-react";

const navItems = ["Home", "Services", "Work", "About", "Contact"];

function ScriptLogo() {
  return (
    <img
      src="/images/rjm-logo4.webp"
      alt="RJM Studio logo"
      width={252}
      height={84}
      fetchPriority="high"
      decoding="async"
      className="h-12 w-auto object-contain"
    />
  );
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hiddenTransform =
    direction === "left"
      ? "translate3d(-40px, 0, 0)"
      : direction === "right"
        ? "translate3d(40px, 0, 0)"
        : "translate3d(0, 40px, 0)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0, 0, 0)" : hiddenTransform,
        transitionProperty: "opacity, transform",
        transitionDuration: "900ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 text-xs uppercase tracking-[0.35em] text-amber-300/80">
      {children}
    </div>
  );
}

const approachSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discover",
    copy: "We start with a conversation to understand your goals, your audience, and what your business needs most.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Plan",
    copy: "I create a clear plan and structure so your website, content, or support package is aligned with your goals.",
  },
  {
    number: "03",
    icon: LayoutTemplate,
    title: "Create",
    copy: "Design, content, and digital execution come together to build something that feels polished and intentional.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Support",
    copy: "Ongoing support, refinement, and updates help your business stay consistent and keep growing.",
  },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const activeItem = "About";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>About | RjM Studio™</title>
        <meta
          name="description"
          content="Learn more about RJM Studio and its approach to website design, social media management, and digital support."
        />
        <meta property="og:title" content="RJM Studio" />
        <meta
          property="og:description"
          content="Web design, social media management, and digital support for small businesses."
        />
        <meta
          property="og:image"
          content="https://www.rjm-studio.co.uk/images/og-image.png"
        />
        <meta property="og:url" content="https://www.rjm-studio.co.uk/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="relative min-h-screen overflow-x-hidden bg-[#06070a] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.035), transparent 20%), radial-gradient(circle at bottom right, rgba(244,199,107,0.045), transparent 22%), radial-gradient(circle at top right, rgba(244,199,107,0.08), transparent 16%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[220px] bg-[linear-gradient(to_bottom,rgba(244,199,107,0.08),rgba(244,199,107,0.025),transparent)]"
        />
        <div className="relative z-10 w-full px-6 pb-20 pt-6 md:px-8 lg:px-10">
          <header className="sticky top-4 z-40 rounded-[0.6rem] border border-white/10 bg-black/35 px-5 py-4 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <ScriptLogo />

              <nav className="hidden items-center gap-14 text-sm text-zinc-200 lg:flex xl:gap-16">
                {navItems.map((item) => {
                  const route =
                    item === "Home"
                      ? "/"
                      : item === "Services"
                        ? "/services"
                        : item === "Contact"
                          ? "/contact"
                          : item === "About"
                            ? "/about"
                            : item === "Work"
                              ? "/work"
                              : "#";

                  return (
                    <Link
                      key={item}
                      to={route}
                      onClick={() => window.scrollTo(0, 0)}
                      className={
                        item === activeItem
                          ? "border-b border-amber-300 pb-1 text-white"
                          : "hover:text-white"
                      }
                    >
                      {item}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-3">
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hidden rounded-md border border-amber-300/60 px-5 py-2.5 text-sm text-amber-100 transition hover:bg-amber-300/10 md:inline-flex"
                >
                  Get in Touch
                </Link>

                <button
                  className="inline-flex rounded-[0.6rem] border border-white/10 p-2.5 text-zinc-300 lg:hidden"
                  aria-label="Open menu"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {mobileMenuOpen && (
              <div className="mt-4 flex flex-col gap-3 rounded-[0.8rem] border border-white/10 bg-black/80 p-4 lg:hidden">
                {navItems.map((item) => {
                  const route =
                    item === "Home"
                      ? "/"
                      : item === "Services"
                        ? "/services"
                        : item === "Contact"
                          ? "/contact"
                          : item === "About"
                            ? "/about"
                            : item === "Work"
                              ? "/work"
                              : "#";

                  return (
                    <Link
                      key={item}
                      to={route}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className={
                        item === activeItem
                          ? "text-white"
                          : "text-zinc-300 transition hover:text-white"
                      }
                    >
                      {item}
                    </Link>
                  );
                })}

                <Link
                  to="/contact"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="mt-2 inline-flex rounded-md border border-amber-300/60 px-4 py-2.5 text-sm text-amber-100 transition hover:bg-amber-300/10"
                >
                  Get in Touch
                </Link>
              </div>
            )}
          </header>

          <section className="relative overflow-hidden py-20 md:py-24 lg:py-28">
            {/* Hero atmosphere */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2"
              style={{
                background:
                  "radial-gradient(circle at 78% 38%, rgba(251,191,36,0.13), transparent 30%), radial-gradient(circle at 12% 18%, rgba(255,255,255,0.025), transparent 24%)",
              }}
            />

            {/* Large editorial RJM watermark */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-4%] top-1/2 hidden w-[58%] -translate-y-1/2 select-none lg:block xl:w-[54%]"
            >
              <img
                src="/images/rjm-logo4.webp"
                alt=""
                className="h-auto w-full object-contain opacity-[0.035] grayscale brightness-[1.8]"
              />
            </div>

            <div className="relative z-10 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20 xl:gap-28">
              {/* Left — main About introduction */}
              <div className="max-w-[760px]">
                <Reveal>
                  <div className="flex items-center gap-5">
                    <SectionLabel>About RjM Studio</SectionLabel>

                    <div className="mb-4 hidden h-px w-24 bg-amber-300/70 sm:block" />
                  </div>
                </Reveal>

                <Reveal delay={140}>
                  <h1 className="heading-display text-5xl font-light leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-[5.4rem]">
                    Independent studio.
                    <br />
                    <span className="italic text-amber-300">
                      Personal approach.
                    </span>
                  </h1>
                </Reveal>

                <Reveal delay={220}>
                  <p className="mt-9 max-w-[650px] text-lg leading-8 text-zinc-200 md:text-xl md:leading-9">
                    I’m Rj, founder of RjM Studio — an independent digital
                    studio based in the Isle of Man, helping small businesses
                    build a professional and confident presence online.
                  </p>
                </Reveal>

                <Reveal delay={300}>
                  <p className="mt-6 max-w-[650px] text-base leading-8 text-zinc-400">
                    I combine thoughtful design, web development, practical
                    digital support and security-aware thinking to create work
                    that looks polished, works reliably and makes sense for the
                    business behind it.
                  </p>
                </Reveal>

                <Reveal delay={380}>
                  <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.7rem] uppercase tracking-[0.22em] text-amber-300/80 sm:text-xs">
                    <span>Web Design</span>

                    <span aria-hidden="true" className="text-amber-300/40">
                      /
                    </span>

                    <span>Digital Support</span>

                    <span aria-hidden="true" className="text-amber-300/40">
                      /
                    </span>

                    <span>Security-Aware Development</span>
                  </div>
                </Reveal>
              </div>

              {/* Right — editorial studio metadata */}
              <Reveal direction="right" delay={240}>
                <div className="relative lg:justify-self-end">
                  <div className="relative border-t border-white/10 pt-8 lg:min-w-[330px] lg:border-l lg:border-t-0 lg:border-amber-300/80 lg:pl-12 lg:pt-0">
                    <div className="space-y-10 md:grid md:grid-cols-3 md:gap-8 md:space-y-0 lg:block lg:space-y-12">
                      {/* Studio */}
                      <div>
                        <div className="text-xs uppercase leading-7 tracking-[0.3em] text-zinc-200">
                          Independent
                          <br />
                          Digital Studio
                        </div>

                        <div className="mt-7 h-px w-16 bg-amber-300/80" />
                      </div>

                      {/* Location */}
                      <div>
                        <div className="text-xs uppercase tracking-[0.3em] text-zinc-300">
                          Isle of Man
                        </div>
                      </div>

                      {/* Disciplines */}
                      <div>
                        <div className="space-y-2 text-xs uppercase tracking-[0.26em] text-zinc-300">
                          <div>Web Design</div>
                          <div>Digital Support</div>
                          <div>Security-Aware</div>
                          <div>Development</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/10 bg-[#08090b] py-16 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 18% 38%, rgba(251,191,36,0.055), transparent 34%), radial-gradient(circle at 84% 68%, rgba(244,199,107,0.03), transparent 28%)",
              }}
            />
            <div className="relative z-10 w-full px-6 md:px-8 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <Reveal direction="left">
                  <div>
                    <SectionLabel>01 / My Story</SectionLabel>

                    <h2 className="heading-display max-w-lg text-4xl font-light leading-tight text-white md:text-5xl">
                      Built from a mix of{" "}
                      <span className="italic text-amber-300">
                        creativity and technology.
                      </span>
                    </h2>
                  </div>
                </Reveal>

                <div className="max-w-3xl">
                  <Reveal delay={100}>
                    <p className="heading-display text-2xl font-light leading-relaxed text-zinc-100 md:text-3xl">
                      I’m Rj, the person behind RjM Studio.
                    </p>
                  </Reveal>
                  <Reveal delay={260}>
                    <p className="mt-7 text-base leading-8 text-zinc-300">
                      My background brings together web development, digital
                      design, IT and cybersecurity. Over time, that combination
                      naturally led me toward creating digital experiences that
                      are not only visually considered, but practical, reliable
                      and built with care.
                    </p>
                  </Reveal>

                  <Reveal delay={260}>
                    <p className="mt-5 text-base leading-8 text-zinc-400">
                      I started RjM Studio to offer small businesses a more
                      personal alternative to the traditional agency experience.
                      I like working closely with clients, understanding what
                      they actually need, and creating solutions that feel right
                      for the business rather than forcing every project into
                      the same template.
                    </p>
                  </Reveal>
                  <Reveal delay={340}>
                    <p className="mt-5 text-base leading-8 text-zinc-400">
                      Whether I’m building a new website, refreshing an existing
                      one or providing ongoing digital support, the goal is
                      simple: create work that looks professional, works
                      properly and gives the business confidence in how it
                      presents itself online.
                    </p>
                  </Reveal>

                  <div className="mt-10 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-3">
                    <Reveal delay={420}>
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-amber-300/75">
                          Based
                        </div>
                        <div className="mt-2 text-sm text-zinc-300">
                          Isle of Man
                        </div>
                      </div>
                    </Reveal>

                    <Reveal delay={490}>
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-amber-300/75">
                          Studio
                        </div>
                        <div className="mt-2 text-sm text-zinc-300">
                          Independent
                        </div>
                      </div>
                    </Reveal>

                    <Reveal delay={560}>
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-amber-300/75">
                          Focus
                        </div>
                        <div className="mt-2 text-sm text-zinc-300">
                          Web & Digital
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-16 md:py-20"
            style={{
              background:
                "linear-gradient(to bottom, #0a0b0e 0%, #090a0d 22%, #08090b 48%, #08090b 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 82% 30%, rgba(251,191,36,0.05), transparent 32%)",
              }}
            />
            <div className="relative z-10 w-full px-6 md:px-8 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                <Reveal direction="left">
                  <div>
                    <SectionLabel>02 / What Shapes My Work</SectionLabel>

                    <h2 className="heading-display max-w-lg text-4xl font-light leading-tight text-white md:text-5xl">
                      Good digital work should feel{" "}
                      <span className="italic text-amber-300">considered.</span>
                    </h2>

                    <p className="mt-6 max-w-md text-base leading-8 text-zinc-400">
                      The way I work is shaped by a balance of design thinking,
                      technical awareness and a practical understanding of what
                      small businesses actually need.
                    </p>
                  </div>
                </Reveal>

                <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
                  {[
                    {
                      number: "01",
                      title: "Clarity",
                      copy: "Good design should make things easier to understand. Clear structure, messaging and navigation come before unnecessary complexity.",
                    },
                    {
                      number: "02",
                      title: "Purpose",
                      copy: "Every design choice should support a reason — whether that is building trust, improving usability or helping someone take the next step.",
                    },
                    {
                      number: "03",
                      title: "Reliability",
                      copy: "A website needs to work just as well as it looks. I value thoughtful implementation, consistency and dependable support after launch.",
                    },
                    {
                      number: "04",
                      title: "Security Awareness",
                      copy: "My cybersecurity background influences how I think about development, configuration and the small technical decisions that help create more considered digital experiences.",
                    },
                  ].map((item, index) => (
                    <Reveal key={item.number} delay={120 + index * 100}>
                      <div className="border-t border-white/10 pt-7">
                        <div className="text-xs tracking-[0.22em] text-amber-300/75">
                          {item.number}
                        </div>

                        <h3 className="heading-display mt-5 text-2xl font-light text-white md:text-3xl">
                          {item.title}
                        </h3>

                        <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
                          {item.copy}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#08090b] py-16 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-32"
              style={{
                background:
                  "linear-gradient(to bottom, #0a0b0e 0%, rgba(10,11,14,0.72) 30%, transparent 100%)",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 82% 30%, rgba(251,191,36,0.05), transparent 32%)",
              }}
            />

            <div className="relative z-10 w-full px-6 md:px-8 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
                <Reveal direction="left">
                  <div>
                    <SectionLabel>03 / Who I Work With</SectionLabel>

                    <h2 className="heading-display max-w-lg text-4xl font-light leading-tight text-white md:text-5xl">
                      Built for businesses that value a{" "}
                      <span className="italic text-amber-300">
                        thoughtful digital presence.
                      </span>
                    </h2>

                    <p className="mt-6 max-w-md text-base leading-8 text-zinc-300">
                      I work best with people who care about how their business
                      is presented and want a digital presence that feels
                      considered, professional and genuinely useful.
                    </p>
                  </div>
                </Reveal>

                <div className="grid gap-8 md:grid-cols-3">
                  {[
                    {
                      number: "01",
                      title: "Small Businesses",
                      copy: "Helping established local businesses strengthen their online presence, communicate more clearly and build greater trust with their customers.",
                    },
                    {
                      number: "02",
                      title: "Startups",
                      copy: "Supporting new ventures with the digital foundations they need to look credible and professional from the beginning.",
                    },
                    {
                      number: "03",
                      title: "Entrepreneurs",
                      copy: "Helping founders and independent business owners present their ideas, services and expertise with confidence online.",
                    },
                  ].map((item, index) => (
                    <Reveal key={item.number} delay={120 + index * 110}>
                      <div className="border-t border-white/10 pt-7">
                        <div className="text-xs tracking-[0.22em] text-amber-300/75">
                          {item.number}
                        </div>

                        <h3 className="heading-display mt-5 text-2xl font-light leading-tight text-white md:text-3xl">
                          {item.title}
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-zinc-300">
                          {item.copy}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden  bg-[#0D0E11] py-16 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 18% 35%, rgba(251,191,36,0.055), transparent 34%), radial-gradient(circle at 86% 70%, rgba(244,199,107,0.025), transparent 28%)",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-28"
              style={{
                background:
                  "linear-gradient(to bottom, #08090b 0%, rgba(8,9,11,0.72) 28%, transparent 100%)",
              }}
            />

            <div className="relative z-10 w-full px-6 md:px-8 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16">
                <Reveal direction="left">
                  <div>
                    <SectionLabel>04 / How I Work</SectionLabel>

                    <h2 className="heading-display max-w-lg text-4xl font-light leading-tight text-white md:text-5xl">
                      A straightforward process from{" "}
                      <span className="italic text-amber-300">
                        idea to launch.
                      </span>
                    </h2>

                    <p className="mt-6 max-w-md text-base leading-8 text-zinc-300">
                      I keep the process clear and collaborative, so you always
                      know what is happening, what comes next and where your
                      project is heading.
                    </p>
                  </div>
                </Reveal>

                <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                  {approachSteps.map((step, index) => (
                    <Reveal key={step.number} delay={120 + index * 110}>
                      <div className="border-t border-white/10 pt-7">
                        <div className="text-xs tracking-[0.22em] text-amber-300/75">
                          {step.number}
                        </div>

                        <h3 className="heading-display mt-5 text-2xl font-light text-white">
                          {step.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-zinc-300">
                          {step.copy}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-16 md:py-24"
            style={{
              background:
                "linear-gradient(to bottom, #0D0E11 0%, #0b0c0f 20%, #08090b 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 22% 45%, rgba(251,191,36,0.065), transparent 34%), radial-gradient(circle at 88% 70%, rgba(244,199,107,0.025), transparent 28%)",
              }}
            />

            <div className="relative z-10 w-full px-6 md:px-8 lg:px-10">
              <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                {/* Founder portrait */}
                <Reveal direction="left">
                  <div className="relative w-full max-w-[560px] lg:justify-self-start">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.10),transparent_65%)] blur-2xl"
                    />

                    <div className="overflow-hidden rounded-[1rem] border border-white/10 bg-[#0b0c0e]">
                      <img
                        src="/images/rjm-founder-cyber.jpg"
                        alt="Rj, founder of RjM Studio"
                        fetchPriority="high"
                        decoding="async"
                        className="aspect-[4/5] h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </Reveal>

                {/* Founder story */}
                <div className="max-w-2xl">
                  <Reveal direction="right">
                    <div>
                      <SectionLabel>05 / The Person Behind RjM</SectionLabel>

                      <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-5xl">
                        I’m Rj.{" "}
                        <span className="italic text-amber-300">
                          Founder of RjM Studio.
                        </span>
                      </h2>
                    </div>
                  </Reveal>

                  <Reveal direction="right" delay={120}>
                    <p className="mt-7 text-lg leading-8 text-zinc-200">
                      When you work with RjM Studio, you work directly with me —
                      from the first conversation and planning through to
                      design, development, launch and ongoing support.
                    </p>
                  </Reveal>

                  <Reveal direction="right" delay={210}>
                    <p className="mt-5 text-base leading-8 text-zinc-300">
                      I enjoy the space where creativity and technology meet.
                      Building websites gives me the opportunity to combine
                      visual thinking with problem solving, development and the
                      technical awareness I’ve developed through my background
                      in IT and cybersecurity.
                    </p>
                  </Reveal>

                  <Reveal direction="right" delay={300}>
                    <p className="mt-5 text-base leading-8 text-zinc-400">
                      Being independent also means I can stay close to each
                      project. There are no layers of account management or
                      hand-offs between departments — just clear communication,
                      practical advice and a genuine interest in creating
                      something that works well for your business.
                    </p>
                  </Reveal>

                  <div className="mt-9 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-3">
                    <Reveal direction="right" delay={390}>
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-amber-300/75">
                          Design
                        </div>
                        <div className="mt-2 text-sm text-zinc-300">
                          Thoughtful & purposeful
                        </div>
                      </div>
                    </Reveal>

                    <Reveal direction="right" delay={460}>
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-amber-300/75">
                          Technology
                        </div>
                        <div className="mt-2 text-sm text-zinc-300">
                          Practical & reliable
                        </div>
                      </div>
                    </Reveal>

                    <Reveal direction="right" delay={530}>
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-amber-300/75">
                          Working Style
                        </div>
                        <div className="mt-2 text-sm text-zinc-300">
                          Direct & collaborative
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-20 md:py-24"
            style={{
              background:
                "linear-gradient(to bottom, #08090b 0%, #0b0c0f 42%, #06070a 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 18% 40%, rgba(251,191,36,0.065), transparent 34%), radial-gradient(circle at 86% 60%, rgba(244,199,107,0.03), transparent 30%)",
              }}
            />

            <div className="relative z-10 w-full px-6 md:px-8 lg:px-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
                <Reveal direction="left">
                  <div className="max-w-4xl">
                    <SectionLabel>Let’s Work Together</SectionLabel>

                    <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-6xl">
                      Have something in mind?{" "}
                      <span className="italic text-amber-300">
                        Let’s build it together.
                      </span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300">
                      Whether you need a new website, a thoughtful refresh or
                      ongoing digital support, tell me what you’re working on
                      and we can explore the right way forward.
                    </p>
                  </div>
                </Reveal>

                <Reveal direction="right" delay={180}>
                  <div>
                    <Link
                      to="/contact"
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-flex min-h-12 items-center justify-center rounded-md border border-amber-300 bg-amber-300 px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-amber-200"
                    >
                      Start a Conversation
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
