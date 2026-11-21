import { Helmet } from "react-helmet-async";
import ContentPageLayout from "./ContentPageLayout";

const privacySections = [
  [
    "Information we collect",
    "When you enquire, we receive your name, email address, business name, selected service, optional budget and project message. Name, email and message are required to respond. You can also contact us directly by email. Please do not include passwords or sensitive personal information in the enquiry form.",
    "For clients, we also hold the contact and billing details, agreements, correspondence, approvals and materials needed for the project. Information normally comes directly from you or your business representative. Website hosting and form services receive technical information such as IP address, browser details and request logs to deliver and protect their services."
  ],
  [
    "Why we use your information",
    "We use information to answer enquiries, prepare quotations, deliver agreed services and administer projects. Where you are personally entering a contract, the basis is taking steps at your request before a contract or performing it. For business representatives, we rely on our legitimate interest in communicating with the business and managing the relationship, balanced against your rights.",
    "We process records needed to meet applicable legal obligations, including accounting duties. We may keep relevant records for our legitimate interest in establishing, exercising or defending legal claims. We use consent for promotional emails. We do not use enquiry information for solely automated decisions producing legal or similarly significant effects."
  ],
  [
    "Optional email marketing",
    "Marketing is optional. An enquiry or service agreement does not itself give permission for promotional emails. If you opt in, RJM Studio may email you about website design and digital support services. Marketing permission is requested separately, such as when signing a service agreement. The enquiry form does not collect marketing consent. We record your choice and the consent wording when permission is given. Declining has no effect on your enquiry or services.",
    "You may withdraw consent or object to direct marketing at any time by emailing studio@rjm-studio.co.uk or using the unsubscribe method in a marketing message. We stop marketing when you opt out. Withdrawal does not affect earlier lawful processing. Necessary project updates and invoices are separate from marketing.",
    "Previously collected contacts are not automatically opted in under this policy. They must have valid recorded permission before being used for marketing."
  ],
  [
    "Retention",
    "Our retention policy is to remove or anonymise unconverted enquiries 12 months after the last meaningful contact, reviewing records quarterly. This is a business retention period, not a statutory minimum. If the enquiry becomes a project, only the information needed for that relationship moves into the client records.",
    "Client correspondence, contracts and financial records are kept for the duration of the work and afterwards only as needed for applicable accounting obligations or the establishment, exercise or defence of legal claims. The period depends on the record, the obligation and whether a claim or dispute remains outstanding. We review continued need and restrict records retained solely for those purposes.",
    "Marketing contacts are reviewed after 24 months without meaningful engagement and removed unless there is a documented reason to retain them. We retain the minimum consent evidence needed to demonstrate permission and a minimal suppression record for as long as necessary to honour an opt-out. Suppression records are not used to send marketing.",
    "Deletion reviews cover correspondence, form submissions and working copies. Copies in provider backups may remain until the provider’s backup cycle expires and are not intended for routine use. Historical enquiries are subject to the same review; this policy does not mean that historical account records have already been deleted."
  ],
  [
    "Who receives information",
    "Formspree handles website enquiry submissions and Zoho handles our business email. Vercel hosts the website and provides Web Analytics and Speed Insights. Google Fonts supplies the fonts requested by your browser. These services process the information needed for their functions, including technical connection information. Their privacy information is linked below.",
    "Information may also be disclosed to professional advisers or public authorities where necessary for legal obligations or claims. We do not sell enquiry details. If project work requires us to process personal information on your behalf, the relevant written data-processing arrangements are agreed separately."
  ],
  [
    "International processing",
    "Our providers may process information outside the Isle of Man. Formspree states that it processes information in the United States and other countries where it operates. Zoho’s processing locations depend on the account region and its service arrangements. Google and Vercel also operate internationally.",
    "Transfers must have a valid basis under applicable Isle of Man data protection law, such as an applicable adequacy arrangement or appropriate contractual safeguards where required. Contact studio@rjm-studio.co.uk for information about the arrangements relevant to your data and how to obtain a copy of applicable safeguards. We do not represent that all information stays in the Isle of Man."
  ],
  [
    "Cookies and analytics",
    "We use Vercel Web Analytics to understand website traffic and Speed Insights to measure loading performance and improve the website. Vercel describes Web Analytics as cookie-free and Speed Insights measurements as anonymous. These descriptions apply to those products, not to every third-party service. This version of the website does not load Google Analytics or Google Tag Manager.",
    "Google Fonts receives technical connection information when fonts load. External websites linked from this site have their own privacy and cookie practices. If additional tracking is introduced, this notice and any required choice controls will be updated before it is enabled."
  ],
  [
    "Security",
    "We use personal information only for the purposes described and limit access to what is needed for the work. No internet transmission or storage system can be guaranteed completely secure. Contact us promptly if you believe information you supplied has been exposed or misused."
  ],
  [
    "Your rights",
    "Depending on the circumstances, you may request access, correction, erasure, restriction or portability of your personal information and object to processing based on legitimate interests. You can withdraw consent at any time. Some rights have legal conditions or exceptions; your right to object to direct marketing is unconditional.",
    "Send requests to studio@rjm-studio.co.uk. We may ask for proportionate information to verify your identity. We normally respond within one month and explain any permitted extension or applicable exception. You may complain directly to the Isle of Man Information Commissioner at www.inforights.im without first contacting us."
  ],
  [
    "Changes",
    "We update this notice when our practices change and show the revision date above. A policy update does not itself give permission for new marketing or retrospectively amend a service agreement."
  ]
];

