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

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 py-8">
      <div className="grid gap-8 lg:grid-cols-[220px_1fr_220px] lg:items-center">
        <div>
          <img
            src="/images/rjm-logo4.png"
            alt="RJM Studio logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-10 text-sm text-zinc-400">
          <a href="/" className="transition hover:text-white">
            Home
          </a>
          <a href="/services" className="transition hover:text-white">
            Services
          </a>
          <a href="/work" className="transition hover:text-white">
            Work
          </a>
          <a href="/about" className="transition hover:text-white">
            About
          </a>
          <a href="/contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>

        <div className="flex items-center justify-end gap-4 text-zinc-500">
          <a
            href="https://www.instagram.com/rjmstudio89/"
            aria-label="Instagram"
            className="transition hover:text-white"
          >
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/rjm-studio-340a77413/"
            aria-label="LinkedIn"
            className="transition hover:text-white"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a
            href="https://facebook.com/profile.php?id=61590794513268"
            aria-label="Facebook"
            className="transition hover:text-white"
          >
            <FacebookIcon className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <span>© 2025 RJM Studio. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="/privacy" className="transition hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="transition hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
