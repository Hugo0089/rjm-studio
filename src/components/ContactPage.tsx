import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
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

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const activeItem = "Contact";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [state, handleSubmit] = useForm("meewoznv");

  if (state.succeeded) {
    return (
      <div className="relative isolate overflow-x-clip min-h-screen bg-[#06070a] text-white">
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
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
    <>
      <Helmet>
        <title>Contact | RjM Studio™</title>
        <meta
          name="description"
          content="Get in touch with RJM Studio to discuss your website, social media, or digital support needs."
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
      <div className="relative min-h-screen overflow-x-hidden bg-[#06070a] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.035), transparent 20%), radial-gradient(circle at bottom right, rgba(244,199,107,0.045), transparent 22%), radial-gradient(circle at top right, rgba(244,199,107,0.08), transparent 16%)",
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

          <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-20 md:py-24">
            {/* Atmospheric gold edge lighting */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 4% 42%, rgba(251,191,36,0.10), transparent 24%), radial-gradient(circle at 96% 30%, rgba(244,199,107,0.07), transparent 23%)",
              }}
            />

            <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 md:px-8 lg:px-10">
              {/* Intro */}
              <div className="mx-auto max-w-4xl text-center">
                <SectionLabel>Start a Conversation</SectionLabel>

                <h1 className="heading-display text-5xl font-light leading-[1.03] text-white md:text-7xl">
                  Have something in mind?{" "}
                  <span className="italic text-amber-300">
                    Tell me about it.
                  </span>
                </h1>

                <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
                  Whether you need a new website, a thoughtful refresh or
                  ongoing digital support, tell me a little about what you’re
                  working on. You don’t need to have everything figured out.
                </p>
              </div>

              {/* Contact + form */}
              <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:pt-16">
                {/* Left column */}
                <div className="lg:pr-8">
                  <div className="text-xs uppercase tracking-[0.28em] text-amber-300/80">
                    Direct Contact
                  </div>

                  <h2 className="heading-display mt-5 max-w-md text-3xl font-light leading-tight text-white md:text-4xl">
                    You’ll be speaking{" "}
                    <span className="italic text-amber-300">
                      directly with me.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-md text-base leading-8 text-zinc-400">
                    I’m Rj, founder of RjM Studio. Your enquiry comes directly
                    to me, and I’ll personally get back to you.
                  </p>

                  <div className="mt-10 space-y-6">
                    {contactItems.map((item) => (
                      <div key={item.label}>
                        <div className="text-xs uppercase tracking-[0.22em] text-amber-300/70">
                          {item.label}
                        </div>

                        <div className="mt-2 text-base text-zinc-200">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 border-t border-white/10 pt-7">
                    <div className="text-xs uppercase tracking-[0.22em] text-amber-300/70">
                      Prefer email?
                    </div>

                    <a
                      href="mailto:studio@rjm-studio.co.uk"
                      className="mt-2 inline-block text-base text-zinc-200 transition hover:text-amber-200"
                    >
                      studio@rjm-studio.co.uk
                    </a>
                  </div>

                  <div className="mt-10">
                    <div className="text-xs uppercase tracking-[0.22em] text-amber-300/70">
                      Connect
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                      <a
                        href="https://www.instagram.com/rjmstudio89/"
                        aria-label="RjM Studio on Instagram"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-amber-300/40 hover:text-amber-300"
                      >
                        <InstagramIcon className="h-5 w-5" />
                      </a>

                      <a
                        href="https://facebook.com/profile.php?id=61590794513268"
                        aria-label="RjM Studio on Facebook"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-amber-300/40 hover:text-amber-300"
                      >
                        <FacebookIcon className="h-5 w-5" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/rjm-studio-340a77413/"
                        aria-label="RjM Studio on LinkedIn"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-amber-300/40 hover:text-amber-300"
                      >
                        <LinkedInIcon className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="lg:border-l lg:border-white/10 lg:pl-16">
                  <div className="text-xs uppercase tracking-[0.28em] text-amber-300/80">
                    Project Enquiry
                  </div>

                  <h2 className="heading-display mt-5 text-3xl font-light text-white md:text-4xl">
                    Tell me what you’re working on.
                  </h2>

                  <p className="mt-4 max-w-xl text-base leading-8 text-zinc-400">
                    A few details will help me understand what you need and
                    recommend the most sensible next step.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="text-xs uppercase tracking-[0.2em] text-zinc-400"
                        >
                          Your Name
                        </label>

                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          placeholder="What should I call you?"
                          className="mt-3 w-full border-0 border-b border-white/15 bg-transparent px-0 pb-4 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="text-xs uppercase tracking-[0.2em] text-zinc-400"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          placeholder="Where can I reach you?"
                          className="mt-3 w-full border-0 border-b border-white/15 bg-transparent px-0 pb-4 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300"
                        />

                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="business"
                        className="text-xs uppercase tracking-[0.2em] text-zinc-400"
                      >
                        Business / Website
                      </label>

                      <input
                        id="business"
                        type="text"
                        name="business"
                        placeholder="Business name or current website — optional"
                        className="mt-3 w-full border-0 border-b border-white/15 bg-transparent px-0 pb-4 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300"
                      />
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="relative">
                        <label
                          htmlFor="service"
                          className="text-xs uppercase tracking-[0.2em] text-zinc-400"
                        >
                          What Can I Help With?
                        </label>

                        <select
                          id="service"
                          name="service"
                          defaultValue=""
                          className="mt-3 w-full appearance-none border-0 border-b border-white/15 bg-[#06070a] px-0 pb-4 pr-8 text-base text-white outline-none transition focus:border-amber-300"
                        >
                          <option value="">Choose a service</option>
                          <option value="New Website">New Website</option>
                          <option value="Website Refresh">
                            Website Refresh
                          </option>
                          <option value="Digital Support">
                            Digital Support
                          </option>
                          <option value="Social Media / Content">
                            Social Media / Content
                          </option>
                          <option value="Not sure yet">Not Sure Yet</option>
                        </select>

                        <ChevronDown className="pointer-events-none absolute bottom-4 right-0 h-4 w-4 text-zinc-500" />
                      </div>

                      <div className="relative">
                        <label
                          htmlFor="budget"
                          className="text-xs uppercase tracking-[0.2em] text-zinc-400"
                        >
                          Budget — Optional
                        </label>

                        <select
                          id="budget"
                          name="budget"
                          defaultValue=""
                          className="mt-3 w-full appearance-none border-0 border-b border-white/15 bg-[#06070a] px-0 pb-4 pr-8 text-base text-white outline-none transition focus:border-amber-300"
                        >
                          <option value="">Choose a range</option>
                          <option value="Under £500">Under £500</option>
                          <option value="£500–£1,000">£500–£1,000</option>
                          <option value="£1,000–£2,500">£1,000–£2,500</option>
                          <option value="£2,500+">£2,500+</option>
                          <option value="Not sure">Not Sure Yet</option>
                        </select>

                        <ChevronDown className="pointer-events-none absolute bottom-4 right-0 h-4 w-4 text-zinc-500" />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-xs uppercase tracking-[0.2em] text-zinc-400"
                      >
                        Project Details
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        placeholder="Tell me what you're working on, what you'd like to improve, or what you're trying to achieve."
                        className="mt-3 w-full resize-none border-0 border-b border-white/15 bg-transparent px-0 pb-4 text-base leading-7 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300"
                      />

                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>

                    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-md text-sm leading-6 text-zinc-500">
                        You don’t need a finished brief. A rough idea is enough
                        to start the conversation.
                      </p>

                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="inline-flex min-h-12 items-center justify-center rounded-md border border-amber-300 bg-amber-300 px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <span className="inline-flex items-center gap-2">
                          {state.submitting
                            ? "Sending..."
                            : "Start a Conversation"}

                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section
            className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-16 md:py-20"
            style={{
              background:
                "linear-gradient(to bottom, #06070a 0%, #0a0b0e 45%, #08090b 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 18% 40%, rgba(251,191,36,0.05), transparent 30%), radial-gradient(circle at 84% 60%, rgba(244,199,107,0.025), transparent 28%)",
              }}
            />

            <div className="relative z-10 w-full px-6 md:px-8 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
                <div>
                  <SectionLabel>What Happens Next</SectionLabel>

                  <h2 className="heading-display max-w-lg text-4xl font-light leading-tight text-white md:text-5xl">
                    Simple, clear,{" "}
                    <span className="italic text-amber-300">
                      no-pressure next steps.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-md text-base leading-8 text-zinc-300">
                    Once you send your enquiry, I’ll take a look at what you
                    need and come back to you with a clear way forward.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  {[
                    {
                      number: "01",
                      title: "I read your enquiry",
                      copy: "Your message comes directly to me, so I can understand your project, goals and where you need support.",
                    },
                    {
                      number: "02",
                      title: "We talk it through",
                      copy: "I’ll ask any useful questions, clarify what you’re trying to achieve and make sure I understand the bigger picture.",
                    },
                    {
                      number: "03",
                      title: "I recommend the next step",
                      copy: "If we’re a good fit, I’ll outline the most sensible way to move forward and what that could look like.",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="border-t border-white/10 pt-7"
                    >
                      <div className="text-xs tracking-[0.22em] text-amber-300/75">
                        {item.number}
                      </div>

                      <h3 className="heading-display mt-5 text-2xl font-light leading-tight text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-zinc-300">
                        {item.copy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
                <div>
                  <div className="heading-display text-2xl font-light text-white md:text-3xl">
                    Not sure exactly what you need?
                  </div>

                  <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-400">
                    That’s completely fine. Tell me where you’re at and we can
                    work it out together.
                  </p>
                </div>

                <a
                  href="mailto:studio@rjm-studio.co.uk"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-amber-300 transition hover:text-amber-200 md:mt-0"
                >
                  Prefer email?
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}
