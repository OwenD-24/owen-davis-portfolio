import SectionHeading from '../components/SectionHeading'

function CommercialExperience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Commercial Experience"
        title="Real project experience across users, data, workflows and delivery."
        description="My current commercial experience is not just coding in isolation. It includes working around live hospitality and wellness booking workflows, guest journeys, staff/admin processes, testing, training and operational data."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            TechnoCore LTD
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white">
            Junior Full-Stack Developer
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Feb 2025 — Present · Commercial hospitality and wellness platform
          </p>

          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            <p>
              Supported a booking platform used across guest-facing flows,
              staff/admin workflows, service data, provider data, room data,
              testing and go-live preparation.
            </p>

            <p>
              Worked with YAML/Axion configuration, SQL data operations,
              user-flow testing, bug investigation, dummy guest scenarios,
              permissions checks, staff training support and AI-assisted app
              replication.
            </p>

            <p>
              Travelled to St Lucia as part of go-live preparation, supporting
              in-person testing, training, data validation and issue resolution
              with resort teams.
            </p>
          </div>
        </article>

        <aside className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
          <h3 className="text-xl font-bold text-white">
            What this proves
          </h3>

          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            <li>• I understand real users and operational workflows.</li>
            <li>• I can work with production-style data and configuration.</li>
            <li>• I can test, document and communicate technical changes.</li>
            <li>• I can use AI tools without losing control of the logic.</li>
            <li>• I can contribute inside a real commercial software environment.</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default CommercialExperience