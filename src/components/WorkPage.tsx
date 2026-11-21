import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Menu,
  MessageCircle,
  Pencil,
  LayoutTemplate,
  Rocket,
} from "lucide-react";

const navItems = ["Home", "Services", "Work", "About", "Contact"];

function ScriptLogo() {
  return (
    <img
      src="/images/rjm-logo4.png"
      alt="RJM Studio logo"
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

function SecondaryButton({
  children,
  as = "button",
  href,
}: {
  children: React.ReactNode;
  as?: "button" | "a";
  href?: string;
}) {
  if (as === "a") {
    return (
      <a
        href={href}
        className="inline-flex rounded-md border border-amber-300/70 px-6 py-3 text-sm text-white transition hover:bg-white/5"
      >
        {children}
      </a>
    );
  }

  return (
    <button className="cursor-pointer rounded-md border border-amber-300/70 px-6 py-3 text-sm text-white transition hover:bg-white/5">
      {children}
    </button>
  );
}

function PremiumCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[0.9rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] ${className}`}
    >
      {children}
    </div>
  );
}

const liveProjects = [
  {
    category: "Web Design",
    title: "Tea Evolution",
    copy: "A modern, vibrant website for a bubble tea brand built around product appeal, atmosphere, and handcrafted quality.",
    image: "/images/Teaevolution.png",
    href: "https://tea-evolution.im/",
  },
  {
    category: "Web Design",
    title: "D’Barber",
    copy: "A bold, masculine website for a barbershop focused on confidence, precision, and a strong first impression.",
    image: "/images/Dbarber.png",
    href: "https://dbarber.im/",
  },
];

const conceptProjects = [
  {
    category: "Concept",
    title: "Solea Studio",
    copy: "A calm, elevated concept for a premium wellness and skincare brand.",
    image: "/images/SoleaConcept.png",
  },
  {
    category: "Concept",
    title: "Northline Fitness",
    copy: "An energetic concept for a modern performance-driven fitness brand.",
    image: "/images/FitnessConcept.png",
  },
  {
    category: "Concept",
    title: "Buono",
    copy: "A warm restaurant concept built around appetite, atmosphere, and refined presentation.",
    image: "/images/BuonoConcept.png",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "Understand",
    copy: "I learn about your business, audience, and goals to shape the right foundation.",
  },
  {
    icon: Pencil,
    title: "Plan",
    copy: "Strategy, structure, and creative direction come together to guide the project clearly.",
  },
  {
    icon: LayoutTemplate,
    title: "Design",
    copy: "Thoughtful design and content choices bring your vision to life in a polished way.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    copy: "I help bring everything live and provide support when you need it after launch.",
  },
];

function ProjectCard({
  category,
  title,
  copy,
  image,
  href,
  external = false,
}: {
  category: string;
  title: string;
  copy: string;
  image: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <PremiumCard className="flex h-full flex-col overflow-hidden">
      <div className="aspect-[16/11] overflow-hidden border-b border-white/10">
        <img
          src={image}
          loading="lazy"
          decoding="async"
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="text-xs uppercase tracking-[0.28em] text-amber-300/80">
          {category}
        </div>

        <h3 className="mt-4 text-4xl font-light text-white">{title}</h3>

        <p className="mt-4 text-base leading-8 text-zinc-400">{copy}</p>

        {href ? (
          <div className="mt-auto pt-6">
            {external ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-amber-300 transition hover:text-amber-200"
              >
                Visit Live Site <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <Link
                to={href}
                className="inline-flex items-center gap-2 text-sm text-amber-300 transition hover:text-amber-200"
              >
                View Project <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        ) : (
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-500">
            Concept Preview
          </div>
        )}
      </div>
    </PremiumCard>
  );

  return content;
}

export default function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const activeItem = "Work";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Work | RjM Studio™</title>
        <meta
          name="description"
          content="View selected website and digital design work created by RJM Studio for small businesses."
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
      <div className="relative min-h-screen overflow-x-hidden bg-[#08090b] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 12% 14%, rgba(255,255,255,0.05), transparent 24%), radial-gradient(circle at 86% 16%, rgba(244,199,107,0.09), transparent 24%), radial-gradient(circle at 18% 68%, rgba(244,199,107,0.055), transparent 28%), radial-gradient(circle at 82% 82%, rgba(255,255,255,0.035), transparent 24%)",
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

          <section className="relative py-16 md:py-20 lg:py-24">
            {/* Subtle hero atmosphere */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2"
              style={{
                background:
                  "radial-gradient(circle at 18% 42%, rgba(244,199,107,0.11), transparent 30%), radial-gradient(circle at 76% 38%, rgba(251,191,36,0.055), transparent 30%)",
              }}
            />

            <div className="relative z-10">
              {/* Main hero */}
              <div className="grid items-center gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-20">
                {/* Left copy */}
                <div className="min-w-0">
                  <Reveal>
                    <div>
                      <SectionLabel>Our Work</SectionLabel>

                      <h1 className="heading-display max-w-xl text-5xl font-light leading-[1.03] tracking-tight text-white md:text-7xl">
                        Design that delivers{" "}
                        <span className="italic text-amber-300">impact.</span>
                      </h1>
                    </div>
                  </Reveal>

                  <Reveal delay={140}>
                    <p className="mt-7 max-w-[520px] text-lg leading-8 text-zinc-300">
                      A selection of websites and digital work created to
                      strengthen brands, improve online experiences and help
                      small businesses make a stronger impression.
                    </p>
                  </Reveal>

                  {/* Featured project details */}
                  <Reveal delay={220}>
                    <div className="mt-10 border-t border-white/10 pt-6">
                      <div className="text-xs uppercase tracking-[0.28em] text-amber-300/80">
                        01 / Featured Project
                      </div>

                      <div className="mt-3 heading-display text-2xl font-light text-white">
                        Ventosus Micro Winery
                      </div>

                      <p className="mt-2 text-sm leading-7 text-zinc-500">
                        Website Refresh · WordPress / WooCommerce · Isle of Man
                      </p>

                      <Link
                        to="/work/ventosus"
                        className="mt-5 inline-flex items-center gap-2 text-sm text-amber-300 transition hover:text-amber-200"
                      >
                        View Case Study
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </Reveal>
                </div>

                {/* Featured image — static */}
                <div className="relative">
                  <Link
                    to="/work/ventosus"
                    aria-label="View Ventosus Micro Winery case study"
                    className="group block overflow-hidden rounded-[0.8rem] border border-white/10 bg-[#0a0b0e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
                  >
                    <div className="overflow-hidden">
                      <img
                        src="/images/ventosus/home-after-1920.jpg"
                        srcSet="/images/ventosus/home-after-640.jpg 640w, /images/ventosus/home-after-1280.jpg 1280w, /images/ventosus/home-after-1920.jpg 1920w"
                        sizes="(max-width: 1023px) 100vw, 62vw"
                        width={2504}
                        height={1219}
                        alt="Ventosus Micro Winery website redesign"
                        className="h-auto w-full object-contain transition duration-700 group-hover:scale-[1.01]"
                      />
                    </div>

                    {/* Very subtle bottom treatment */}
                  </Link>
                </div>
              </div>

              {/* Project index */}
              <div className="mt-16 border-y border-white/10">
                <div className="grid md:grid-cols-3">
                  {/* Ventosus */}
                  <Link
                    to="/work/ventosus"
                    className="group flex items-center justify-between gap-6 border-b border-white/10 py-6 transition md:border-b-0 md:border-r md:px-7 md:first:pl-0 hover:bg-white/[0.02]"
                  >
                    <div>
                      <div className="text-xs tracking-[0.24em] text-amber-300/70">
                        01
                      </div>

                      <div className="mt-2 text-lg text-white">
                        Ventosus Micro Winery
                      </div>

                      <div className="mt-1 text-sm text-zinc-500">
                        Website Refresh
                      </div>
                    </div>

                    <ArrowRight className="h-4 w-4 shrink-0 text-amber-300/60 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* Tea Evolution */}
                  <a
                    href="https://tea-evolution.im/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-6 border-b border-white/10 py-6 transition md:border-b-0 md:border-r md:px-7 hover:bg-white/[0.02]"
                  >
                    <div>
                      <div className="text-xs tracking-[0.24em] text-zinc-600">
                        02
                      </div>

                      <div className="mt-2 text-lg text-white">
                        Tea Evolution
                      </div>

                      <div className="mt-1 text-sm text-zinc-500">
                        Web Design
                      </div>
                    </div>

                    <ExternalLink className="h-4 w-4 shrink-0 text-zinc-600 transition group-hover:text-amber-300" />
                  </a>

                  {/* D'Barber */}
                  <a
                    href="https://dbarber.im/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-6 py-6 transition md:px-7 md:last:pr-0 hover:bg-white/[0.02]"
                  >
                    <div>
                      <div className="text-xs tracking-[0.24em] text-zinc-600">
                        03
                      </div>

                      <div className="mt-2 text-lg text-white">D’Barber</div>

                      <div className="mt-1 text-sm text-zinc-500">
                        Web Design
                      </div>
                    </div>

                    <ExternalLink className="h-4 w-4 shrink-0 text-zinc-600 transition group-hover:text-amber-300" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-12">
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <SectionLabel>Live Projects</SectionLabel>
                <div className="h-px flex-1 bg-white/10" />
              </div>
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-2">
              {liveProjects.map((project, index) => (
                <Reveal key={project.title} delay={index * 110}>
                  <ProjectCard {...project} external={true} />
                </Reveal>
              ))}
            </div>
          </section>

          <section className="pt-14">
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <SectionLabel>Concept Projects</SectionLabel>
                <div className="h-px flex-1 bg-white/10" />
              </div>
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-3">
              {conceptProjects.map((project, index) => (
                <Reveal key={project.title} delay={index * 90}>
                  <ProjectCard {...project} />
                </Reveal>
              ))}
            </div>
          </section>

          <section className="border-t border-white/10 py-16 mt-16">
            <Reveal>
              {" "}
              <div className="text-center">
                <SectionLabel>How I Work</SectionLabel>
                <h2 className="heading-display mx-auto max-w-4xl text-4xl font-light leading-tight text-white md:text-5xl">
                  A thoughtful process built around your goals
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.title} delay={index * 90}>
                    <div className="relative">
                      {index < processSteps.length - 1 && (
                        <div className="absolute right-[-18px] top-8 hidden h-px w-9 bg-amber-300/40 lg:block" />
                      )}

                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/5 text-amber-200">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mt-5 text-2xl font-light text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-zinc-400">
                        {step.copy}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <section className="py-8">
            <Reveal>
              {" "}
              <PremiumCard className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-10">
                <div className="max-w-2xl">
                  <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-5xl">
                    Have a project{" "}
                    <span className="text-amber-300">in mind?</span>
                  </h2>
                  <p className="mt-4 text-base leading-8 text-zinc-400">
                    Let’s create something meaningful and impactful together.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                    <SecondaryButton>
                      <span className="inline-flex items-center gap-2">
                        Get in Touch <ArrowRight className="h-4 w-4" />
                      </span>
                    </SecondaryButton>
                  </Link>
                </div>
              </PremiumCard>
            </Reveal>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
