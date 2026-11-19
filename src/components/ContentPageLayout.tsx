import type { ReactNode } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const navigation = [["Home", "/"], ["Services", "/services"], ["Work", "/work"], ["About", "/about"], ["Contact", "/contact"]];
export default function ContentPageLayout({ children }: { children: ReactNode }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <div className="min-h-screen bg-[#06070a] text-white">
    <div className="w-full bg-[radial-gradient(ellipse_at_top,#211A14,transparent_50%)] px-6 pb-12 pt-6 md:px-8 lg:px-10">
      <a href="#page-content" className="sr-only focus:not-sr-only focus:inline-block focus:bg-amber-300 focus:p-3 focus:!text-black">Skip to content</a>
      <header className="relative z-40 rounded-[0.6rem] border border-white/10 bg-black/35 px-5 py-4 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" aria-label="RJM Studio home"><img src="/images/rjm-logo4.png" alt="RJM Studio" className="h-12 w-auto" /></Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm text-zinc-200 lg:flex">{navigation.map(([label,url])=><Link key={url} to={url} className="py-3 focus-visible:outline-2 focus-visible:outline-amber-300">{label}</Link>)}</nav>
          <Link to="/contact" className="hidden rounded-md border border-amber-300/60 px-5 py-3 text-sm text-amber-100 sm:block">Get in Touch</Link>
          <details className="relative lg:hidden"><summary className="cursor-pointer rounded-md border border-white/20 px-4 py-3 text-sm">Menu</summary><nav aria-label="Mobile navigation" className="absolute right-0 top-full mt-3 flex w-52 flex-col rounded-lg border border-white/20 bg-zinc-950 p-3">{navigation.map(([label,url])=><Link key={url} to={url} className="rounded px-3 py-3 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-amber-300">{label}</Link>)}</nav></details>
        </div>
      </header>
      <main id="page-content">{children}</main>
      <Footer />
    </div>
  </div>;
}
