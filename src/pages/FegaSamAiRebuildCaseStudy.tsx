import { Link } from 'react-router'

type VisualImage = {
  src: string
  alt: string
  title: string
  caption: string
  wide?: boolean
}

const rebuildVisuals: VisualImage[] = [
  {
    src: '/images/case-studies/fega-sam-rebuild/fega-sam-registration-prearrival-flow.png',
    alt: 'FEGA SAM AI rebuild guest registration and pre-arrival flow',
    title: 'Guest registration and pre-arrival flow',
    caption:
      'A safe visual model of the demo guest journey from email/login through registration, first-stay setup, consent forms, pre-arrival questions, spa, diet and calendar choice.',
    wide: true,
  },
  {
    src: '/images/case-studies/fega-sam-rebuild/fega-sam-guest-calendar-view.png',
    alt: 'FEGA SAM AI rebuild guest calendar view',
    title: 'Guest calendar and app navigation',
    caption:
      'Shows the guest-side calendar area after onboarding, where planned activities, restaurant bookings and service journeys can be surfaced.',
  },
  {
    src: '/images/case-studies/fega-sam-rebuild/fega-sam-restaurant-reservation-flow.png',
    alt: 'FEGA SAM AI rebuild restaurant reservation flow',
    title: 'Restaurant reservation journey',
    caption:
      'A guest-facing restaurant booking concept showing restaurant selection, date/time details, party size and booking confirmation flow.',
  },
  {
    src: '/images/case-studies/fega-sam-rebuild/fega-sam-services-management.png',
    alt: 'FEGA SAM AI rebuild SAM services management screen',
    title: 'SAM service setup and catalogue structure',
    caption:
      'Shows the admin-side service catalogue concept, including service categories, durations, pricing behaviour and operational service setup.',
  },
  {
    src: '/images/case-studies/fega-sam-rebuild/fega-sam-assignments-status-update.png',
    alt: 'FEGA SAM AI rebuild assignments status update screen',
    title: 'SAM assignments and status workflow',
    caption:
      'Shows the operational assignment view where bookings can be reviewed and status values such as checked in, no-show or cancelled can be managed.',
  },
]

function VisualProofCard({ image }: { image: VisualImage }) {
  return (
    <figure
      className={`overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 ${
        image.wide ? 'lg:col-span-2' : ''
      }`}
    >
      <div
        className={`overflow-hidden border-b border-white/10 bg-white ${
          image.wide ? 'aspect-16/7' : 'aspect-video'
        }`}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="h-full w-full object-contain transition duration-500 hover:scale-[1.02]"
        />
      </div>

      <figcaption className="p-5">
        <p className="text-sm font-bold text-white">{image.title}</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          {image.caption}
        </p>
      </figcaption>
    </figure>
  )
}

const workflowGroups = [
  {
    title: 'Guest-facing workflow concepts',
    items: [
      'Guest registration, onboarding and return-user style journeys.',
      'Preference, dietary, spa and service booking flow concepts.',
      'Calendar-style views for guests to understand planned bookings and activities.',
    ],
  },
  {
    title: 'Staff/admin workflow concepts',
    items: [
      'Service, provider, room and operational setup screens.',
      'Assignment-style workflows for matching services, providers and spaces.',
      'Queue-style views for checking bookings, readiness and operational status.',
    ],
  },
  {
    title: 'Data modelling concepts',
    items: [
      'Service categories, provider teams, room types and room/service mappings.',
      'Availability-style data, calendar blocks and operational filtering.',
      'Cleaner structures for importing and validating workflow data.',
    ],
  },
  {
    title: 'Complex booking logic explored',
    items: [
      'Multi-provider service requirements such as couple treatments.',
      'Parent/child booking-style concepts for split-session services.',
      'Filtering ideas for services, rooms, providers and assignment planning.',
    ],
  },
]

const processSteps = [
  {
    title: '1. Understand the legacy workflow',
    description:
      'Before building screens, I broke down the booking and service-management workflow into smaller user journeys, data relationships and operational rules.',
  },
  {
    title: '2. Rebuild the concept safely',
    description:
      'I used AI-assisted development to explore how the workflow could be represented in a more modern app structure without exposing private client data.',
  },
  {
    title: '3. Validate the logic manually',
    description:
      'I checked generated ideas against real workflow understanding, making sure the AI output did not replace the need for human logic and testing.',
  },
  {
    title: '4. Improve the structure',
    description:
      'The concept helped explore cleaner screens, clearer data groupings and better ways to think about booking, assignment and operational setup flows.',
  },
]

const improvementAreas = [
  'Clearer guest booking journeys',
  'Cleaner service/provider/room relationships',
  'Better admin workflow separation',
  'More structured assignment planning',
  'Safer data import and validation thinking',
  'Reusable app sections and components',
  'Improved workflow documentation',
  'Modern React-style application direction',
]