const termsSections = [
  ["Scope and your agreement", "These terms cover the RJM Studio website and paid website design, development and digital support services. They do not retrospectively amend an existing agreement. For new paid work, they apply only where supplied and incorporated into the agreement before acceptance. A project-specific written agreement takes precedence over these general terms where they differ, subject to mandatory law.", "An enquiry does not commit either party to a project. The agreed proposal or service agreement should identify the parties, scope, deliverables, fees, payment dates, timetable, revisions, support and any cancellation arrangements. Work starts in accordance with that agreement."],
  ["Using this website", "Use this website lawfully. Do not attempt unauthorised access, introduce malware, interfere with its operation or misuse the enquiry service. Website descriptions and portfolio examples explain our work; they are not a guarantee of the same commercial result for another business.", "We aim to keep the website accurate and available, but information may need updating and access may be interrupted. External websites have their own operators, terms and privacy practices. Linking to them does not transfer responsibility for their content to RJM Studio."],
  ["Scope, revisions and additional work", "We will provide the services and revision allowance agreed in writing. A revision within the agreed brief is different from a new feature, additional page or change of direction. If a request changes the scope, we will explain the effect on fees and timing and obtain written agreement before undertaking the additional work.", "Services such as hosting, domain management, ongoing updates, social media work, SEO campaigns and security monitoring are included only when expressly agreed. A website project does not automatically include ongoing maintenance."],
  ["Client information and access", "You are responsible for supplying accurate business information, timely feedback and materials you are entitled to use. You must identify any particular legal, regulatory, accessibility or operational requirements relevant to your business so they can be addressed in the scope. This does not remove RJM Studio’s own legal duties.", "Provide required access through an agreed secure method. Missing content, access or decisions may affect delivery dates. If a delay occurs, we will discuss its effect and agree any necessary adjustment; a delay does not silently authorise extra charges."],
  ["Timetable, review and launch", "Dates and dependencies are set out in the project agreement. We will communicate material delays and revised estimates. Where no performance time is fixed or determinable under the contract, services must be performed within a reasonable time.", "You will have an opportunity to review the work and report issues against the agreed brief. Public launch requires your approval and satisfaction of any agreed payment or other launch conditions. Approval does not remove rights relating to defective work that cannot lawfully be excluded."],
  ["Fees, invoices and third-party costs", "The project agreement specifies fees, any deposit, payment milestones and whether taxes or third-party costs are included. There is no standard deposit or instalment schedule imposed by these general terms. Where a charge is not agreed or determinable under the contract, the applicable law provides for a reasonable charge.", "Domains, hosting, paid plugins, fonts, stock assets and other subscriptions may involve separate fees and renewals. Responsibility for purchasing, renewing and managing them must be agreed. Any suspension for non-payment must follow the applicable agreement and law; these terms do not introduce an automatic late fee."],
  ["Ownership and licences", "Your supplied content remains yours or its existing owner’s. You give RJM Studio the permissions needed to use it to deliver the project. The project agreement determines which custom deliverables transfer to you, when that transfer occurs and any payment conditions.", "Pre-existing tools, reusable methods and third-party materials remain subject to their existing ownership and licence terms. Relevant licences must allow the intended use of the completed work. Portfolio content on this website remains protected by its owners’ rights; ask before reproducing it.", "Any use of your project, name or feedback in RJM Studio’s portfolio is subject to the project agreement and any specific permission or restrictions agreed with you. Confidential information must not be disclosed as portfolio material."],
  ["Support, third-party systems and results", "Any post-launch defect support, maintenance or recurring service is limited to the scope and period agreed. New functionality, third-party changes and unrelated faults may require a separate quotation. We will distinguish these from defects in our agreed work.", "Third-party systems can change or become unavailable. Responsibilities for backups, updates and recovery should be set out in the agreement. We do not promise a particular search ranking, revenue, enquiry volume or uninterrupted third-party service. This does not reduce our obligation to perform the services with reasonable care and skill."],
  ["Confidentiality, personal data and marketing", "Both parties should protect confidential information obtained through the project and use it only for the agreed purpose, except where disclosure is authorised or required by law. Information already lawfully public is not confidential merely because it appears in project correspondence.", "Where RJM Studio processes personal information on your behalf as a processor, the necessary written data-processing terms must be agreed before that processing. The privacy notice explains RJM Studio’s own processing of enquiry and client contact information.", "Marketing permission is separate from accepting a service agreement. The optional choice for future service agreements is: ‘Yes, I would like RJM Studio to email me about its website design and digital support services’ or ‘No, please do not send me marketing emails.’ Neither choice is preselected. No choice means no marketing consent; conflicting choices must be clarified. You can withdraw consent at any time by emailing studio@rjm-studio.co.uk without affecting the services you receive."],
  ["Cancellation, suspension and handover", "The project agreement must explain cancellation, notice, any opportunity to remedy a breach, amounts payable for completed work and the treatment of deposits or committed costs. These general terms do not make every deposit non-refundable or impose one cancellation charge on all projects.", "On ending a project, the parties should identify work completed, outstanding invoices, any transferable deliverables and arrangements for access and handover under the agreement. Any applicable consumer cancellation rights and other mandatory protections take priority."],
  ["Service standards and liability", "RJM Studio will perform agreed services with reasonable care and skill. Nothing in these terms excludes or limits liability where doing so would be unlawful, or removes mandatory rights or remedies. No blanket liability cap or exclusion of all losses is introduced here. Any project-specific limitation must be expressly agreed and lawful."],
  ["Concerns, governing law and changes", "If something is wrong, contact studio@rjm-studio.co.uk with the project details, the issue and the outcome you are seeking. We will discuss the concern and seek a practical resolution. This does not prevent either party from exercising legal rights.", "These general terms are governed by Isle of Man law, subject to any different provision in the project agreement and any mandatory protections applicable to a client. They do not prevent a consumer from using a court available to them under mandatory law.", "Future revisions will show a new revision date. Updating this website does not automatically change an existing service agreement; changes to that agreement require the applicable agreed process."],
];

