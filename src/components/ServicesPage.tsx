import React from "react";
import { X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import { useEffect, useState } from "react";
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
      "Modern websites designed around your business, audience, and goals — with a professional experience across every screen.",
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
      "Give an existing website a stronger visual presence, clearer structure, and a better experience without starting again unnecessarily.",
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
      "Practical ongoing help to keep your website and digital presence current, reliable, and working for your business.",
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
      "A security-conscious approach informed by cybersecurity experience, helping create websites that are considered carefully from build to launch.",
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
      "We chat about your business, goals, and what you need from your online presence.",
  },
  {
    number: "02",
    title: "Plan & Create",
    description:
      "I create a tailored plan and get to work bringing your vision to life.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "We review, refine, and launch with everything in place for a smooth handover.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Ongoing support and updates to keep your business moving forward.",
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
      "Yes. Every project is different, so quotes are tailored to the scope of work, your goals, and the level of support you need.",
  },
  {
    question: "How long does a website take?",
    answer:
      "Timelines depend on the size and complexity of the project. Smaller websites can move faster, while more detailed projects may take longer. Once I understand your requirements, I’ll give you a clearer timeline.",
  },
  {
    question: "Do you write the content?",
    answer:
      "I can help shape, refine, and organise your content so it works well online. If you already have content, I can work with that too.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. I can provide ongoing website, content, and digital support to help your business stay updated and consistent after launch.",
  },
  {
    question: "Can I request one-off work?",
    answer:
      "Yes. If you only need help with a specific update, design task, or piece of digital support, one-off work can be discussed depending on availability.",
  },
];

