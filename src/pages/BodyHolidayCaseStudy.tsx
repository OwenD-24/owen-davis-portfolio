import { Link } from 'react-router'

const contributionGroups = [
  {
    title: 'Guest-facing booking workflows',
    items: [
      'Supported guest journey testing across booking, calendar and preference-style flows.',
      'Worked with dummy guest scenarios to check how real users would move through the system.',
      'Helped validate that user-facing behaviour matched the expected booking logic.',
    ],
  },
  {
    title: 'Staff/admin workflows',
    items: [
      'Worked around staff-facing and admin-style workflows used to manage bookings, services and operational views.',
      'Supported testing around assignment-style processes and operational edge cases.',
      'Helped communicate issues clearly so changes could be reviewed and acted on.',
    ],
  },
  {
    title: 'Data and configuration',
    items: [
      'Worked with SQL data operations, service data, provider data, room data and booking-style records.',
      'Supported YAML/Axion configuration changes and checked how configuration affected app behaviour.',
      'Helped validate data after changes so screens and workflows reflected the expected result.',
    ],
  },
  {
    title: 'Testing, training and go-live support',
    items: [
      'Supported testing, bug investigation and issue checking during active project delivery.',
      'Travelled internationally to St Lucia as part of go-live preparation and supported in-person testing and training.',
      'Worked around real operational feedback from resort teams, not only isolated demo scenarios.',
    ],
  },
]

const toolGroups = [
  {
    title: 'Frontend / app workflow',
    items: ['Guest app flows', 'Admin views', 'Booking journeys', 'Workflow testing'],
  },
  {
    title: 'Data / configuration',
    items: ['SQL', 'DBeaver-style data checks', 'YAML/Axion', 'Service/provider data'],
  },
  {
    title: 'Delivery support',
    items: ['Bug investigation', 'Dummy guest testing', 'Training support', 'Go-live preparation'],
  },
  {
    title: 'AI-assisted direction',
    items: ['Workflow mapping', 'Prototype thinking', 'Logic checking', 'Safe app replication'],
  },
]

const learningPoints = [
  'Commercial software is not only about writing code — it is about understanding users, data, workflows and edge cases.',
  'Testing with realistic scenarios makes bugs easier to explain and easier for teams to resolve.',
  'AI-assisted development is useful when paired with clear logic, manual checking and an understanding of the real workflow.',
  'Strong communication matters when developers, managers and operational teams all need the same system to work correctly.',
]

function BodyHolidayCaseStudy() {
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
          Commercial Case Study
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          BodyHoliday / SAM / FEGA Commercial Case Study
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          A safe public case study covering my commercial experience supporting
          a hospitality and wellness booking platform across guest-facing
          workflows, staff/admin tools, operational data, testing, training and
          go-live preparation.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Overview
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Real commercial workflow experience, not just a demo build.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
            <p>
              This project involved supporting a hospitality and wellness
              booking platform used around guest journeys, service bookings,
              staff/admin workflows and operational data.
            </p>

            <p>
              My work sat across the practical delivery side of the system:
              checking flows, validating data, investigating issues, supporting
              configuration changes and helping teams understand how the system
              behaved in realistic scenarios.
            </p>

            <p>
              The strongest value of this experience is that it connected code,
              data and product thinking to real users and real operational
              workflows.
            </p>
          </div>
        </article>

        <aside className="rounded-3xl border border-white/10 bg-white/3 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Role
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white">
            Junior Full-Stack Developer
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            TechnoCore LTD · Feb 2025 — Present
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              'Commercial software',
              'SQL data checks',
              'YAML/Axion',
              'Testing',
              'Training support',
              'Bug investigation',
              'AI-assisted workflow thinking',
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
          Selected Contributions
        </p>

        <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Supporting guest journeys, admin workflows, data checks and delivery.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {contributionGroups.map((group) => (
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

      <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-3xl border border-white/10 bg-white/3 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            St Lucia Go-Live Support
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            On-site exposure to real users and resort operations.
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            As part of go-live preparation, I travelled internationally to St Lucia and supported
            in-person testing, training, data validation and issue resolution
            with resort teams. This gave me direct exposure to how software
            changes affect real operations, not just local development screens.
          </p>
        </article>

        <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            What this proves
          </p>

          <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
            <li>• I can work around real commercial workflows and user needs.</li>
            <li>• I can connect app behaviour to data, configuration and testing.</li>
            <li>• I can investigate issues and communicate them clearly.</li>
            <li>• I can work with AI tools while still checking logic manually.</li>
            <li>• I can contribute inside a real software delivery environment.</li>
          </ul>
        </article>
      </div>

      <div className="mt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Tools and Workflow Areas
        </p>

        <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          A mix of frontend thinking, data validation, configuration and delivery support.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {toolGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/3 p-6"
            >
              <h3 className="text-lg font-bold text-white">{group.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-white/3 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Challenges
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Working across moving parts.
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            The main challenge was that booking platforms are connected systems.
            A change in service data, provider setup, room data, configuration
            or permissions can affect what users see elsewhere. This meant the
            work required careful testing, clear notes and repeated validation.
          </p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/3 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Impact
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Better confidence before real-world use.
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            My support helped validate workflows, identify issues, check data,
            assist training and improve confidence around how the platform would
            behave for staff and guests during real operational use.
          </p>
        </article>
      </div>

      <div className="mt-16 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          What I learned
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
          Confidentiality Note
        </p>

        <p className="mt-5 max-w-4xl leading-8 text-slate-300">
          This case study is intentionally written as a safe public overview. It
          does not include private client data, guest data, credentials,
          internal screenshots, confidential implementation details or sensitive
          operational information.
        </p>
      </div>
    </section>
  )
}

export default BodyHolidayCaseStudy