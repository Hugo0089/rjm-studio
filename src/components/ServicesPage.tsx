import React from "react";
import { X } from "lucide-react";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  MonitorSmartphone,
  Wrench,
} from "lucide-react";

const navItems = ["Home", "Services", "Work", "About", "Contact"];

const serviceCards = [
  {
    icon: MonitorSmartphone,
    title: "Website Design",
    description:
      "Modern, responsive websites designed to build trust, showcase your business, and turn visitors into enquiries.",
  },
  {
    icon: InstagramIcon,
    title: "Social Media Content Management",
    description:
      "Consistent, branded content that helps your business stay visible, connect with your audience, and grow your online presence.",
  },
  {
    icon: Wrench,
    title: "Digital Support",
    description:
      "Reliable ongoing support for your website, design, content, and day-to-day digital updates.",
  },
];

const detailedServices = [
  {
    icon: MonitorSmartphone,
    title: "Website Design",
    description:
      "Clean, strategic websites that reflect your brand and give your business the professional presence it deserves.",
    includes: [
      "Custom, responsive design",
      "Up to 5 pages or tailored to your needs",
      "Mobile-first and SEO-ready structure",
      "Contact forms and enquiry setup",
      "Training and handover",
      "Post-launch support",
    ],
  },
  {
    icon: InstagramIcon,
    title: "Social Media Content Management",
    description:
      "Branded content that helps your business stay consistent, connect with your audience, and grow your online presence.",
    includes: [
      "Content planning and strategy",
      "Branded graphics and post design",
      "Captions and hashtag support",
      "Scheduling support",
      "Monthly content delivery",
      "Performance-focused approach",
    ],
  },
  {
    icon: Wrench,
    title: "Digital Support",
    description:
      "Flexible ongoing support for your website, design, and practical digital needs as your business grows.",
    includes: [
      "Website updates and edits",
      "Design support for graphics and banners",
      "Technical support and troubleshooting",
      "Content updates",
      "One-off or ongoing support",
      "Fast, reliable communication",
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

const faqs = [
  "Do you offer custom quotes?",
  "How long does a website take?",
  "Do you write the content?",
  "Do you offer ongoing support?",
  "Can I request one-off work?",
];

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

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

function SecondaryButton({ children }: { children: React.ReactNode }) {
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

export default function RJMStudioServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const activeItem = "Services";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#06070a] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.05),transparent_22%),radial-gradient(circle_at_top_right,rgba(251,191,36,0.08),transparent_16%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 md:px-8 lg:px-10">
        <header className="sticky top-4 z-40 rounded-[0.6rem] border border-white/10 bg-black/35 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <ScriptLogo />

            <nav className="hidden items-center gap-8 text-sm text-zinc-200 lg:flex">
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

        <section className="mt-13 relative overflow-hidden border border-white/10 min-h-[620px]">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/images/LaptopHero.png"
              alt="RJM Studio services workspace"
              className="h-full w-full object-cover object-[84%_center] md:object-[82%_center] lg:object-center"
            />
          </div>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/58 to-black/18" />

          {/* Hero content */}
          <div className="relative z-10 flex h-full flex-col justify-center px-4 py-10 md:px-2 lg:px-4">
            <div className="max-w-[560px]">
              <SectionLabel>Services</SectionLabel>

              <h1 className="heading-display text-5xl font-light leading-[1.03] tracking-tight text-white md:text-7xl">
                Services designed to elevate your{" "}
                <span className="text-amber-300">business online.</span>
              </h1>

              <p className="mt-6 max-w-[500px] text-lg leading-8 text-zinc-300">
                RJM Studio offers website design, content management, and
                digital support to help small businesses build a stronger online
                presence and grow with confidence.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="text-center">
            <SectionLabel>What I Do</SectionLabel>
            <h2 className="heading-display mx-auto max-w-4xl text-4xl font-light leading-tight text-white md:text-5xl">
              Three core services. One clear goal: helping your business make an
              impact.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <PremiumCard key={service.title} className="p-8">
                  <div className="inline-flex rounded-2xl border border-amber-300/20 bg-amber-300/5 p-3 text-amber-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-light leading-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-zinc-400">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm text-amber-200 transition hover:text-amber-100"
                  >
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </PremiumCard>
              );
            })}
          </div>
        </section>

        <section className="border-t border-white/10 py-12">
          <SectionLabel>Services in Detail</SectionLabel>
          <div className="space-y-6">
            {detailedServices.map((service) => {
              const Icon = service.icon;
              return (
                <PremiumCard key={service.title} className="p-0">
                  <div className="grid gap-0 lg:grid-cols-[1.15fr_1.85fr]">
                    <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r">
                      <div className="inline-flex rounded-2xl border border-amber-300/20 bg-amber-300/5 p-3 text-amber-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-2xl font-light leading-tight text-white">
                        {service.title}
                      </h3>
                      <p className="mt-4 max-w-md text-base leading-8 text-zinc-400">
                        {service.description}
                      </p>
                    </div>

                    <div className="grid gap-0 md:grid-cols-2">
                      <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
                        <div className="text-xs uppercase tracking-[0.24em] text-amber-300/80">
                          What’s Included
                        </div>
                        <ul className="mt-5 space-y-4">
                          {service.includes.slice(0, 3).map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-7 text-zinc-300"
                            >
                              <Check className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-7">
                        <div className="text-xs uppercase tracking-[0.24em] text-amber-300/80">
                          What’s Included
                        </div>
                        <ul className="mt-5 space-y-4">
                          {service.includes.slice(3).map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-7 text-zinc-300"
                            >
                              <Check className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </PremiumCard>
              );
            })}
          </div>
        </section>

        <section className="py-12">
          <PremiumCard className="p-8 md:p-10">
            <div className="text-center">
              <SectionLabel>My Process</SectionLabel>
              <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-5xl">
                A simple process, built around clarity.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="absolute right-[-18px] top-8 hidden h-px w-9 bg-amber-300/40 lg:block" />
                  )}
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/5 text-sm tracking-[0.18em] text-amber-200">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-2xl font-light text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[230px] text-sm leading-7 text-zinc-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </PremiumCard>
        </section>

        <section className="grid gap-6 py-8 lg:grid-cols-[1fr_0.95fr]">
          <PremiumCard className="p-8 md:p-10">
            <SectionLabel>FAQ</SectionLabel>
            <div className="space-y-1">
              {faqs.map((faq) => (
                <div
                  key={faq}
                  className="flex items-center justify-between border-b border-white/10 py-5 text-white"
                >
                  <span>{faq}</span>
                  <ChevronDown className="h-5 w-5 text-amber-300" />
                </div>
              ))}
            </div>
          </PremiumCard>

          <div className="relative overflow-hidden rounded-[0.9rem] border border-white/10 min-h-[360px]">
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src="/images/CTABackgroun.png"
                alt="RJM Studio CTA background"
                className="h-full w-full object-cover object-[72%_center]"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-black/8" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center px-8 py-8 md:px-10">
              <div className="max-w-[46%]">
                <h2 className="heading-display text-3xl font-light leading-[1.12] text-white md:text-4xl">
                  Let’s build a stronger online presence for your business.
                </h2>

                <p className="mt-5 max-w-sm text-base leading-8 text-zinc-300">
                  Every business is unique. Let’s chat about your goals and how
                  I can help.
                </p>

                <div className="mt-8">
                  <Link to="/contact">
                    <SecondaryButton>Book a Discovery Call</SecondaryButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