function ScriptLogo() {
  return (
    <a href="#" className="shrink-0">
      <img
        src="/images/rjm-logo4.png"
        alt="RJM Studio logo"
        className="h-12 w-auto object-contain"
      />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 text-xs uppercase tracking-[0.35em] text-amber-300/80">
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
        <title>Services | RjM Studio™</title>
        <meta
          name="description"
          content="Explore website design, social media management, and digital support services from RJM Studio for small and medium businesses."
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
      <div className="relative min-h-screen overflow-x-hidden bg-[#090807] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 20% 18%, rgba(138,90,36,0.15), transparent 36%), radial-gradient(circle at 78% 72%, rgba(138,90,36,0.10), transparent 34%)",
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
                src="/images/LaptopHero.png"
                alt="RJM Studio services workspace"
                className="h-full w-full object-cover object-[84%_center] md:object-[82%_center] lg:object-center"
              />
            </div>

            {/* Dark overlay for readability */}
            <div
              className="pointer-events-none absolute -top-20 -bottom-20 left-1/2 w-screen -translate-x-1/2 bg-gradient-to-r from-black/82 via-black/58 to-black/18"
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
                <SectionLabel>Services</SectionLabel>

                <h1 className="heading-display text-5xl font-light leading-[1.03] tracking-tight text-white md:text-7xl">
                  Services designed to elevate your{" "}
                  <span className="text-amber-300">online presence.</span>
                </h1>

                <p className="mt-6 max-w-[500px] text-lg leading-8 text-zinc-300">
                  From custom websites and website refreshes to ongoing digital
                  support, RJM Studio helps small businesses build a
                  professional, reliable, and security-aware online presence.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-white/10 py-20">
            <div className="mb-12 max-w-3xl">
              <SectionLabel>What I Do</SectionLabel>

              <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-5xl">
                Digital services built around{" "}
                <span className="text-amber-300">your business.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                Whether you need a new website, improvements to an existing one,
                or reliable support after launch, each service can be tailored
                to what your business actually needs.
              </p>
            </div>

            <div className="border-b border-white/10">
              {editorialServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.number}
                    className="grid gap-7 border-t border-white/10 py-10 md:py-12 lg:grid-cols-[110px_0.8fr_1.2fr] lg:gap-10"
                  >
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
                );
              })}
            </div>
          </section>

          <section className="relative left-1/2 w-screen -translate-x-1/2 border-y border-amber-300/10 bg-[#090807] py-16 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 18% 20%, rgba(138,90,36,0.14), transparent 34%), radial-gradient(circle at 82% 72%, rgba(138,90,36,0.08), transparent 30%)",
              }}
            />
            <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr_1fr] lg:gap-0">
                <div className="lg:pr-12">
                  <SectionLabel>Packages & Pricing</SectionLabel>

                  <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-5xl">
                    Flexible options to suit{" "}
                    <span className="italic text-amber-300">your needs.</span>
                  </h2>

                  <p className="mt-5 max-w-md text-base leading-8 text-zinc-300">
                    Every business is different. Explore the current pricing
                    guides for package details, or get in touch for something
                    more tailored.
                  </p>
                </div>

                <div className="flex flex-col border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:px-12 lg:pt-0">
                  <div className="text-2xl font-light text-white">
                    Website Packages
                  </div>

                  <p className="mt-4 max-w-md text-base leading-8 text-zinc-300">
                    Website refreshes, redesigns and custom builds for small
                    businesses at different stages of their online journey.
                  </p>

                  <div className="mt-auto flex flex-nowrap gap-3 pt-7">
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
                      className="inline-flex items-center whitespace-nowrap rounded-md border border-amber-300/50 px-5 py-3 text-sm text-white transition hover:bg-white/5"
                    >
                      Download Guide
                    </a>
                  </div>
                </div>

                <div className="flex flex-col border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <div className="text-2xl font-light text-white">
                    Social Media & Digital Support
                  </div>

                  <p className="mt-4 max-w-md text-base leading-8 text-zinc-300">
                    Content management and practical ongoing digital support
                    designed to help your business stay visible and up to date.
                  </p>

                  <div className="mt-auto flex flex-nowrap gap-3 pt-7">
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
                      className="inline-flex items-center rounded-md border border-amber-300/50 px-5 py-3 text-sm text-white transition hover:bg-white/5"
                    >
                      Download Guide
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-white/10 py-20">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <SectionLabel>My Process</SectionLabel>

                <h2 className="heading-display max-w-md text-4xl font-light leading-tight text-white md:text-5xl">
                  A simple process, built around{" "}
                  <span className="italic text-amber-300">clarity.</span>
                </h2>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className="border-t border-white/10 pt-6"
                  >
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
                ))}
              </div>
            </div>
          </section>

          <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-amber-300/10 bg-[#0b0a09] py-10 md:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 20% 50%, rgba(138,90,36,0.14), transparent 32%)",
              }}
            />
            <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-10">
              <div className="grid gap-6 md:grid-cols-[90px_1fr] md:items-start">
                <div className="heading-display text-6xl leading-none text-amber-300/80">
                  “
                </div>

                <figure>
                  <blockquote className="heading-display text-xl font-light italic leading-relaxed text-zinc-100 md:text-2xl">
                    <p>
                      We’ve reflected on our recent journey with you and its
                      impact on our business. It was a big decision for us as a
                      small company with limited funds, but we are so pleased we
                      made that decision and can’t thank you enough for all your
                      efforts and the final outcome — our new website is
                      fantastic!
                    </p>
                  </blockquote>

                  <figcaption className="mt-5 text-xs uppercase tracking-[0.22em] text-amber-200/80">
                    Rob — Ventosus Micro Winery
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section className="border-b border-white/10 py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <SectionLabel>FAQ</SectionLabel>

                <h2 className="heading-display max-w-sm text-4xl font-light leading-tight text-white md:text-5xl">
                  Frequently asked{" "}
                  <span className="italic text-amber-300">questions.</span>
                </h2>
              </div>

              <div className="border-t border-white/10">
                {faqs.map((faq: FaqItem, index: number) => (
                  <div key={faq.question} className="border-b border-white/10">
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
            </div>
          </section>

          <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-amber-300/10 bg-[#090807] py-20 md:py-24">
            {/* Left bronze sweep */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-[18%] -top-[70%] h-[165%] w-[42%] rotate-[-16deg] rounded-[50%] opacity-55"
              style={{
                background:
                  "linear-gradient(135deg, rgba(138,90,36,0.38) 0%, rgba(180,120,55,0.20) 42%, rgba(33,26,20,0.04) 72%, transparent 100%)",
              }}
            />

            {/* Right bronze sweep */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-[82%] -right-[14%] h-[165%] w-[48%] rotate-[-12deg] rounded-[50%] opacity-58"
              style={{
                background:
                  "linear-gradient(135deg, transparent 0%, rgba(33,26,20,0.04) 24%, rgba(138,90,36,0.24) 58%, rgba(180,120,55,0.38) 100%)",
              }}
            />

            {/* Soft central warmth */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, rgba(138,90,36,0.12), transparent 48%)",
              }}
            />

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-8">
              <div className="text-xs uppercase tracking-[0.28em] text-amber-300/80">
                Let’s Work Together
              </div>

              <h2 className="heading-display mt-5 text-4xl font-light leading-tight text-white md:text-6xl">
                Ready to discuss{" "}
                <span className="italic text-amber-300">your project?</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-300">
                Whether you’re looking for a new website, a refresh, or ongoing
                digital support, let’s talk about what your business needs.
              </p>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-amber-300 bg-amber-300 px-7 py-3.5 text-sm font-medium text-black transition hover:bg-amber-200"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
