import { Link } from 'react-router'

function BodyHolidayCaseStudy() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-36">
      <Link
        to="/#projects"
        className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
      >
        ← Back to projects
      </Link>

      <p className="mt-10 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
        Commercial Case Study
      </p>

      <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
        BodyHoliday / SAM / FEGA Commercial Case Study
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        A safe case study covering my commercial experience supporting a hospitality
        and wellness booking platform across guest-facing workflows, staff/admin
        tools, operational data, testing, training and go-live preparation.
      </p>

      <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
        <h2 className="text-2xl font-bold text-white">Page in progress</h2>

        <p className="mt-4 leading-7 text-slate-300">
          This page will be written as a safe public case study. It will avoid
          private client data, internal screenshots, guest information and any
          sensitive business details.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            'Platform context',
            'My role',
            'Selected contributions',
            'Tools and workflow',
            'Challenges',
            'What I learned',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-slate-950/30 p-4 text-sm font-semibold text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BodyHolidayCaseStudy