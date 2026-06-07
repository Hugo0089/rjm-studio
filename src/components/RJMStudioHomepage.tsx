import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
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

/**
 * RJM Studio Homepage
 *
 * Paste this file into a React + Tailwind project as:
 * src/pages/HomePage.tsx
 * or
 * src/components/RJMStudioHomepage.tsx
 *
 * Then import and render it inside App.tsx.
 *
 * Replace the image paths in IMAGE_ASSETS with your own files in /public/images.
 */

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
    icon: ShieldCheck,
    text: "Professional websites that build credibility",
  },
  {
    icon: MessageSquareText,
    text: "Content that keeps your brand visible",
  },
  {
    icon: Globe,
    text: "Designed for small business growth",
  },
  {
    icon: LayoutTemplate,
    text: "Clean, modern, conversion-focused layouts",
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
      alt={alt}
      className={`h-full w-full object-cover ${className ?? ""}`}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="absolute -left-12 top-10 h-44 w-44 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="absolute right-8 top-0 h-52 w-52 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative min-h-[560px]">
        <div className="absolute inset-x-10 bottom-6 h-14 rounded-full bg-black/45 blur-2xl" />

        <div className="absolute right-6 top-4 w-[88%] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/95 shadow-[0_30px_120px_rgba(0,0,0,0.72)]">
          <div className="aspect-[16/10] bg-zinc-900">
            <DeviceImage
              src={IMAGE_ASSETS.heroLaptop}
              alt="Laptop showing premium trades website mockup"
            />
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-[29%] min-w-[175px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-zinc-950/95 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.78)]">
          <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-zinc-900">
            <div className="aspect-[9/19] bg-zinc-900">
              <DeviceImage
                src={IMAGE_ASSETS.heroPhone}
                alt="Phone showing mobile website mockup"
                className="object-contain object-top scale-[0.97] bg-zinc-950"
              />
            </div>
          </div>
        </div>
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

        <section className="grid items-center gap-16 pb-14 pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:pt-20">
          <div>
            <div className="max-w-2xl text-5xl font-light leading-[1.02] tracking-tight text-white md:text-7xl">
              <h1 className="heading-display text-5xl font-light leading-[1.03] tracking-tight text-white md:text-7xl">
                A stronger online presence, designed to{" "}
                <span className="text-amber-300">make an impact.</span>
              </h1>
            </div>
            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
              RJM Studio creates premium websites, social media content, and
              digital experiences for small businesses that want to look
              professional, build trust, and grow online.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/contact">
                <PrimaryButton>Get in Touch</PrimaryButton>
                <Link to="/work" className="ml-3">
                  <SecondaryButton>View Our Work</SecondaryButton>
                </Link>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              <span>Website Design</span>
              <span>Content Management</span>
              <span>Digital Support</span>
            </div>
          </div>

          <HeroVisual />
        </section>

        <section className="grid gap-4 border-y border-white/10 py-6 md:grid-cols-2 xl:grid-cols-4">
          {trustPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-center gap-4 rounded-2xl px-3 py-2"
              >
                <div className="rounded-full border border-amber-300/30 bg-amber-300/5 p-2.5 text-amber-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-sm leading-6 text-zinc-200">
                  {item.text}
                </div>
              </div>
            );
          })}
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

        <section className="grid gap-10 py-24 lg:grid-cols-[0.74fr_1.26fr]">
          <div>
            <SectionLabel>Why RJM Studio</SectionLabel>
            <h2 className="heading-display max-w-lg text-4xl font-light leading-tight text-white md:text-5xl">
              Built for businesses that want to look the part online.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              A strong online presence is more than just a good-looking website.
              It is about clear messaging, consistent branding, and digital
              experiences that build trust and drive growth. RJM Studio combines
              design, content, and digital thinking to help small businesses
              stand out with confidence.
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

          <div className="grid gap-5 md:grid-cols-2">
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
          className="mt-10 overflow-hidden rounded-[1rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-6 py-10 md:px-10 md:py-12"
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
  );
}
