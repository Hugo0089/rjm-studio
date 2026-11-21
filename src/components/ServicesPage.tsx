import React from "react";
import { X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  MonitorSmartphone,
  RefreshCw,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const navItems = ["Home", "Services", "Work", "About", "Contact"];

const editorialServices = [
  {
    number: "01",
    icon: MonitorSmartphone,
    title: "Custom Websites",
    description:
      "Modern, responsive websites designed around your business, audience and goals, built to communicate clearly, build trust and make it easier for customers to take action.",
    includes: [
      "Responsive website design",
      "Custom development",
      "Mobile-first layouts",
      "Contact and enquiry setup",
      "SEO-ready structure",
      "Launch and handover support",
    ],
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "Website Refreshes",
    description:
      "Improve an existing website with stronger visuals, clearer structure and a better user experience, without rebuilding from scratch when it isn’t necessary.",
    includes: [
      "Website redesigns",
      "Layout improvements",
      "Responsive fixes",
      "Content restructuring",
      "CTA improvements",
      "Performance-focused updates",
    ],
  },
  {
    number: "03",
    icon: Wrench,
    title: "Digital Support",
    description:
      "Practical ongoing support for website updates, content changes, troubleshooting and the day-to-day digital work that keeps your business current and running smoothly.",
    includes: [
      "Website updates",
      "Technical troubleshooting",
      "Content changes",
      "Design support",
      "Landing page and section edits",
      "Ongoing maintenance",
    ],
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Security-Aware Development",
    description:
      "A security-conscious approach informed by my background in IT and cybersecurity, helping ensure websites are built and configured with sensible security practices in mind.",
    includes: [
      "Security-conscious implementation",
      "Secure configuration",
      "Dependency awareness",
      "Access best practices",
      "HTTPS and deployment considerations",
      "Performance and reliability",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "I start by understanding your business, goals and what you need from your website or digital presence.",
  },
  {
    number: "02",
    title: "Plan & Create",
    description:
      "I shape the right approach, then design and build with clarity, usability and your business in mind..",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Before launch, I refine, test and check everything carefully so the final result is ready to represent your business confidently.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "After launch, I can continue to help with updates, improvements and ongoing digital support as your business evolves..",
  },
];

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Do you offer custom quotes?",
    answer:
      "Yes. Every project is different, so I tailor each quote around the scope of work, your goals and the level of support you need. The pricing guides are a starting point rather than a one-size-fits-all package.",
  },
  {
    question: "How long does a website take?",
    answer:
      "Timelines depend on the size and complexity of the project, as well as how quickly content and feedback are available. Once I understand what you need, I’ll give you a clear project timeline before work begins.",
  },
  {
    question: "Do you write the content?",
    answer:
      "I can help shape, refine and organise your website content so it is clear, useful and works well online. If you already have copy, I can work with that too and suggest improvements where needed.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. I can provide ongoing website updates, content changes, troubleshooting and practical digital support after launch, depending on what your business needs.",
  },
  {
    question: "Can I request one-off work?",
    answer:
      "Yes. If you need help with a specific website update, design task, content change or piece of digital support, one-off work can be discussed depending on the scope and availability.",
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

export default function RJMStudioServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const activeItem = "Services";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Web Design & Digital Support Isle of Man | RjM Studio</title>
        <meta
          name="description"
          content="Explore website design, social media management, and digital support services from RJM Studio for small and medium businesses."
        />
        <meta
          property="og:title"
          content="Web Design & Digital Support Isle of Man | RjM Studio"
        />
        <meta
          property="og:description"
          content="Web design, website refreshes and digital support for small businesses in the Isle of Man. Explore tailored services from RjM Studio."
        />
        <meta
          property="og:image"
          content="https://www.rjm-studio.co.uk/images/og-image.png"
        />
        <meta
          property="og:url"
          content="https://www.rjm-studio.co.uk/services"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="relative min-h-screen overflow-x-clip bg-[#06070a] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.035), transparent 20%), radial-gradient(circle at bottom right, rgba(244,199,107,0.045), transparent 22%), radial-gradient(circle at top right, rgba(244,199,107,0.08), transparent 16%)",
          }}
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

          <section className="mt-13 relative min-h-[620px]">
            {/* Background image */}
            <div
              className="pointer-events-none absolute -top-20 -bottom-20 left-1/2 w-screen -translate-x-1/2"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.8) 32%, black 44%, black 58%, rgba(0,0,0,0.8) 68%, rgba(0,0,0,0.35) 82%, rgba(0,0,0,0.08) 92%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.8) 32%, black 44%, black 58%, rgba(0,0,0,0.8) 68%, rgba(0,0,0,0.35) 82%, rgba(0,0,0,0.08) 92%, transparent 100%)",
              }}
            >
              <img
                src="/images/services-workstation-hero.webp"
                alt="RjM Studio workstation showing web development and finished digital work"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Dark overlay for readability */}
            <div
              className="pointer-events-none absolute -top-20 -bottom-20 left-1/2 w-screen -translate-x-1/2 bg-gradient-to-r from-black/78 via-black/38 to-black/5"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.8) 32%, black 44%, black 58%, rgba(0,0,0,0.8) 68%, rgba(0,0,0,0.35) 82%, rgba(0,0,0,0.08) 92%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.8) 32%, black 44%, black 58%, rgba(0,0,0,0.8) 68%, rgba(0,0,0,0.35) 82%, rgba(0,0,0,0.08) 92%, transparent 100%)",
              }}
            />

            {/* Hero content */}
            <div className="relative z-10 flex h-full flex-col justify-center px-4 py-10 md:px-2 lg:px-4">
              <div className="max-w-[560px]">
                <Reveal>
                  <div>
                    <SectionLabel>Services</SectionLabel>

                    <h1 className="heading-display text-5xl font-light leading-[1.03] tracking-tight text-white md:text-7xl">
                      Web design and digital support{" "}
                      <span className="text-amber-300">
                        built around your business.
                      </span>
                    </h1>
                  </div>
                </Reveal>

                <Reveal delay={140}>
                  <p className="mt-6 max-w-[500px] text-lg leading-8 text-zinc-300">
                    RjM Studio provides custom web design, website refreshes and
                    ongoing digital support for small businesses in the Isle of
                    Man — helping you present your business clearly, build trust
                    and make it easier for customers to take the next step.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-t border-white/10 py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 12% 42%, rgba(251,191,36,0.055), transparent 30%)",
              }}
            />

            <div className="relative z-10 mx-auto w-full px-6 md:px-8 lg:px-10">
              <Reveal>
                <div className="mb-12 max-w-3xl">
                  <SectionLabel>What I Do</SectionLabel>

                  <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-5xl">
                    Digital services built around{" "}
                    <span className="text-amber-300">your business.</span>
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                    Whether you need a new website, want to improve an existing
                    one or need reliable support after launch, each service is
                    shaped around your business, goals and the level of support
                    you actually need.
                  </p>
                </div>
              </Reveal>

              <div className="border-b border-white/10">
                {editorialServices.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <Reveal key={service.number} delay={index * 90}>
                      <article className="grid gap-7 border-t border-white/10 py-10 md:py-12 lg:grid-cols-[110px_0.8fr_1.2fr] lg:gap-10">
                        <div>
                          <span className="heading-display text-5xl font-light italic text-amber-300/80 md:text-6xl">
                            {service.number}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-300/25 bg-amber-300/5 text-amber-300">
                              <Icon className="h-5 w-5" />
                            </div>

                            <h3 className="heading-display text-3xl font-light text-white md:text-4xl">
                              {service.title}
                            </h3>
                          </div>

                          <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">
                            {service.description}
                          </p>
                        </div>

                        <div className="lg:border-l lg:border-white/10 lg:pl-10">
                          <div className="text-xs uppercase tracking-[0.28em] text-amber-300/80">
                            What’s Included
                          </div>

                          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                            {service.includes.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-sm leading-6 text-zinc-300"
                              >
                                <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/10 bg-[#06070a] py-16 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 18% 22%, rgba(251,191,36,0.055), transparent 32%), radial-gradient(circle at 82% 70%, rgba(244,199,107,0.025), transparent 28%)",
              }}
            />
            <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr_1.15fr] lg:gap-0">
                <Reveal direction="left">
                  <div className="lg:pr-10">
                    <SectionLabel>Packages & Pricing</SectionLabel>

                    <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-5xl">
                      Flexible options to suit{" "}
                      <span className="italic text-amber-300">your needs.</span>
                    </h2>

                    <p className="mt-5 max-w-md text-base leading-8 text-zinc-300">
                      Every business has different needs and budgets. Explore
                      the current pricing guides for starting options, or get in
                      touch if you need something more tailored.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={100}>
                  <div className="flex flex-col border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:px-10 lg:pt-0">
                    <div className="text-2xl font-light text-white">
                      Website Packages
                    </div>

                    <p className="mt-4 max-w-md text-base leading-8 text-zinc-300 lg:min-h-[128px]">
                      Website refreshes, redesigns and custom builds for small
                      businesses that need a stronger, clearer and more
                      professional presence online.
                    </p>

                    <div className="flex flex-col gap-3 pt-7 sm:flex-row sm:flex-nowrap">
                      <a
                        href="/images/website-packages-guide.png"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-amber-300 bg-amber-300 px-5 py-3 text-sm font-medium text-black transition hover:bg-amber-200"
                      >
                        View Pricing Guide
                        <ArrowRight className="h-4 w-4" />
                      </a>

                      <a
                        href="/images/website-packages-guide.png"
                        download
                        className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md border border-amber-300/50 px-5 py-3 text-sm text-white transition hover:bg-white/5 sm:w-auto"
                      >
                        Download Guide
                      </a>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={200}>
                  <div className="flex flex-col border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:px-10 lg:pt-0">
                    <div className="text-2xl font-light text-white">
                      Social Media & Digital Support
                    </div>

                    <p className="mt-4 max-w-md text-base leading-8 text-zinc-300 lg:min-h-[128px]">
                      Ongoing content and digital support to help your business
                      stay active, consistent and professionally presented
                      online.
                    </p>

                    <div className="flex flex-col gap-3 pt-7 sm:flex-row sm:flex-nowrap">
                      <a
                        href="/images/social-media-support-packages-guide.png"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-amber-300 bg-amber-300 px-5 py-3 text-sm font-medium text-black transition hover:bg-amber-200"
                      >
                        View Pricing Guide
                        <ArrowRight className="h-4 w-4" />
                      </a>

                      <a
                        href="/images/social-media-support-packages-guide.png"
                        download
                        className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md border border-amber-300/50 px-5 py-3 text-sm text-white transition hover:bg-white/5 sm:w-auto"
                      >
                        Download Guide
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section
            className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-b border-white/10 py-20"
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
            <div className="mx-auto w-full px-6 md:px-8 lg:px-10">
              <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
                <Reveal direction="left">
                  <div>
                    <SectionLabel>My Process</SectionLabel>

                    <h2 className="heading-display max-w-md text-4xl font-light leading-tight text-white md:text-5xl">
                      A simple process, built around{" "}
                      <span className="italic text-amber-300">clarity.</span>
                    </h2>
                  </div>
                </Reveal>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {processSteps.map((step, index) => (
                    <Reveal key={step.number} delay={index * 90}>
                      <div className="border-t border-white/10 pt-6">
                        <div className="text-xs tracking-[0.24em] text-amber-300/80">
                          0{index + 1}
                        </div>

                        <h3 className="mt-5 text-xl font-light text-white">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-zinc-400">
                          {step.description}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/10 bg-[#06070a] py-10 md:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 18% 45%, rgba(251,191,36,0.055), transparent 30%), radial-gradient(circle at 84% 60%, rgba(244,199,107,0.025), transparent 28%)",
              }}
            />
            <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-10">
              <Reveal>
                <div className="grid gap-6 md:grid-cols-[90px_1fr] md:items-start">
                  <div className="heading-display text-6xl leading-none text-amber-300/80">
                    “
                  </div>

                  <figure>
                    <div className="mb-4 text-xs uppercase tracking-[0.28em] text-amber-300/70">
                      Client Feedback
                    </div>
                    <blockquote className="heading-display text-xl font-light italic leading-relaxed text-zinc-100 md:text-2xl">
                      <p>
                        We’ve reflected on our recent journey with you and its
                        impact on our business. It was a big decision for us as
                        a small company with limited funds, but we are so
                        pleased we made that decision and can’t thank you enough
                        for all your efforts and the final outcome — our new
                        website is fantastic!
                      </p>
                    </blockquote>

                    <figcaption className="mt-5 text-xs uppercase tracking-[0.22em] text-amber-200/80">
                      Rob — Ventosus Micro Winery, Isle of Man
                    </figcaption>
                  </figure>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="border-b border-white/10 py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
              <Reveal direction="left">
                <div>
                  <SectionLabel>FAQ</SectionLabel>

                  <h2 className="heading-display max-w-sm text-4xl font-light leading-tight text-white md:text-5xl">
                    Frequently asked{" "}
                    <span className="italic text-amber-300">questions.</span>
                  </h2>
                </div>
              </Reveal>

              <Reveal direction="right" delay={100}>
                <div className="border-t border-white/10">
                  {faqs.map((faq: FaqItem, index: number) => (
                    <div
                      key={faq.question}
                      className="border-b border-white/10"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(openFaq === index ? null : index)
                        }
                        className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-white"
                      >
                        <span className="text-base">{faq.question}</span>

                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-amber-300 transition-transform duration-200 ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openFaq === index && (
                        <div className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-zinc-400">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/10 bg-[#06070a] py-20 md:py-24">
            {/* Left bronze sweep */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 22% 35%, rgba(251,191,36,0.07), transparent 32%), radial-gradient(circle at 82% 68%, rgba(244,199,107,0.035), transparent 30%)",
              }}
            />

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-8">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.28em] text-amber-300/80">
                  Let’s Work Together
                </div>

                <h2 className="heading-display mt-5 text-4xl font-light leading-tight text-white md:text-6xl">
                  Tell me what your business{" "}
                  <span className="italic text-amber-300">needs next.</span>
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-300">
                  Whether you need a new website, want to improve an existing
                  one or need ongoing digital support, tell me a little about
                  what you’re working on. I’ll help you work out the right next
                  step.
                </p>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md border border-amber-300 bg-amber-300 px-7 py-3.5 text-sm font-medium text-black transition hover:bg-amber-200"
                  >
                    Start a Conversation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
