import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

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

type HeaderProps = {
  activeItem: "Home" | "Services" | "Work" | "About" | "Contact";
};

export default function Header({ activeItem }: HeaderProps) {
  return (
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
                    : "#";

            return (
              <Link
                key={item}
                to={route}
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
          <button className="hidden rounded-md border border-amber-300/60 px-5 py-2.5 text-sm text-amber-100 transition hover:bg-amber-300/10 md:inline-flex">
            Book a Call
          </button>

          <button
            className="inline-flex rounded-[0.6rem] border border-white/10 p-2.5 text-zinc-300 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
