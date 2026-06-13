import SectionHeading from '../components/SectionHeading'

const contributionAreas = [
  'Guest-facing booking flows',
  'Staff/admin workflows',
  'SQL data validation',
  'YAML/Axion configuration',
  'Dummy guest testing',
  'Bug investigation',
  'Training support',
  'AI-assisted prototyping',
]

const proofPoints = [
  'Worked around real operational users, not only isolated demo projects.',
  'Handled workflow, data, testing and configuration tasks across a commercial platform.',
  'Supported live-style scenarios using dummy guests, staff/admin views and booking data.',
  'Used AI tools as part of the development process while still checking logic and behaviour.',
]

function CommercialExperience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Commercial Experience"
        title="Real project experience across users, data, workflows and delivery."
        description="My commercial experience has involved supporting a hospitality and wellness booking platform across guest journeys, staff/admin workflows, operational data, testing, training and AI-assisted development."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl border border-white/10 bg-white/3 p-8 shadow-2xl shadow-black/20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            TechnoCore Ltd
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white">
            Junior Full-Stack Developer
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Feb 2025 — Present · Commercial hospitality and wellness platform
          </p>

          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            <p>
              Supported a booking platform used across guest-facing journeys,
              staff/admin tools, service data, provider data, room data,
              testing and go-live preparation.
            </p>

            <p>
              Worked with YAML/Axion configuration, SQL data operations,
              user-flow testing, bug investigation, dummy guest scenarios,
              permissions checks, staff training support and AI-assisted
              workflow replication.
            </p>

            <p>
              Travelled internationally to St Lucia as part of go-live preparation, supporting
              in-person testing, training, data validation and issue resolution
              with resort teams.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {contributionAreas.map((area) => (
              <span
                key={area}
                className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm font-medium text-slate-300"
              >
                {area}
              </span>
            ))}
          </div>
        </article>

        <aside className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8 shadow-2xl shadow-cyan-950/10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Commercial Signal
          </p>

          <h3 className="mt-3 text-xl font-bold text-white">
            What this proves
          </h3>

          <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-300">
            {proofPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default CommercialExperience