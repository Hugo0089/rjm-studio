import Footer from "./Footer";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Menu,
  Clock3,
  MapPin,
  Target,
  BarChart3,
} from "lucide-react";

const navItems = ["Home", "Services", "Work", "About", "Contact"];

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

function FacebookIcon({ className = "" }: { className?: string }) {
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
      <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v3H7v4h3v5h4v-5h3l1-4h-4V9c0-.55.45-1 1-1Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
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
      <path d="M16 8a5 5 0 0 1 5 5v6h-4v-6a1 1 0 0 0-2 0v6h-4v-6a5 5 0 0 1 5-5Z" />
      <path d="M7 9H3v10h4V9Z" />
      <path d="M5 5.5a1.5 1.5 0 1 0 0 .01" />
    </svg>
  );
}

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

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "studio@rjm-studio.co.uk",
  },
  {
    icon: Clock3,
    label: "Response Time",
    value: "Within 1–2 working days",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Isle of Man / Remote",
  },
];

const trustPoints = [
  {
    icon: Target,
    title: "Tailored Solutions",
    copy: "Every project is shaped around your goals, brand, and business needs.",
  },
  {
    icon: Clock3,
    title: "Reliable & Responsive",
    copy: "I value your time and aim to respond clearly and promptly.",
  },
  {
    icon: BarChart3,
    title: "Focused on Results",
    copy: "Design and support that help your business look stronger and grow.",
  },
];

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const activeItem = "Contact";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [state, handleSubmit] = useForm("meewoznv");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-[#06070a] text-white">
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="heading-display text-4xl font-light text-white md:text-5xl">
            Thank you.
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-300">
            Your message has been sent successfully. I’ll get back to you as
            soon as possible.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex rounded-md border border-amber-300/70 px-6 py-3 text-sm text-white transition hover:bg-white/5"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="absolute inset-0">
            <img
              src="/images/DesktopWorkStation.png"
              alt="RJM Studio contact workspace"
              className="h-full w-full object-cover object-[86%_center] brightness-110 md:object-[70%_center]"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/78 to-black/35 md:from-black/84 md:via-black/56 md:to-black/10" />

          <div className="relative z-10 flex h-full flex-col justify-center px-6 py-10 md:px-8 lg:px-10">
            <div className="max-w-[560px]">
              <SectionLabel>Contact</SectionLabel>

              <h1 className="heading-display text-4xl font-light leading-[1.06] tracking-tight text-white md:text-[5.2rem]">
                Let’s talk about your{" "}
                <span className="text-amber-300">business.</span>
              </h1>

              <p className="mt-5 max-w-full text-base leading-8 text-zinc-300 md:mt-6 md:max-w-[520px] md:text-lg">
                Whether you need a new website, support managing content, or
                ongoing digital help, I’d love to hear about your goals and how
                I can help.
              </p>

              <div className="mt-10 space-y-5 max-w-[420px]">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 border-b border-white/10 pb-4"
                    >
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/25 bg-amber-300/5 text-amber-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.24em] text-amber-300/80">
                          {item.label}
                        </div>
                        <div className="mt-1 text-lg text-zinc-100">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 py-10 lg:grid-cols-[1.2fr_0.8fr]">
          <PremiumCard className="p-8 md:p-10">
            <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-5xl">
              Send a message
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-zinc-400">
              Tell me a bit about your project and what you’re looking for. I’ll
              get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name *"
                  className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-amber-300/50"
                />

                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email address *"
                    className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-amber-300/50"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <input
                type="text"
                name="business"
                placeholder="Business name"
                className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-amber-300/50"
              />

              <div className="relative">
                <select
                  name="service"
                  defaultValue=""
                  className="w-full appearance-none rounded-md border border-white/10 bg-zinc-950 px-4 py-4 text-white outline-none focus:border-amber-300/50"
                >
                  <option value="">Service you’re interested in</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Social Media Content Management">
                    Social Media Content Management
                  </option>
                  <option value="Digital Support">Digital Support</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about your project *"
                  className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-amber-300/50"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <p className="mt-3 text-sm text-zinc-500">
                  What are your goals? What do you need help with?
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="rounded-md border border-amber-300 bg-amber-300 px-6 py-3 text-sm font-medium text-black transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="inline-flex items-center gap-2">
                    {state.submitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </div>
            </form>
          </PremiumCard>

          <PremiumCard className="p-8 md:p-10">
            <h2 className="heading-display text-4xl font-light leading-tight text-white">
              Other ways to connect
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-400">
              You can also reach out or connect through the platforms below.
            </p>

            <div className="mt-8 space-y-6">
              <a
                href="https://www.instagram.com/rjmstudio89/"
                className="flex items-center gap-4 text-zinc-200 transition hover:text-white"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/25 bg-amber-300/5 text-amber-300">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-zinc-100">Instagram</div>
                  <div className="text-sm text-zinc-400">@rjmstudio89</div>
                </div>
              </a>

              <a
                href="https://facebook.com/profile.php?id=61590794513268"
                className="flex items-center gap-4 text-zinc-200 transition hover:text-white"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/25 bg-amber-300/5 text-amber-300">
                  <FacebookIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-zinc-100">Facebook</div>
                  <div className="text-sm text-zinc-400">RjM Studio</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/rjm-studio-340a77413/"
                className="flex items-center gap-4 text-zinc-200 transition hover:text-white"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/25 bg-amber-300/5 text-amber-300">
                  <LinkedInIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-zinc-100">LinkedIn</div>
                  <div className="text-sm text-zinc-400">RjM Studio</div>
                </div>
              </a>

              <a
                href="mailto:studio@rjm-studio.co.uk"
                className="flex items-center gap-4 text-zinc-200 transition hover:text-white"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/25 bg-amber-300/5 text-amber-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-zinc-100">Email</div>
                  <div className="text-sm text-zinc-400">
                    studio@rjm-studio.co.uk
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="text-2xl text-amber-300">Prefer email?</div>
              <p className="mt-3 text-base leading-8 text-zinc-400">
                That’s absolutely fine. Send a message through the form and I’ll
                reply by email as soon as possible.
              </p>
            </div>
          </PremiumCard>
        </section>

        <section className="py-6">
          <div className="text-center">
            <h2 className="heading-display text-4xl font-light leading-tight text-white md:text-5xl">
              Why work with RJM Studio?
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {trustPoints.map((item) => {
              const Icon = item.icon;
              return (
                <PremiumCard key={item.title} className="p-7">
                  <div className="inline-flex rounded-2xl border border-amber-300/20 bg-amber-300/5 p-3 text-amber-300">
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
          <PremiumCard className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="flex items-start gap-5">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/5 text-amber-300">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h2 className="heading-display text-3xl font-light text-white md:text-4xl">
                  Have a question before reaching out?
                </h2>
                <p className="mt-3 text-base leading-8 text-zinc-400">
                  I’m happy to answer any questions you have.
                </p>
              </div>
            </div>

            <a
              href="mailto:rjm890724@gmail.com?subject=RJM%20Studio%20Enquiry"
              className="inline-flex rounded-md border border-amber-300 bg-amber-300 px-6 py-3 text-sm font-medium text-black transition hover:bg-amber-200"
            >
              <span className="inline-flex items-center gap-2 text-black">
                Send an Email <ArrowRight className="h-4 w-4 text-black" />
              </span>
            </a>
          </PremiumCard>
        </section>

        <Footer />
      </div>
    </div>
  );
}
