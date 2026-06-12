import { Link } from 'react-router'

function FegaSamAiRebuildCaseStudy() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-36">
      <Link
        to="/#projects"
        className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
      >
        ← Back to projects
      </Link>

      <p className="mt-10 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
        AI-Assisted Prototype
      </p>

      <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
        FEGA/SAM AI-Assisted Rebuild Concept
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        A private prototype exploring how legacy hospitality booking workflows
        could be mapped, redesigned and replicated through AI-assisted development.
      </p>

      <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
        <h2 className="text-2xl font-bold text-white">Page in progress</h2>

        <p className="mt-4 leading-7 text-slate-300">
          This page will focus on the thinking process, workflow modelling and
          AI-assisted build approach. Any screenshots or examples will be added
          only after names, client data and sensitive details are fully sanitised.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            'Why I built it',
            'Workflow modelling',
            'AI-assisted process',
            'Booking flow concepts',
            'Admin/assignment screens',
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

export default FegaSamAiRebuildCaseStudy