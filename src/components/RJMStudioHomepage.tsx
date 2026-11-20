import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";

import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Layers3,
  LayoutTemplate,
  Menu,
  MessageSquareText,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const IMAGE_ASSETS = {
  heroBackground: "/images/RjMStudioWorkSpace.png",
  heroLaptop: "/images/hero-laptop-trades-site.png",
  heroPhone: "/images/hero-phone-trades-site.png",
  workTrades: "/images/work-trades-site.png",
  workFitness: "/images/work-fitness-site.png",
  workBarber: "/images/work-barber-site.png",
  aboutLaptop: "/images/about-dashboard-laptop1.png",
  aboutPhone: "/images/about-phone-content.png",
  socialInstagram: "/images/social-instagram-post.png",
  socialFacebook: "/images/social-facebook-post.png",
};

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
    icon: MonitorSmartphone,
    title: "Website Design",
    copy: "Modern, responsive websites that showcase your business professionally and turn visitors into enquiries.",
  },
  {
    icon: InstagramIcon,
    title: "Social Media Management",
    copy: "Consistent, branded social media content that helps your business stay active, visible, and trusted online.",
  },
  {
    icon: Wrench,
    title: "Digital Support",
    copy: "Ongoing website, design support, and practical digital help so your business stays running smoothly.",
  },
];

const workItems = [
  {
    title: "Trades Business Website Redesign",
    result:
      "Modern website that builds trust, showcases services, and converts enquiries.",
    image: IMAGE_ASSETS.workTrades,
  },
  {
    title: "Fitness Coach Landing Page + Content System",
    result:
      "High-converting landing page and content system that grows sign-ups and client retention.",
    image: IMAGE_ASSETS.workFitness,
  },
  {
    title: "Barbershop Brand Site + Content Pack",
    result:
      "Complete brand site and content pack that builds bookings and strengthens local presence.",
    image: IMAGE_ASSETS.workBarber,
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Premium visual presentation",
    copy: "High-end design that reflects the quality of your business.",
  },
  {
    icon: Layers3,
    title: "Consistent branding across channels",
    copy: "We create visuals and messaging across your website and social platforms.",
  },
  {
    icon: MessageSquareText,
    title: "Content that supports visibility",
    copy: "Strategic content that attracts attention and keeps your brand top of mind.",
  },
  {
    icon: Wrench,
    title: "Practical support for growth",
    copy: "Ongoing digital support so you can focus on running your business.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Discover",
    copy: "We learn about your business, goals, and audience to define the right strategy and direction.",
  },
  {
    number: "2",
    title: "Create",
    copy: "We design, build, and create content that aligns with your brand and converts visitors into action.",
  },
  {
    number: "3",
    title: "Launch",
    copy: "We refine, test, and launch your digital presence with support you can rely on.",
  },
  {
    number: "4",
    title: "Support",
    copy: "We provide ongoing updates, content, and digital support so you stay consistent and grow.",
  },
];

type IconProps = {
  className?: string;
};

function InstagramIcon({ className = "" }: IconProps) {
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

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="cursor-pointer rounded-md border border-amber-300 bg-amber-300 px-6 py-3 text-sm font-medium text-black transition hover:bg-amber-200">
      {children}
    </button>
  );
}

function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="cursor-pointer rounded-md border border-amber-300/70 px-6 py-3 text-sm text-white transition hover:bg-white/5">
      {children}
    </button>
  );
}

function DeviceImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      loading="lazy"
      decoding="async"
      alt={alt}
      className={`h-full w-full object-cover ${className ?? ""}`}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
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
      <div className="relative mb-4 rounded-2xl border border-amber-300/25 bg-[radial-gradient(circle_at_top_left,rgba(244,199,107,0.10),transparent_42%),linear-gradient(135deg,#111214,#0b0c0e)] p-5 sm:absolute sm:right-0 sm:top-0 sm:mb-0 sm:w-64 sm:pb-12">
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

