import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";

import {
  ArrowRight,
  LayoutTemplate,
  Menu,
  MonitorSmartphone,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const navItems = ["Home", "Services", "Work", "About", "Contact"];

const trustPoints = [
  {
    icon: MonitorSmartphone,
    title: "Custom Websites",
    copy: "Built around your business goals.",
  },
  {
    icon: LayoutTemplate,
    title: "Website Refreshes",
    copy: "Modernise and improve your existing site.",
  },
  {
    icon: Wrench,
    title: "Digital Support",
    copy: "Ongoing help after launch.",
  },
  {
    icon: ShieldCheck,
    title: "Security-Aware Build",
    copy: "Built with sensible security practices in mind.",
  },
];

const services = [
  {
    number: "01",
    title: "Custom Websites",
    copy: "Modern, responsive websites designed around your business, audience and goals — built to communicate clearly, build trust and work beautifully across every screen.",
  },
  {
    number: "02",
    title: "Website Refreshes",
    copy: "Improve an existing website with stronger visuals, clearer structure and a better user experience — without rebuilding from scratch when it isn’t necessary.",
  },
  {
    number: "03",
    title: "Digital Support",
    copy: "Practical ongoing support for website updates, content changes, troubleshooting and the day-to-day digital work that keeps your business current and running smoothly.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Discover",
    copy: "I start by understanding your business, audience and goals so the project is built around what actually matters.",
  },
  {
    number: "2",
    title: "Create",
    copy: "I design and build with clarity, usability and your brand in mind, keeping you involved throughout the process.",
  },
  {
    number: "3",
    title: "Launch",
    copy: "Before launch, everything is refined, tested and checked across devices so your website is ready to represent your business confidently.",
  },
  {
    number: "4",
    title: "Support",
    copy: "After launch, I can help with updates, improvements and ongoing digital support as your business evolves.",
  },
];

function ScriptLogo() {
  return (
    <Link
      to="/"
      onClick={() => window.scrollTo(0, 0)}
      className="relative z-50 shrink-0"
      aria-label="RjM Studio home"
    >
      <img
        src="/images/rjm-logo4.webp"
        alt="RjM Studio"
        width={252}
        height={84}
        fetchPriority="high"
        decoding="async"
        className="h-12 w-auto object-contain"
      />
    </Link>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 text-xs uppercase tracking-[0.35em] text-amber-300/80">
      {children}
    </div>
  );
}

function HeroVisual() {
  const lines = [
    "const studio = {",
    '  name: "RJM Studio",',
    '  location: "Isle of Man",',
    '  focus: "Your business",',
    "};",
    "",
    "export default function Website() {",
    "  return <Experience",
    "    studio={studio}",
    '    design="thoughtful"',
    "    responsive />;",
    "}",
  ];
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative w-full min-w-0 select-none pb-0 pt-0 sm:pb-16 sm:pt-24 lg:pt-24"
    >
      <div className="absolute inset-0 -z-10 rounded-full blur-3xl bg-[radial-gradient(ellipse_at_25%_40%,rgba(251,191,36,0.20),transparent_65%)]" />
      <div className="relative z-20 mb-4 rounded-2xl border border-amber-300/25 bg-[radial-gradient(circle_at_top_left,rgba(244,199,107,0.10),transparent_42%),linear-gradient(135deg,#111214,#0b0c0e)] p-5 sm:absolute sm:right-0 sm:top-0 sm:mb-0 sm:w-64 sm:pb-8">
        <p className="flex items-center gap-2 text-sm font-medium text-amber-200">
          <ShieldCheck className="h-5 w-5" /> Security by design
        </p>
        <p className="mt-3 text-xs leading-6 text-zinc-300">
          Thoughtful dependencies
          <br />
          Careful configuration
          <br />
          Security-conscious development
        </p>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-amber-300/50 bg-[#0b0c0e]/95 shadow-[0_0_60px_rgba(251,191,36,0.12)] sm:mr-7">
        <div className="flex items-center gap-4 border-b border-white/10 bg-white/5 px-4 py-3">
          <span className="flex gap-1.5">
            <i className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <i className="h-2.5 w-2.5 rounded-full bg-amber-200/60" />
            <i className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
          </span>
          <span className="min-w-0 flex-1 text-center font-mono text-xs text-zinc-400">
            rjm-studio / development
          </span>
        </div>
        <div className="heading-display border-b border-white/10 px-5 py-4 text-2xl text-white">
          RJM Studio
        </div>
        <div className="flex min-w-0">
          <div className="hidden w-36 shrink-0 border-r border-white/10 py-5 text-xs leading-7 text-zinc-400 sm:block xl:w-44">
            <p className="px-4 text-zinc-200">Explorer</p>
            <p className="mt-3 bg-amber-300/10 px-4 text-amber-200">
              ⌄ rjm-studio
            </p>
            <div className="px-6">
              src
              <br /> components
              <br /> pages
              <br /> styles
              <br />
              <span className="text-amber-200"> website.tsx</span>
              <br /> package.json
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between gap-2 border-b border-white/10 px-4 py-3 font-mono text-xs text-zinc-400">
              <span className="text-amber-200">website.tsx</span>
              <span>main</span>
            </div>
            <div className="py-5 font-mono text-[0.7rem] leading-6 xl:text-sm xl:leading-7">
              {lines.map((line, index) => (
                <div key={index} className="flex px-3 xl:px-4">
                  <span className="mr-3 w-4 shrink-0 text-right text-zinc-600">
                    {index + 1}
                  </span>
                  <code
                    className={`min-w-0 whitespace-pre-wrap break-words ${line.includes('"') ? "text-amber-200" : "text-zinc-300"}`}
                  >
                    {line || " "}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 pb-6 pt-3 sm:pb-8">
          <div className="mb-3 flex flex-wrap gap-5 text-xs text-zinc-400">
            <span className="border-b border-amber-300 pb-2 text-amber-200">
              Terminal
            </span>
            <span>Console</span>
            <span>Output</span>
          </div>
          <p className="font-mono text-xs leading-6 text-zinc-300">
            <span className="text-amber-300">›</span> npm run build
            <br />
            Design · Develop · Refine
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            Illustrative development workspace
          </p>
        </div>
      </div>
      <div className="relative mt-4 rounded-2xl border border-amber-300/60 bg-[radial-gradient(circle_at_top_left,rgba(244,199,107,0.11),transparent_45%),linear-gradient(120deg,#111214,#0b0c0e)] p-5 shadow-[0_12px_50px_rgba(0,0,0,0.5)] sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:w-72 xl:w-80">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">
              Built with care
            </p>
            <p className="heading-display mt-3 text-3xl text-white">
              Ready for your next step.
            </p>
          </div>
          <ShieldCheck className="h-12 w-12 shrink-0 text-amber-300" />
        </div>
        <p className="mt-3 text-sm text-zinc-300">
          Performance · Usability · Security
        </p>
      </div>
    </div>
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
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

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

export default function RJMStudioHomepageApp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const activeItem = "Home";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>
          Web Design Isle of Man | Websites & Digital Support | RjM Studio
        </title>
        <meta
          name="description"
          content="RjM Studio provides web design, website refreshes and digital support for small businesses in the Isle of Man. Professional, responsive websites built to improve trust and generate enquiries."
        />
        <meta
          property="og:title"
          content="Web Design Isle of Man | Websites & Digital Support | RjM Studio"
        />
        <meta
          property="og:description"
          content="RjM Studio provides web design, website refreshes and digital support for small businesses in the Isle of Man. Professional, responsive websites built to improve trust and generate enquiries."
        />
        <meta
          property="og:image"
          content="https://www.rjm-studio.co.uk/images/og-image.png"
        />
        <meta property="og:url" content="https://www.rjm-studio.co.uk/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative min-h-screen bg-[#06070a] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2"
          style={{
            background:
              "radial-gradient(circle at 18% 42%, rgba(251,191,36,0.10), transparent 36%), radial-gradient(circle at 82% 58%, rgba(251,191,36,0.045), transparent 32%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[220px] bg-[linear-gradient(to_bottom,rgba(244,199,107,0.08),rgba(244,199,107,0.025),transparent)]"
          aria-hidden="true"
        />

        {/* Existing page background */}
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.035),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(244,199,107,0.045),transparent_22%),radial-gradient(circle_at_top_right,rgba(244,199,107,0.08),transparent_16%)]" />

        <div className="relative w-full px-6 pb-20 pt-6 md:px-8 lg:px-10">
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
                  className="hidden rounded-md border border-amber-300/60 px-5 py-2.5 text-sm text-amber-100 transition hover:bg-amber-300/10 md:inline-flex"
                >
                  Get in Touch
                </Link>

                <button
                  className="inline-flex rounded-full border border-white/10 p-2.5 text-zinc-300 lg:hidden"
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

          <section
            aria-labelledby="hero-heading"
            className="relative isolate grid min-w-0 items-center gap-12 pb-16 pt-12 md:gap-14 md:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 xl:gap-14"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_60%_40%,rgba(251,191,36,0.14),transparent_60%)]"
            />
            <div className="relative z-10 min-w-0">
              {/* Label + headline */}
              <Reveal>
                <div>
                  <p className="mb-6 max-w-lg text-xs font-medium uppercase leading-6 tracking-[0.18em] text-amber-200 sm:text-sm">
                    Web Design &amp; Digital Support · Isle of Man
                  </p>

                  <h1
                    id="hero-heading"
                    className="heading-display max-w-2xl text-5xl font-light leading-[1.04] tracking-tight text-white sm:text-6xl xl:text-7xl"
                  >
                    Websites designed to make your business{" "}
                    <span className="italic text-amber-300 [font-synthesis:style]">
                      look the part.
                    </span>
                  </h1>
                </div>
              </Reveal>

              {/* Supporting copy */}
              <Reveal delay={120}>
                <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
                  RjM Studio is an independent web design studio based in the
                  Isle of Man, helping small businesses launch, refresh and
                  improve websites that look professional, build trust and make
                  it easier for customers to enquire.
                </p>
              </Reveal>

              {/* CTAs */}
              <Reveal delay={220}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Link
                    to="/work"
                    className="inline-flex min-h-12 items-center justify-center rounded-md border border-amber-300 bg-gradient-to-b from-amber-200 to-amber-400 px-8 py-4 text-base font-semibold !text-black transition-colors hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200 motion-reduce:transition-none"
                  >
                    View My Work
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-md border border-zinc-300 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-amber-300/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200 motion-reduce:transition-none"
                  >
                    Start a Project
                  </Link>
                </div>
              </Reveal>

              {/* Trust line */}
              <Reveal delay={300}>
                <p className="mt-7 flex max-w-xl items-start gap-2.5 text-sm italic leading-6 text-zinc-300">
                  <ShieldCheck
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-amber-300/80"
                  />
                  Built with performance, usability and security in mind.
                </p>
              </Reveal>
            </div>

            <HeroVisual />
          </section>

          <section className="py-7">
            <div className="overflow-hidden rounded-[1rem] border border-amber-300/15 bg-[radial-gradient(circle_at_top_left,rgba(244,199,107,0.075),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))]">
              <div className="grid md:grid-cols-2 xl:grid-cols-4">
                {trustPoints.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`flex gap-4 px-6 py-6 ${
                        index !== trustPoints.length - 1
                          ? "border-b rgba(255,255,255,0.05) xl:border-b-0 xl:border-r"
                          : ""
                      }`}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-300/25 bg-amber-300/5 text-amber-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-base font-medium text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-zinc-400">
                          {item.copy}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="services" className="relative py-20 md:py-28">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2"
              style={{
                background:
                  "radial-gradient(circle at 12% 42%, rgba(251,191,36,0.055), transparent 30%)",
              }}
            />

            <div className="relative z-10">
              <Reveal>
                <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                  <div>
                    <SectionLabel>Services</SectionLabel>

                    <h2 className="heading-display max-w-2xl text-4xl font-light leading-tight text-white md:text-6xl">
                      Digital work built around{" "}
                      <span className="italic text-amber-300">
                        your business.
                      </span>
                    </h2>
                  </div>

                  <div className="lg:pb-2">
                    <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                      From new websites to thoughtful refreshes and ongoing
                      support, every project is shaped around what your business
                      actually needs with a focus on clarity, trust and making
                      it easier for customers to take the next step.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div>
                {services.map((service, index) => (
                  <Reveal key={service.number} delay={index * 90}>
                    <Link
                      to="/services"
                      onClick={() => window.scrollTo(0, 0)}
                      className="group grid gap-6 border-b border-white/10 py-10 transition md:py-12 lg:grid-cols-[0.22fr_0.78fr_1fr_auto] lg:items-center lg:gap-10"
                    >
                      <div className="text-sm tracking-[0.24em] text-amber-300/75">
                        {service.number}
                      </div>

                      <h3 className="heading-display text-3xl font-light text-white transition group-hover:text-amber-200 md:text-4xl">
                        {service.title}
                      </h3>

                      <p className="max-w-2xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
                        {service.copy}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-zinc-400 transition group-hover:text-amber-300">
                        Explore
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={120}>
                <div className="mt-8 flex justify-end">
                  <Link
                    to="/services"
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-flex items-center gap-2 text-sm text-amber-300 transition hover:text-amber-200"
                  >
                    View All Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="work" className="relative py-20 md:py-28">
            {/* Section heading */}
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                <div>
                  <SectionLabel>Selected Work</SectionLabel>

                  <h2 className="heading-display max-w-3xl text-4xl font-light leading-tight text-white md:text-6xl">
                    Real work.{" "}
                    <span className="italic text-amber-300">
                      Thoughtfully built.
                    </span>
                  </h2>
                </div>

                <div className="lg:pb-2">
                  <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                    A selection of websites created to strengthen brands,
                    improve usability and make it easier for customers to
                    understand, trust and engage with the business.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Featured project — Ventosus */}
            <div className="mt-14 md:mt-20">
              <Reveal delay={80}>
                <Link
                  to="/work/ventosus"
                  onClick={() => window.scrollTo(0, 0)}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-[0.8rem] border border-white/10 bg-[#0b0c0e]">
                    <img
                      src="/images/ventosus/home-after-1920.jpg"
                      srcSet="/images/ventosus/home-after-640.jpg 640w, /images/ventosus/home-after-1280.jpg 1280w, /images/ventosus/home-after-1920.jpg 1920w"
                      sizes="100vw"
                      width={2504}
                      height={1219}
                      alt="Ventosus Micro Winery website redesign"
                      fetchPriority="high"
                      decoding="async"
                      className="h-auto w-full object-contain object-top transition duration-700 ease-out group-hover:scale-[1.01]"
                    />
                  </div>
                </Link>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-7 grid gap-6 border-b border-white/10 pb-12 lg:grid-cols-[0.75fr_1.25fr]">
                  <div>
                    <div className="text-xs uppercase tracking-[0.26em] text-amber-300/75">
                      Featured Case Study
                    </div>

                    <div className="mt-3 text-sm text-zinc-500">
                      Website Refresh · WordPress / WooCommerce · Isle of Man
                    </div>
                  </div>

                  <div>
                    <h3 className="heading-display text-3xl font-light text-white md:text-4xl">
                      Ventosus Micro Winery
                    </h3>

                    <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
                      A complete website refresh focused on stronger visual
                      presentation, clearer content hierarchy and a more
                      polished customer experience, making it easier for
                      visitors to explore the winery, its products and
                      experiences.
                    </p>

                    <Link
                      to="/work/ventosus"
                      onClick={() => window.scrollTo(0, 0)}
                      className="mt-6 inline-flex items-center gap-2 text-sm text-amber-300 transition hover:text-amber-200"
                    >
                      Explore Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Tea Evolution */}
            <div className="grid gap-10 border-b border-white/10 py-14 md:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-16">
              <Reveal direction="left">
                <a
                  href="https://tea-evolution.im/"
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <div className="overflow-hidden rounded-[0.8rem] border border-white/10 bg-[#0b0c0e]">
                    <img
                      src="/images/Teaevolution.png"
                      alt="Tea Evolution website"
                      loading="lazy"
                      fetchPriority="auto"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </a>
              </Reveal>

              <Reveal direction="right" delay={100}>
                <div>
                  <div className="text-xs uppercase tracking-[0.26em] text-amber-300/75">
                    Web Design
                  </div>

                  <h3 className="heading-display mt-4 text-3xl font-light text-white md:text-4xl">
                    Tea Evolution
                  </h3>

                  <p className="mt-5 text-base leading-8 text-zinc-400">
                    A vibrant website designed to showcase Tea Evolution’s
                    products, atmosphere and brand personality while giving
                    customers a clearer, more engaging way to explore the
                    business online.
                  </p>

                  <a
                    href="https://tea-evolution.im/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-amber-300 transition hover:text-amber-200"
                  >
                    Visit Live Site
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* D'Barber */}
            <div className="grid gap-10 py-14 md:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16">
              <Reveal direction="left" className="lg:order-1">
                <div>
                  <div className="text-xs uppercase tracking-[0.26em] text-amber-300/75">
                    Web Design
                  </div>

                  <h3 className="heading-display mt-4 text-3xl font-light text-white md:text-4xl">
                    D’Barber
                  </h3>

                  <p className="mt-5 text-base leading-8 text-zinc-400">
                    A bold barbershop website designed to communicate the brand
                    clearly, build confidence and create a strong first
                    impression before customers ever step through the door.
                  </p>

                  <a
                    href="https://dbarber.im/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-amber-300 transition hover:text-amber-200"
                  >
                    Visit Live Site
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>

              <Reveal direction="right" delay={100} className="lg:order-2">
                <a
                  href="https://dbarber.im/"
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <div className="overflow-hidden rounded-[0.8rem] border border-white/10 bg-[#0b0c0e]">
                    <img
                      src="/images/Dbarber.png"
                      alt="D'Barber website"
                      loading="lazy"
                      fetchPriority="auto"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </a>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <div className="mt-4 flex justify-end">
                <Link
                  to="/work"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-amber-300"
                >
                  View All Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </section>

          <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-20 md:py-28">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 14% 42%, rgba(251,191,36,0.065), transparent 30%), radial-gradient(circle at 86% 65%, rgba(244,199,107,0.025), transparent 26%)",
              }}
            />

            <div className="relative z-10 w-full px-6 md:px-8 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                {/* Main statement */}
                <Reveal direction="left">
                  <div>
                    <SectionLabel>Why RjM Studio</SectionLabel>

                    <h2 className="heading-display max-w-xl text-4xl font-light leading-tight text-white md:text-6xl">
                      Small studio.{" "}
                      <span className="italic text-amber-300">
                        Direct relationship.
                      </span>
                    </h2>
                  </div>
                </Reveal>

                {/* Founder positioning */}
                <Reveal direction="right" delay={100}>
                  <div className="max-w-3xl lg:pt-8">
                    <p className="text-xl leading-9 text-zinc-200 md:text-2xl md:leading-10">
                      When you work with RjM Studio, you work directly with me,
                      from the first conversation through design, development,
                      launch and ongoing support.
                    </p>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
                      I combine thoughtful design, practical technology and
                      security-aware thinking to create websites and digital
                      solutions that look professional, work reliably and
                      support the way your business actually operates.
                    </p>

                    <Link
                      to="/about"
                      onClick={() => window.scrollTo(0, 0)}
                      className="mt-7 inline-flex items-center gap-2 text-sm text-amber-300 transition hover:text-amber-200"
                    >
                      More About RjM Studio
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Principles */}
              <div className="mt-16 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                {[
                  {
                    number: "01",
                    title: "Thoughtful Design",
                    copy: "Clear, considered design shaped around your business, audience and the actions you want customers to take.",
                  },
                  {
                    number: "02",
                    title: "Practical Technology",
                    copy: "Digital solutions chosen for reliability, usability and what will genuinely work for your business.",
                  },
                  {
                    number: "03",
                    title: "Security-Aware",
                    copy: "A security-conscious approach informed by experience in IT and cybersecurity, without unnecessary complexity.",
                  },
                  {
                    number: "04",
                    title: "Ongoing Support",
                    copy: "Direct help after launch for updates, improvements and the digital tasks that keep your business moving.",
                  },
                ].map((item, index) => (
                  <Reveal key={item.number} delay={index * 90}>
                    <div className="border-t border-white/10 pt-6">
                      <div className="text-xs tracking-[0.22em] text-amber-300/75">
                        {item.number}
                      </div>

                      <h3 className="heading-display mt-5 text-2xl font-light text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-zinc-400">
                        {item.copy}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section
            className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-20 md:py-28"
            style={{
              background:
                "linear-gradient(to bottom, #06070a 0%, #0a0b0e 48%, #08090b 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 82% 38%, rgba(251,191,36,0.045), transparent 30%)",
              }}
            />

            <div className="relative z-10 w-full px-6 md:px-8 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16">
                {/* Introduction */}
                <Reveal direction="left">
                  <div>
                    <SectionLabel>My Process</SectionLabel>

                    <h2 className="heading-display max-w-lg text-4xl font-light leading-tight text-white md:text-6xl">
                      A simple process, built around{" "}
                      <span className="italic text-amber-300">clarity.</span>
                    </h2>

                    <p className="mt-6 max-w-md text-base leading-8 text-zinc-400">
                      Clear communication, practical decisions and a
                      straightforward path from the first conversation through
                      launch and beyond.
                    </p>
                  </div>
                </Reveal>

                {/* Process steps */}
                <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                  {processSteps.map((step, index) => (
                    <Reveal key={step.number} delay={index * 100}>
                      <div className="border-t border-white/10 pt-7">
                        <div className="text-xs tracking-[0.22em] text-amber-300/75">
                          0{step.number}
                        </div>

                        <h3 className="heading-display mt-5 text-2xl font-light text-white">
                          {step.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-zinc-400">
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
            id="about"
            className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-20 md:py-28"
            style={{
              background:
                "linear-gradient(to bottom, #08090b 0%, #0D0E11 48%, #08090b 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 18% 45%, rgba(251,191,36,0.055), transparent 30%), radial-gradient(circle at 86% 62%, rgba(244,199,107,0.025), transparent 28%)",
              }}
            />

            <div className="relative z-10 w-full px-6 md:px-8 lg:px-10">
              <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                {/* Founder image */}
                <Reveal direction="left">
                  <div className="relative max-w-[560px]">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08),transparent_62%)] blur-2xl"
                    />

                    <img
                      src="/images/rjm-founder-cyber.jpg"
                      alt="Rj, founder of RjM Studio"
                      fetchPriority="high"
                      decoding="async"
                      className="aspect-[4/5] w-full rounded-[0.7rem] object-cover object-center"
                    />
                  </div>
                </Reveal>

                {/* Founder copy */}
                <Reveal direction="right" delay={100}>
                  <div className="max-w-3xl">
                    <SectionLabel>Behind RjM Studio</SectionLabel>

                    <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-6xl">
                      Independent by design.{" "}
                      <span className="italic text-amber-300">
                        Personal by nature.
                      </span>
                    </h2>

                    <p className="mt-7 text-xl leading-9 text-zinc-200">
                      I’m Rj, the person behind RjM Studio.
                    </p>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                      My background combines web development, digital design, IT
                      and cybersecurity. That mix helps me create websites that
                      are visually considered, technically sound and shaped
                      around what the business actually needs.
                    </p>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                      Working independently means you deal directly with me
                      throughout the project, from the first conversation and
                      initial ideas through to launch, updates and ongoing
                      support.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-6">
                      <Link
                        to="/about"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center gap-2 text-sm text-amber-300 transition hover:text-amber-200"
                      >
                        Meet the Person Behind RjM Studio
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      <Link
                        to="/contact"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white"
                      >
                        Start a Conversation
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-20 md:py-28"
            style={{
              background:
                "linear-gradient(to bottom, #08090b 0%, #06070a 55%, #06070a 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 78% 42%, rgba(251,191,36,0.075), transparent 30%), radial-gradient(circle at 16% 78%, rgba(244,199,107,0.03), transparent 28%)",
              }}
            />

            <div className="relative z-10 w-full px-6 md:px-8 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-20">
                <Reveal direction="left">
                  <div>
                    <SectionLabel>Start a Conversation</SectionLabel>

                    <h2 className="heading-display max-w-2xl text-4xl font-light leading-tight text-white md:text-6xl">
                      Have something in mind?{" "}
                      <span className="italic text-amber-300">
                        Let’s build it together.
                      </span>
                    </h2>
                  </div>
                </Reveal>

                <Reveal direction="right" delay={100}>
                  <div className="max-w-2xl lg:pb-2">
                    <p className="text-lg leading-8 text-zinc-300">
                      Whether you need a new website, want to improve an
                      existing one or need ongoing digital support, tell me a
                      little about your business and what you’re trying to
                      achieve. I’ll come back to you with clear next steps.
                    </p>

                    <p className="mt-4 text-sm leading-7 text-zinc-500">
                      You don’t need to have everything figured out before
                      getting in touch, a simple idea or problem is enough to
                      start the conversation.
                    </p>

                    <div className="mt-8">
                      <Link
                        to="/contact"
                        onClick={() => window.scrollTo(0, 0)}
                        className="group inline-flex items-center gap-3 border-b border-amber-300/50 pb-2 text-base text-amber-300 transition hover:border-amber-200 hover:text-amber-200"
                      >
                        Start a Conversation
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={160}>
                <div className="mt-12 pt-2">
                  <div className="flex flex-col gap-3 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
                    <span>
                      Independent digital studio based in the Isle of Man.
                    </span>

                    <span>
                      Web Design · Website Refreshes · Digital Support
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
