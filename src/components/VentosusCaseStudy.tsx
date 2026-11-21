import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ContentPageLayout from "./ContentPageLayout";

const comparisons = [
  {
    key: "home",
    title: "A more distinctive welcome",
    before: [2480, 1292],
    after: [2504, 1219],
    copy: "The original homepage presented introductory text and separate image links in a narrow column. The redesign gives the winery a full-width photographic introduction, a clear headline and prominent routes to wines, tours and information about the business.",
  },
  {
    key: "wines",
    title: "A clearer introduction to the collection",
    before: [2502, 1103],
    after: [2509, 1144],
    copy: "The original wines page led with a small image, category links and product cards. The redesigned view introduces the collection with a dedicated hero and a distinct Wine Categories section, giving the page a clearer visual hierarchy.",
  },
  {
    key: "weddings",
    title: "A stronger setting for wedding enquiries",
    before: [2503, 930],
    after: [2503, 1294],
    copy: "The original wedding page combined a bottle image with a list of services. The redesign pairs an introduction with a large reception photograph and a visible Plan Your Wedding Wines call to action, then leads into the supporting information.",
  },
];
function BrowserFrame({
  name,
  label,
  width,
  height,
  eager = false,
  highlight = false,
}: {
  name: string;
  label: string;
  width: number;
  height: number;
  eager?: boolean;
  highlight?: boolean;
}) {
  const base = `/images/ventosus/${name}`;
  return (
    <a
      href={`${base}-1920.webp`}
      className={`block overflow-hidden rounded-xl border bg-[#111214] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 ${highlight ? "border-amber-300/60 shadow-[0_10px_60px_rgba(251,191,36,0.06)]" : "border-white/25"}`}
      aria-label={`Open larger image: ${label}`}
    >
      <div
        aria-hidden="true"
        className="flex h-9 items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 sm:h-11"
      >
        <span className="h-2 w-2 rounded-full bg-amber-200/70" />
        <span className="h-2 w-2 rounded-full bg-amber-300/50" />
        <span className="h-2 w-2 rounded-full bg-zinc-500" />
        <span className="ml-5 h-3 w-1/3 rounded bg-white/10" />
      </div>
      <picture>
        <source
          type="image/webp"
          srcSet={`${base}-640.webp 640w, ${base}-1280.webp 1280w, ${base}-1920.webp 1920w`}
          sizes={
            eager
              ? "calc(100vw - 80px)"
              : "(max-width: 767px) calc(100vw - 48px), calc(50vw - 52px)"
          }
        />
        <img
          src={`${base}-1280.jpg`}
          srcSet={`${base}-640.jpg 640w, ${base}-1280.jpg 1280w, ${base}-1920.jpg 1920w`}
          sizes={
            eager
              ? "calc(100vw - 80px)"
              : "(max-width: 767px) calc(100vw - 48px), calc(50vw - 52px)"
          }
          width={width}
          height={height}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          decoding="async"
          alt={label}
          className="h-auto w-full"
        />
      </picture>
    </a>
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
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

const sectionLabel =
  "text-xs font-semibold uppercase leading-6 tracking-[0.18em] text-amber-200 sm:text-sm";
const sectionHeading =
  "heading-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl";
export default function VentosusCaseStudy() {
  return (
    <ContentPageLayout>
      <Helmet>
        <title>Ventosus Website Redesign | RJM Studio</title>
        <meta
          name="description"
          content="A before-and-after look at the Ventosus Micro Winery website redesign: homepage, wine collection and wedding pages."
        />
        <link
          rel="canonical"
          href="https://www.rjm-studio.co.uk/work/ventosus"
        />
      </Helmet>
      <article className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px]"
          style={{
            background:
              "radial-gradient(ellipse at 68% 24%, rgba(251,191,36,0.10), transparent 48%)",
          }}
        />
        <section className="pb-12 pt-10 md:pb-16 md:pt-14">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className={sectionLabel}>Selected work / Case study</p>

              <Link
                to="/work"
                className="inline-block py-3 text-sm underline decoration-amber-300/50 underline-offset-4 focus-visible:outline-2 focus-visible:outline-amber-300"
              >
                Back to work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="heading-display mt-7 break-words text-[clamp(4rem,10vw,8.5rem)] font-light leading-[0.9] tracking-[-0.035em] text-white">
              Ventosus
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
              A refined digital refresh for an Isle of Man micro winery.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <dl className="my-10 grid gap-6 border-y border-white/10 py-6 sm:my-12 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-amber-300/75">
                  Client
                </dt>

                <dd className="mt-2 text-base text-zinc-100">
                  Ventosus Micro Winery
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-amber-300/75">
                  Project
                </dt>

                <dd className="mt-2 text-base text-zinc-100">
                  Website Refresh
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-amber-300/75">
                  Platform
                </dt>

                <dd className="mt-2 text-base text-zinc-100">
                  WordPress / WooCommerce
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-amber-300/75">
                  Location
                </dt>

                <dd className="mt-2 text-base text-zinc-100">
                  Peel, Isle of Man
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-10 md:mt-14">
              <BrowserFrame
                name="home-after"
                label="Ventosus redesigned homepage"
                width={2504}
                height={1219}
                eager
                highlight
              />
            </div>
          </Reveal>
        </section>
        <section className="border-y border-white/10 py-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <Reveal direction="left">
              <div>
                <p className={sectionLabel}>01 / The project</p>

                <h2 className={`${sectionHeading} mt-4 max-w-lg`}>
                  A refresh focused on clarity, presentation and experience.
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-10 md:grid-cols-2">
              <Reveal delay={120}>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-amber-300/75">
                    The Challenge
                  </p>

                  <h3 className="heading-display mt-4 text-3xl font-light leading-tight text-white">
                    A functional site that needed a stronger presentation.
                  </h3>

                  <p className="mt-5 text-base leading-8 text-zinc-400">
                    Ventosus already had an established WordPress and
                    WooCommerce website, but the experience felt visually
                    inconsistent across key pages. Important content, imagery
                    and calls to action did not always receive the emphasis they
                    deserved.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-amber-300/75">
                    The Approach
                  </p>

                  <h3 className="heading-display mt-4 text-3xl font-light leading-tight text-white">
                    Improve the experience without replacing what already
                    worked.
                  </h3>

                  <p className="mt-5 text-base leading-8 text-zinc-400">
                    The refresh focused on presentation, hierarchy and
                    responsive behaviour while preserving the existing WordPress
                    and WooCommerce foundation. Larger imagery, clearer page
                    introductions and stronger calls to action helped create a
                    more polished customer experience.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={300}>
            <div className="mt-10">
              <a
                href="https://www.ventosus.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-amber-200 transition hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
              >
                Visit the live Ventosus website
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
        </section>

        <section
          className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-b border-white/10 bg-rgba(251,191,36,0.055) py-16 md:py-20"
          aria-labelledby="transformation-heading"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 18% 28%, rgba(251,191,36,0.10), transparent 30%), radial-gradient(circle at 86% 72%, rgba(251,191,36,0.035), transparent 28%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
            <Reveal direction="left">
              <div>
                <p className={sectionLabel}>02 / The transformation</p>

                <h2
                  id="transformation-heading"
                  className={`${sectionHeading} mt-4 max-w-3xl`}
                >
                  Before and after, with a clearer visual hierarchy.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                  The redesign focused on making each page feel more
                  intentional, easier to navigate, and more representative of
                  the Ventosus brand.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 space-y-20">
              {comparisons.map((item, index) => (
                <section
                  key={item.key}
                  className="border-t border-white/10 pt-10"
                >
                  <div className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-12">
                    <Reveal direction="left" delay={80}>
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-amber-300/70">
                          0{index + 1}
                        </div>

                        <h3 className="heading-display mt-4 text-3xl font-light leading-tight text-white md:text-4xl">
                          {item.title}
                        </h3>

                        <p className="mt-4 max-w-md text-base leading-8 text-zinc-400">
                          {item.copy}
                        </p>
                      </div>
                    </Reveal>

                    <div className="grid items-start gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                      <Reveal delay={160}>
                        <figure className="min-w-0">
                          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-zinc-500">
                            Original
                          </div>

                          <BrowserFrame
                            name={`${item.key}-before`}
                            label={`Ventosus ${
                              item.key === "home" ? "homepage" : item.key
                            } before the redesign`}
                            width={item.before[0]}
                            height={item.before[1]}
                          />
                        </figure>
                      </Reveal>

                      <Reveal delay={260}>
                        <figure className="min-w-0">
                          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-amber-300/80">
                            Redesigned
                          </div>

                          <BrowserFrame
                            name={`${item.key}-after`}
                            label={`Ventosus ${
                              item.key === "home" ? "homepage" : item.key
                            } after the redesign`}
                            width={item.after[0]}
                            height={item.after[1]}
                            highlight
                          />
                        </figure>
                      </Reveal>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <Reveal delay={220}>
              <p className="mt-10 text-sm leading-6 text-zinc-500">
                Select any screenshot to view it at a larger size. The captures
                show different portions of each page.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-b border-white/10 bg-[#090807] py-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 78% 42%, rgba(251,191,36,0.10), transparent 34%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
              <Reveal direction="left">
                <div>
                  <p className={sectionLabel}>03 / Key Improvements</p>

                  <h2 className={`${sectionHeading} mt-5 max-w-xl`}>
                    Refined where it mattered most.
                  </h2>

                  <p className="mt-7 max-w-lg text-base leading-8 text-zinc-400">
                    The refresh focused on creating a more polished and
                    consistent experience while making key information easier to
                    find and act on.
                  </p>
                </div>
              </Reveal>

              <div className="relative z-10">
                <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
                  {[
                    {
                      number: "01",
                      title: "Visual Presentation",
                      copy: "Larger photography and more considered typography give the key pages a stronger and more consistent visual identity.",
                    },
                    {
                      number: "02",
                      title: "Content Hierarchy",
                      copy: "Clearer introductions and stronger headings help visitors understand each page and its purpose more quickly.",
                    },
                    {
                      number: "03",
                      title: "Page Consistency",
                      copy: "The homepage, wine collection and wedding pages now feel more connected through a clearer design language.",
                    },
                    {
                      number: "04",
                      title: "Calls to Action",
                      copy: "More visible next steps make it easier to browse wines, explore experiences and enquire about wedding wines.",
                    },
                  ].map((item, index) => (
                    <Reveal key={item.number} delay={120 + index * 100}>
                      <div className="border-t border-white/10 pt-6">
                        <div className="text-xs tracking-[0.22em] text-amber-300/70">
                          {item.number}
                        </div>

                        <h3 className="heading-display mt-4 text-2xl font-light text-white md:text-3xl">
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
          </div>
        </section>

        <figure className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-b border-white/10 bg-[#06070a] py-16 md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 18% 35%, rgba(251,191,36,0.10), transparent 38%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
            <Reveal direction="left">
              <p className={sectionLabel}>In the client’s words</p>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.22fr_0.78fr] lg:gap-14">
              <Reveal direction="left" delay={100}>
                <div>
                  <span
                    aria-hidden="true"
                    className="heading-display block text-7xl font-light leading-none text-amber-300/70 md:text-8xl"
                  >
                    “
                  </span>
                </div>
              </Reveal>

              <Reveal direction="right" delay={180}>
                <div>
                  <blockquote className="max-w-5xl">
                    <p className="heading-display text-3xl font-light leading-[1.3] tracking-[-0.02em] text-zinc-100 sm:text-4xl lg:text-5xl">
                      We are so pleased we made that decision and can’t thank
                      you enough for all your efforts and the final outcome —
                      our new website is fantastic!
                    </p>
                  </blockquote>

                  <figcaption className="mt-10 border-t border-white/10 pt-6">
                    <div className="text-sm font-medium text-white">Rob</div>

                    <div className="mt-1 text-sm text-zinc-500">
                      Ventosus Micro Winery
                    </div>
                  </figcaption>
                </div>
              </Reveal>
            </div>
          </div>
        </figure>

        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/10 bg-[#090807] py-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 18% 40%, rgba(138,90,36,0.16), transparent 40%), radial-gradient(circle at 82% 65%, rgba(138,90,36,0.08), transparent 34%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
              <Reveal direction="left">
                <div>
                  <p className={sectionLabel}>Start a project</p>

                  <h2 className={`${sectionHeading} mt-4 max-w-3xl`}>
                    Ready to give your website the same level of attention?
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
                    Whether you need a complete website build or a thoughtful
                    refresh, RJM Studio can help create a digital presence that
                    feels clearer, more polished and more aligned with your
                    business.
                  </p>
                </div>
              </Reveal>

              <Reveal direction="right" delay={180}>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-md bg-amber-300 px-6 py-3 font-semibold !text-black transition hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
                  >
                    Start a Project
                  </Link>

                  <Link
                    to="/work"
                    className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-white transition hover:border-amber-300/40 hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
                  >
                    Explore More Work
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </article>
    </ContentPageLayout>
  );
}
