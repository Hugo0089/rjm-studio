import Footer from "./Footer";
import { useEffect } from "react";
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
    <PremiumCard className="overflow-hidden">
      <div className="aspect-[16/11] overflow-hidden border-b border-white/10">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="p-6 md:p-7">
        <div className="text-xs uppercase tracking-[0.28em] text-amber-300/80">
          {category}
        </div>

        <h3 className="mt-4 text-4xl font-light text-white">{title}</h3>

        <p className="mt-4 text-base leading-8 text-zinc-400">{copy}</p>

        {href ? (
          <div className="mt-6">
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
                className="inline-flex rounded-[0.6rem] border border-white/10 p-2.5 text-zinc-300 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        <section className="mt-13 relative overflow-hidden border border-white/10 min-h-[620px]">
          <div className="absolute inset-0">
            <img
              src="/images/Slickdesktopbanner.png"
              alt="RJM Studio work hero banner"
              className="h-full w-full object-cover object-[72%_center] brightness-120"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/62 to-black/15" />

          <div className="relative z-10 flex h-full flex-col justify-center px-6 py-10 md:px-8 lg:px-10">
            <div className="max-w-[560px]">
              <SectionLabel>Our Work</SectionLabel>

              <h1 className="heading-display text-4xl font-light leading-[1.04] tracking-tight text-white md:text-[5.2rem]">
                Design that delivers{" "}
                <span className="text-amber-300">impact.</span>
              </h1>

              <p className="mt-6 max-w-[520px] text-lg leading-8 text-zinc-300">
                A selection of websites and digital projects designed to look
                good, work well, and help businesses grow.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-10">
          <div className="flex flex-wrap gap-4">
            <div className="rounded-full border border-amber-300/40 bg-amber-300/10 px-7 py-3 text-sm text-amber-200">
              All Projects
            </div>
            <div className="rounded-full border border-white/10 px-7 py-3 text-sm text-zinc-300">
              Web Design
            </div>
            <div className="rounded-full border border-white/10 px-7 py-3 text-sm text-zinc-300">
              Branding
            </div>
            <div className="rounded-full border border-white/10 px-7 py-3 text-sm text-zinc-300">
              Digital Support
            </div>
            <div className="rounded-full border border-white/10 px-7 py-3 text-sm text-zinc-300">
              Concepts
            </div>
          </div>
        </section>

        <section className="pt-12">
          <div className="mb-6 flex items-center gap-4">
            <SectionLabel>Live Projects</SectionLabel>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {liveProjects.map((project) => (
              <ProjectCard key={project.title} {...project} external={true} />
            ))}
          </div>
        </section>

        <section className="pt-14">
          <div className="mb-6 flex items-center gap-4">
            <SectionLabel>Concept Projects</SectionLabel>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {conceptProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-16 mt-16">
          <div className="text-center">
            <SectionLabel>How I Work</SectionLabel>
            <h2 className="heading-display mx-auto max-w-4xl text-4xl font-light leading-tight text-white md:text-5xl">
              A thoughtful process built around your goals
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
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
              );
            })}
          </div>
        </section>

        <section className="py-8">
          <PremiumCard className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-2xl">
              <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-5xl">
                Have a project <span className="text-amber-300">in mind?</span>
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-400">
                Let’s create something meaningful and impactful together.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="studio@rjm-studio.co.uk?subject=RJM%20Studio%20Enquiry"
                className="inline-flex rounded-md border border-amber-300 bg-amber-300 px-6 py-3 text-sm font-medium text-black transition hover:bg-amber-200"
              >
                <span className="inline-flex items-center gap-2 text-black">
                  Send an Email <ArrowRight className="h-4 w-4 text-black" />
                </span>
              </a>

              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <SecondaryButton>
                  <span className="inline-flex items-center gap-2">
                    Get in Touch <ArrowRight className="h-4 w-4" />
                  </span>
                </SecondaryButton>
              </Link>
            </div>
          </PremiumCard>
        </section>

        <Footer />
      </div>
    </div>
  );
}
