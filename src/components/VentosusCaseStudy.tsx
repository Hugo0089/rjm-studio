import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ContentPageLayout from "./ContentPageLayout";

const comparisons = [
  { key: "home", title: "A more distinctive welcome", before: [2480,1292], after: [2504,1219], copy: "The original homepage presented introductory text and separate image links in a narrow column. The redesign gives the winery a full-width photographic introduction, a clear headline and prominent routes to wines, tours and information about the business." },
  { key: "wines", title: "A clearer introduction to the collection", before: [2502,1103], after: [2509,1144], copy: "The original wines page led with a small image, category links and product cards. The redesigned view introduces the collection with a dedicated hero and a distinct Wine Categories section, giving the page a clearer visual hierarchy." },
  { key: "weddings", title: "A stronger setting for wedding enquiries", before: [2503,930], after: [2503,1294], copy: "The original wedding page combined a bottle image with a list of services. The redesign pairs an introduction with a large reception photograph and a visible Plan Your Wedding Wines call to action, then leads into the supporting information." },
];
function BrowserFrame({ name, label, width, height, eager = false, highlight = false }: { name: string; label: string; width: number; height: number; eager?: boolean; highlight?: boolean }) {
  const base = `/images/ventosus/${name}`;
  return <a href={`${base}-1920.webp`} className={`block overflow-hidden rounded-xl border bg-[#111214] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 ${highlight ? "border-amber-300/60 shadow-[0_10px_60px_rgba(251,191,36,0.06)]" : "border-white/25"}`} aria-label={`Open larger image: ${label}`}>
    <div aria-hidden="true" className="flex h-9 items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 sm:h-11"><span className="h-2 w-2 rounded-full bg-amber-200/70" /><span className="h-2 w-2 rounded-full bg-amber-300/50" /><span className="h-2 w-2 rounded-full bg-zinc-500" /><span className="ml-5 h-3 w-1/3 rounded bg-white/10" /></div>
    <picture>
      <source type="image/webp" srcSet={`${base}-640.webp 640w, ${base}-1280.webp 1280w, ${base}-1920.webp 1920w`} sizes={eager ? "calc(100vw - 80px)" : "(max-width: 767px) calc(100vw - 48px), calc(50vw - 52px)"} />
      <img src={`${base}-1280.jpg`} srcSet={`${base}-640.jpg 640w, ${base}-1280.jpg 1280w, ${base}-1920.jpg 1920w`} sizes={eager ? "calc(100vw - 80px)" : "(max-width: 767px) calc(100vw - 48px), calc(50vw - 52px)"} width={width} height={height} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} decoding="async" alt={label} className="h-auto w-full" />
    </picture>
  </a>;
}
const sectionLabel = "text-xs font-semibold uppercase leading-6 tracking-[0.18em] text-amber-200 sm:text-sm";
const sectionHeading = "text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl";
export default function VentosusCaseStudy() {
  return <ContentPageLayout>
    <Helmet><title>Ventosus Website Redesign | RJM Studio</title><meta name="description" content="A before-and-after look at the Ventosus Micro Winery website redesign: homepage, wine collection and wedding pages." /><link rel="canonical" href="https://www.rjm-studio.co.uk/work/ventosus" /></Helmet>
    <article className="relative isolate">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] bg-[radial-gradient(ellipse_at_65%_30%,rgba(138,90,36,0.22),transparent_65%)]" />
      <section className="pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="flex flex-wrap items-center justify-between gap-4"><p className={sectionLabel}>Selected work / Case study</p><Link to="/work" className="inline-block py-3 text-sm underline decoration-amber-300/50 underline-offset-4 focus-visible:outline-2 focus-visible:outline-amber-300">Back to work</Link></div>
        <h1 className="mt-7 break-words text-[clamp(3.5rem,11vw,10rem)] font-semibold leading-[0.95] tracking-[-0.055em]">Ventosus</h1>
        <p className="mt-5 max-w-3xl text-xl leading-relaxed tracking-tight text-zinc-300 md:text-3xl">A closer look at the website redesign.</p>
        <dl className="my-9 grid gap-6 sm:my-12 sm:grid-cols-3 sm:divide-x sm:divide-amber-200/30"><div><dt className="text-xs uppercase tracking-[0.16em] text-zinc-400">Project /</dt><dd className="mt-2 text-base font-medium sm:text-lg">Ventosus Micro Winery</dd></div><div className="sm:pl-7"><dt className="text-xs uppercase tracking-[0.16em] text-zinc-400">Focus /</dt><dd className="mt-2 text-base font-medium sm:text-lg">Website redesign</dd></div><div className="sm:pl-7"><dt className="text-xs uppercase tracking-[0.16em] text-zinc-400">Studio /</dt><dd className="mt-2 text-base font-medium sm:text-lg">RJM Studio</dd></div></dl>
        <BrowserFrame name="home-after" label="Ventosus redesigned homepage" width={2504} height={1219} eager highlight />
      </section>
      <section className="grid gap-6 border-y border-amber-200/25 py-10 md:grid-cols-[0.3fr_0.7fr] md:py-14">
        <p className={sectionLabel}>01 / The project</p>
        <div className="md:border-l md:border-amber-200/30 md:pl-10"><h2 className={sectionHeading}>The thinking behind the build.</h2><p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">A refreshed presentation for an Isle of Man micro winery, bringing its wines, experiences and wedding offering into focus.</p><p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">The original pages contained useful information and product photography, but their presentation gave limited emphasis to key messages and next steps. The redesign brings larger imagery, clearer headings and more prominent calls to action to the homepage, wine collection and wedding pages.</p><a href="https://www.ventosus.co.uk/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-12 items-center text-sm text-amber-200 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-amber-300">Visit Ventosus (opens in a new tab)</a></div>
      </section>
      <section className="border-b border-amber-200/25 py-12 md:py-16" aria-labelledby="transformation-heading">
        <p className={sectionLabel}>02 / The transformation</p><h2 id="transformation-heading" className={`${sectionHeading} mt-4`}>Before. After. A clear comparison.</h2>
        {comparisons.map(item=><section key={item.key} className="mt-12 first:mt-8">
          <h3 className="text-xl font-medium sm:text-2xl">{item.title}</h3><p className="mt-3 max-w-3xl text-base leading-8 text-zinc-400">{item.copy}</p>
          <div className="mt-6 grid items-start gap-7 md:grid-cols-2">{(["before","after"] as const).map(phase=><figure key={phase} className="min-w-0"><BrowserFrame name={`${item.key}-${phase}`} label={`Ventosus ${item.key === "home" ? "homepage" : item.key} ${phase} the redesign`} width={item[phase][0]} height={item[phase][1]} highlight={phase === "after"} /><figcaption className="mt-4"><span className={`text-xs font-semibold uppercase tracking-[0.16em] ${phase === "after" ? "text-amber-200" : "text-zinc-400"}`}>{phase} /</span><span className="mt-1 block text-base font-medium">{phase === "before" ? "Original" : "Redesigned"} {item.key === "home" ? "homepage" : item.key === "wines" ? "wines page" : "wedding page"}</span></figcaption></figure>)}</div>
        </section>)}
        <p className="mt-7 text-sm leading-6 text-zinc-400">Select any screenshot to view it at a larger size. The captures show different portions of each page.</p>
      </section>
      <section className="py-12 md:py-16"><p className={sectionLabel}>03 / The details</p><h2 className={`${sectionHeading} mt-4`}>Designed with purpose.</h2><div className="mt-9 grid gap-8 lg:grid-cols-3 lg:divide-x lg:divide-amber-200/30">{[
        ["01", "Design", "Larger photography and coordinated typography give the three pages a more consistent presentation."],
        ["02", "Clarity", "Distinct introductions and stronger headings make the wines, experiences and wedding offering more prominent."],
        ["03", "Next steps", "Visible calls to action highlight routes to browse wines, book a tour and plan wedding wines."],
      ].map(([number,title,copy])=><div key={number} className="flex gap-4 lg:pl-7 lg:first:pl-0"><span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-300 text-xs text-amber-200">{number}</span><div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 max-w-md text-base leading-7 text-zinc-400">{copy}</p></div></div>)}</div></section>
      <figure className="mb-12 rounded-xl border border-amber-200/25 bg-[#0c0d10] p-7 sm:p-10 lg:mb-16 lg:p-14">
        <p className={sectionLabel}>In the client’s words</p>
        <span aria-hidden="true" className="mt-5 block h-12 font-serif text-7xl leading-none text-amber-200/70">“</span>
        <blockquote className="mt-3 max-w-5xl text-xl font-medium leading-relaxed tracking-tight text-zinc-100 sm:text-2xl lg:text-3xl">
          <p>We are so pleased we made that decision and can’t thank you enough for all your efforts and the final outcome – our new website is fantastic!</p>
        </blockquote>
        <figcaption className="mt-7 border-t border-white/10 pt-5 text-sm font-medium text-amber-200">Ventosus Micro Winery</figcaption>
      </figure>
      <section className="rounded-xl border border-amber-300/25 bg-[radial-gradient(ellipse_at_30%_0%,rgba(180,120,55,0.25),transparent_70%),linear-gradient(120deg,#211A14,#100e0c)] p-7 sm:p-10 lg:p-14"><h2 className={sectionHeading}>Ready for your next chapter?</h2><p className="mt-4 max-w-2xl leading-7 text-zinc-300">Let’s talk about your business and what your website needs to do.</p><div className="mt-7 flex flex-col gap-4 sm:flex-row"><Link to="/contact" className="inline-flex min-h-12 items-center justify-center rounded-md bg-amber-300 px-6 py-3 font-semibold !text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">Start a Project</Link><Link to="/work" className="inline-flex min-h-12 items-center justify-center rounded-md border border-amber-200/60 px-6 py-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">Explore more work</Link></div></section>
    </article>
  </ContentPageLayout>;
}