function WorkCard({
  title,
  result,
  image,
}: {
  title: string;
  result: string;
  image: string;
}) {
  return (
    <div className="group overflow-hidden rounded-[1rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] transition duration-300 hover:-translate-y-1">
      <div className="overflow-hidden rounded-t-[1rem] border-b border-white/10 bg-zinc-900">
        <div className="aspect-[16/10] bg-zinc-900">
          <DeviceImage
            src={image}
            alt={title}
            className="transition duration-500 ease-out group-hover:scale-[1.05]"
          />
        </div>
      </div>

      <div className="p-6">
        <div className="text-[1.05rem] text-white">{title}</div>
        <div className="mt-3 text-sm leading-7 text-zinc-400">{result}</div>
      </div>
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
        <title>Web Developer & Designer Isle of Man | RjM Studio</title>
        <meta
          name="description"
          content="RJM Studio is a digital studio based in the Isle of Man, providing custom web development and digital design for small businesses."
        />
        <meta property="og:title" content="RjM Studio" />
        <meta
          property="og:description"
          content="RJM Studio is a digital studio based in the Isle of Man, providing custom web development and digital design for small businesses."
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
              <p className="mb-6 max-w-lg text-xs font-medium uppercase leading-6 tracking-[0.18em] text-amber-200 sm:text-sm">
                Web Design &amp; Digital Support · Isle of Man
              </p>
              <h1
                id="hero-heading"
                className="heading-display max-w-2xl text-5xl font-light leading-[1.04] tracking-tight text-white sm:text-6xl xl:text-7xl"
              >
                Websites designed to make your business{" "}
                <span className="text-amber-300 italic [font-synthesis:style]">
                  look the part.
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
                RjM Studio is a professional digital studio based in the{" "}
                <strong>Isle of Man</strong>. I provide freelance{" "}
                <strong>web developer</strong> services, custom web design, and
                ongoing digital support to help local small businesses build a
                strong, professional online presence.{" "}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  to="/work"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-amber-300 bg-gradient-to-b from-amber-200 to-amber-400 px-8 py-4 text-base font-semibold !text-black transition-colors hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200 motion-reduce:transition-none"
                >
                  View Our Work
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-zinc-300 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-amber-300/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200 motion-reduce:transition-none"
                >
                  Start a Project
                </Link>
              </div>
              <p className="mt-7 flex max-w-xl items-start gap-2.5 text-sm italic leading-6 text-zinc-300">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 text-amber-300/80"
                />
                Built with performance, usability and security in mind.
              </p>
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

          <section
            id="services"
            className="grid gap-10 py-24 lg:grid-cols-[0.72fr_1.28fr]"
          >
            <div className="max-w-md">
              <SectionLabel>Services</SectionLabel>
              <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-5xl">
                What RJM Studio <br /> can do for your <br /> business
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Everything you need to build a more reliable, consistent, and
                effective online presence.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group rounded-[0.9rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-7 ..."
                  >
                    <div className="inline-flex rounded-2xl border border-amber-300/20 bg-amber-300/5 p-3 text-amber-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-2xl font-light text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {service.copy}
                    </p>

                    <Link
                      to={
                        service.title === "Website Design"
                          ? "/services#website-design"
                          : service.title === "Social Media Management"
                            ? "/services#social-media-content"
                            : service.title === "Digital Support"
                              ? "/services#digital-support"
                              : "/services"
                      }
                      className="mt-8 inline-flex items-center gap-2 text-sm text-amber-200 transition hover:text-amber-100"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="work" className="py-8">
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="heading-display max-w-4xl text-4xl font-light leading-tight text-white md:text-5xl">
              Clean, modern work built to elevate small business brands
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
              Thoughtful design. Clear messaging. Digital experiences that get
              results.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {workItems.map((item) => (
                <WorkCard key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section className="relative isolate grid gap-10 py-24 lg:grid-cols-[0.74fr_1.26fr]">
            {/* Aurora background for Why RJM Studio */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2"
              style={{
                background:
                  "radial-gradient(circle at 18% 45%, rgba(251,191,36,0.10), transparent 32%)",
              }}
            />

            {/* Full-bleed Aurora with soft top and bottom edges */}
            <div
              className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2 opacity-40"
              aria-hidden="true"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
              }}
            >
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-[#06070a]/25" />
            </div>

            <div className="relative z-10">
              <SectionLabel>Why RJM Studio</SectionLabel>
              <h2 className="heading-display max-w-lg text-4xl font-light leading-tight text-white md:text-5xl">
                Built for businesses that want to look the part online.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                A strong online presence is more than just a good-looking
                website. It is about clear messaging, consistent branding, and
                digital experiences that build trust and drive growth. RJM
                Studio combines design, content, and digital thinking to help
                small businesses stand out with confidence.
              </p>
              <div className="mt-8 space-y-3 text-sm text-zinc-300">
                {[
                  "Premium design with a clear strategic purpose",
                  "Consistent messaging across your website and content",
                  "Practical support for long-term digital growth",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-300" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 grid gap-5 md:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-[0.9rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-7"
                  >
                    <div className="inline-flex rounded-2xl border border-amber-300/20 bg-amber-300/5 p-3 text-amber-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-2xl font-light text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {feature.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="py-8">
            <SectionLabel>Our Process</SectionLabel>
            <div className="heading-display text-center text-4xl font-light leading-tight text-white md:text-5xl">
              A simple process, built around clarity
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative rounded-[0.9rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-8"
                >
                  {index < processSteps.length - 1 && (
                    <div className="absolute right-[-12px] top-14 hidden h-px w-6 bg-amber-300/40 lg:block" />
                  )}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/40 text-sm tracking-[0.2em] text-amber-200">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-2xl font-light text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="py-20">
            <div className="relative overflow-hidden rounded-[1rem] border border-white/10 min-h-[420px] md:min-h-[210px]">
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src="/images/LaptopHero.png"
                  loading="lazy"
                  decoding="async"
                  alt="Branded RJM Studio workspace"
                  className="h-full w-full object-cover object-[86%_center] md:object-[center_42%]"
                />
              </div>

              {/* Softer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/48 to-black/10 md:from-black/62 md:via-black/30 md:to-black/8" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between gap-6 px-6 py-6 md:flex-row md:items-end md:justify-between md:gap-8 md:px-10 md:py-8">
                <div className="max-w-full md:max-w-[560px]">
                  <SectionLabel>About RJM Studio</SectionLabel>

                  <h2 className="heading-display text-[2.2rem] font-light leading-[1.08] text-white md:text-4xl">
                    Behind RJM Studio
                  </h2>

                  <p className="mt-4 max-w-full text-base leading-8 text-zinc-300 md:max-w-[520px] md:text-lg md:leading-7">
                    RJM Studio helps small businesses create a stronger digital
                    presence through modern design, thoughtful content, and
                    practical online support. We partner with ambitious business
                    owners who value quality, clarity, and results.
                  </p>
                </div>

                <div className="shrink-0 self-start md:self-end md:pb-3">
                  <Link to="/contact">
                    <SecondaryButton>
                      Let’s Talk About Your Business
                    </SecondaryButton>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="mt-10 overflow-hidden rounded-[1rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(244,199,107,0.07),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(184,135,43,0.055),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-6 py-10 md:px-10 md:py-12"
          >
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="heading-display text-3xl font-light leading-tight text-white md:text-5xl">
                Ready to elevate your brand online?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
                Let’s create a website and content that look professional, build
                trust, and drive growth.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <PrimaryButton>Book a Discovery Call</PrimaryButton>
                </Link>
                <Link to="/contact">
                  <SecondaryButton>Send an Enquiry</SecondaryButton>
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