// Legal content shares the site layout; project-specific agreements take precedence.
export default function LegalDraftPage({ kind }: { kind: "privacy" | "terms" }) {
  const privacy = kind === "privacy";
  const title = privacy ? "Privacy Policy" : "Website & Service Terms";
  const sections = privacy ? privacySections : termsSections;
  return <ContentPageLayout>
    <Helmet><title>{title} | RJM Studio</title><meta name="description" content={privacy ? "How RJM Studio handles enquiries, client information and marketing preferences." : "RJM Studio website use and general website design and digital support service terms."} /></Helmet>
    <article className="mx-auto max-w-3xl py-14 md:py-20">
      <p className="text-sm text-zinc-400">Last updated: 21 November 2026</p>
      <h1 className="heading-display mt-10 text-5xl font-light md:text-6xl">{title}</h1>
      <section className="mt-8 text-base leading-8 text-zinc-300">
        <h2 className="heading-display text-3xl text-white">About RJM Studio</h2>
        <p className="mt-3">RJM Studio is operated by Ramil J Mallorca, a sole trader at 79 Circular Road, Douglas, Isle of Man. {privacy && "RJM Studio is the controller of personal information used to manage its own enquiries and client relationships."} Contact: <a className="underline" href="mailto:studio@rjm-studio.co.uk">studio@rjm-studio.co.uk</a>.</p>
      </section>
      <div className="mt-8 space-y-10 text-base leading-8 text-zinc-300">
        {sections.map(([heading, ...paragraphs]) => <section key={heading}>
          <h2 className="heading-display text-3xl text-white">{heading}</h2>
          {paragraphs.map(paragraph => <p key={paragraph} className="mt-3">{paragraph}</p>)}
        </section>)}
        {privacy && <section><h2 className="heading-display text-3xl text-white">Further information</h2><ul className="mt-3 list-disc space-y-2 pl-6">
          <li><a className="underline" href="https://www.inforights.im/">Isle of Man Information Commissioner — rights and complaints</a></li>
          <li><a className="underline" href="https://formspree.io/legal/privacy-policy/">Formspree privacy policy</a></li>
          <li><a className="underline" href="https://www.zoho.com/privacy.html">Zoho privacy policy</a></li>
          <li><a className="underline" href="https://policies.google.com/privacy">Google privacy policy</a></li>
          <li><a className="underline" href="https://vercel.com/legal/privacy-policy">Vercel privacy policy</a></li>
          <li><a className="underline" href="https://vercel.com/docs/analytics/privacy-policy">Vercel Web Analytics privacy information</a></li>
          <li><a className="underline" href="https://vercel.com/docs/speed-insights/privacy-policy">Vercel Speed Insights privacy information</a></li>
        </ul></section>}
      </div>
    </article>
  </ContentPageLayout>;
}
