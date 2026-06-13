import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Menu,
  Monitor,
  Rocket,
  Users,
  MessageCircle,
  Pencil,
  LayoutTemplate,
  BarChart3,
  Sparkles,
  Target,
  Clock3,
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

const whoIHelp = [
  {
    icon: Monitor,
    title: "Small Businesses",
    copy: "Helping local businesses build a stronger online presence that looks professional and inspires trust.",
  },
  {
    icon: Rocket,
    title: "Startups",
    copy: "Supporting new ventures with clear branding, websites, and digital foundations that feel credible from day one.",
  },
  {
    icon: Users,
    title: "Entrepreneurs",
    copy: "Helping founders and solo business owners present themselves clearly and confidently online.",
  },
];

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

const highlights = [
  {
    icon: Sparkles,
    title: "Thoughtful design",
    copy: "Every design choice is made with clarity, professionalism, and your brand in mind.",
  },
  {
    icon: Target,
    title: "Clear communication",
    copy: "You can expect a straightforward process, honest updates, and clear next steps.",
  },
  {
    icon: Clock3,
    title: "Reliable support",
    copy: "Whether it is launch day or ongoing updates, I aim to be dependable and easy to work with.",
  },
  {
    icon: BarChart3,
    title: "Focused execution",
    copy: "The goal is not just to make things look good, but to help your business show up better online.",
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
        <title>About | RjM Studio</title>
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
            <div className="absolute inset-0">
              <img
                src="/images/AboutPageBanner.png"
                alt="RJM Studio about hero background"
                className="h-full w-full object-cover object-[72%_center] brightness-125"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/56 to-black/10" />

            <div className="relative z-10 flex h-full flex-col justify-center px-6 py-10 md:px-8 lg:px-10">
              <div className="max-w-[560px]">
                <SectionLabel>About RJM Studio</SectionLabel>

                <h1 className="heading-display text-4xl font-light leading-[1.04] tracking-tight text-white md:text-[5.2rem]">
                  Design. Support.{" "}
                  <span className="text-amber-300">Growth.</span>
                </h1>

                <p className="mt-6 max-w-[520px] text-lg leading-8 text-zinc-300">
                  I help small businesses and entrepreneurs build a stronger
                  online presence through beautiful design, consistent content,
                  and reliable digital support.
                </p>

                <p className="mt-6 max-w-[520px] text-lg leading-8 text-zinc-400">
                  RJM Studio was built on the belief that great design does not
                  have to be complicated. It just needs to be intentional,
                  strategic, and aligned with your goals.
                </p>

                <div className="mt-8"></div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="text-center">
              <SectionLabel>Who I Help</SectionLabel>
              <h2 className="heading-display mx-auto max-w-4xl text-4xl font-light leading-tight text-white md:text-5xl">
                Built for businesses that want more
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
                I work with small businesses, startups, and entrepreneurs who
                want their brand to look professional, their content to connect,
                and their digital presence to drive results.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {whoIHelp.map((item) => {
                const Icon = item.icon;
                return (
                  <PremiumCard key={item.title} className="p-8">
                    <div className="inline-flex rounded-2xl border border-amber-300/20 bg-amber-300/5 p-3 text-amber-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-2xl font-light text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-zinc-400">
                      {item.copy}
                    </p>
                  </PremiumCard>
                );
              })}
            </div>
          </section>

          <section className="border-t border-white/10 py-14">
            <div className="text-center">
              <SectionLabel>My Approach</SectionLabel>
              <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-5xl">
                Simple, collaborative, effective
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-4">
              {approachSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative">
                    {index < approachSteps.length - 1 && (
                      <div className="absolute right-[-18px] top-8 hidden h-px w-9 bg-amber-300/40 lg:block" />
                    )}

                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/5 text-amber-200">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="mt-5 text-amber-300">{step.number}.</div>
                    <h3 className="mt-2 text-2xl font-light text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {step.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="border-t border-white/10 py-14">
            <div className="text-center">
              <SectionLabel>What You Can Expect</SectionLabel>
              <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-5xl">
                A thoughtful, reliable approach
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <PremiumCard key={item.title} className="p-8 text-center">
                    <div className="mx-auto inline-flex rounded-2xl border border-amber-300/20 bg-amber-300/5 p-3 text-amber-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-2xl font-light text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.copy}
                    </p>
                  </PremiumCard>
                );
              })}
            </div>
          </section>

          <section className="py-8">
            <PremiumCard className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="max-w-2xl">
                <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-5xl">
                  Let’s build something great{" "}
                  <span className="text-amber-300">together.</span>
                </h2>
                <p className="mt-4 text-base leading-8 text-zinc-400">
                  Whether you need a website, content support, or ongoing help
                  with your digital presence, I’m here to help you grow.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <SecondaryButton>Get in Touch</SecondaryButton>
                </Link>
              </div>
            </PremiumCard>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