const learningPoints = [
  'AI-assisted development is most useful when the human understands the workflow deeply enough to judge the output.',
  'Complex booking systems need clear data relationships before the interface can make sense.',
  'A rebuild concept can be valuable even before it becomes production software because it exposes workflow gaps and better structure ideas.',
  'The strongest use of AI is not blindly generating screens — it is using it to speed up modelling, prototyping and technical thinking.',
]

function FegaSamAiRebuildCaseStudy() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-36">
      <Link
        to="/#projects"
        className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
      >
        ← Back to projects
      </Link>

      <div className="mt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          AI-Assisted Prototype
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          FEGA/SAM AI-Assisted Rebuild Concept
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          A safe public case study explaining how I used AI-assisted development
          to explore a modern rebuild concept for hospitality booking and
          service-management workflows.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Overview
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Exploring how complex booking workflows could be rebuilt with a modern app structure.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
            <p>
              This prototype was built as an AI-assisted concept to explore how
              hospitality booking, service-management and staff/admin workflows
              could be represented in a cleaner modern application structure.
            </p>

            <p>
              The aim was not to expose or copy private implementation details.
              The aim was to practise translating complex operational workflows
              into clearer screens, data relationships and user journeys.
            </p>

            <p>
              The project helped me build confidence using AI tools while still
              keeping control of the logic, structure and workflow decisions.
            </p>
          </div>
        </article>

        <aside className="rounded-3xl border border-white/10 bg-white/3 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Project Type
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white">
            Private AI-Assisted Workflow Prototype
          </h2>

          <p className="mt-5 leading-7 text-slate-300">
            Built as a private learning and workflow-modelling project using
            AI-assisted development. Public screenshots can be added later only
            after all names, data and sensitive details are fully sanitised.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              'AI-assisted development',
              'Workflow modelling',
              'Product thinking',
              'React-style structure',
              'Booking logic',
              'Admin workflows',
              'Data validation',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </aside>
      </div>

      <div className="mt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Why I Built It
        </p>

        <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          To practise turning real workflow knowledge into modern app architecture.
        </h2>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/3 p-8">
          <div className="space-y-4 text-base leading-8 text-slate-300">
            <p>
              After working around commercial hospitality and wellness booking
              workflows, I wanted to explore how similar workflow patterns could
              be rebuilt in a more modern, component-driven app structure.
            </p>

            <p>
              The prototype gave me a practical way to test my understanding of
              guest journeys, service setup, provider availability, room/location
              data, assignment logic and operational admin screens.
            </p>

            <p>
              It also helped me practise a realistic AI-assisted development
              workflow: prompting, reviewing, correcting, validating and refining
              output instead of accepting generated code blindly.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Workflows Modelled
        </p>

        <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Guest journeys, staff/admin workflows, data relationships and booking logic.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {workflowGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/3 p-6"
            >
              <h3 className="text-xl font-bold text-white">{group.title}</h3>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          AI-Assisted Development Process
        </p>

        <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Using AI as a build partner, not as a replacement for understanding.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {processSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-6"
            >
              <h3 className="text-xl font-bold text-white">{step.title}</h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-3xl border border-white/10 bg-white/3 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Improvements Explored
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Cleaner structure for complex operational flows.
          </h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {improvementAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            What this proves
          </p>

          <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
            <li>• I can use AI tools to speed up prototyping and workflow exploration.</li>
            <li>• I can translate commercial workflow knowledge into app structure.</li>
            <li>• I can reason about data relationships, booking logic and user journeys.</li>
            <li>• I can review generated output instead of relying on it blindly.</li>
            <li>• I can connect product thinking, frontend structure and operational logic.</li>
          </ul>
        </article>
      </div>

      <section className="mt-16 rounded-3xl border border-cyan-400/20 bg-slate-950/60 p-6 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Visual Proof
        </p>

        <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Safe prototype visuals showing the rebuilt guest and admin workflow.
        </h2>

        <p className="mt-5 max-w-4xl leading-8 text-slate-300">
          These visuals are from the AI-assisted rebuild concept and are included as
          public-safe examples of the type of onboarding, booking, service setup and
          assignment workflows I explored. They do not expose private guest data,
          credentials, internal URLs or confidential implementation details.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {rebuildVisuals.map((image) => (
            <VisualProofCard key={image.title} image={image} />
          ))}
        </div>
      </section>

      <div className="mt-16 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          What I Learned
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {learningPoints.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-white/10 bg-slate-950/30 p-5 text-sm leading-7 text-slate-300"
            >
              {point}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-3xl border border-white/10 bg-white/3 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Safety and Sanitisation Note
        </p>

        <p className="mt-5 max-w-4xl leading-8 text-slate-300">
          This page is written as a safe public overview of an AI-assisted
          rebuild concept. It does not include real guest names, booking
          references, private URLs, credentials, internal screenshots,
          confidential implementation details or sensitive operational data.
        </p>
      </div>
    </section>
  )
}

export default FegaSamAiRebuildCaseStudy