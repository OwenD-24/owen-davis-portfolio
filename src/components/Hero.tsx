function Hero() {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-start justify-center px-6 pb-16 pt-32">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
        Developer Portfolio
      </p>

      <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Junior Full-Stack Developer building practical web apps and workflow systems.
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        I&apos;m Owen Davis, a Junior Full-Stack Developer with commercial experience
        supporting hospitality and wellness booking workflows, guest-facing flows,
        staff/admin tools, SQL data operations, YAML/Axion configuration, testing,
        bug fixing, training and AI-assisted development.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          View Projects
        </a>

        <a
          href="#experience"
          className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
        >
          View Experience
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
        <span className="rounded-full border border-white/10 px-4 py-2">
          React
        </span>
        <span className="rounded-full border border-white/10 px-4 py-2">
          TypeScript
        </span>
        <span className="rounded-full border border-white/10 px-4 py-2">
          JavaScript
        </span>
        <span className="rounded-full border border-white/10 px-4 py-2">
          Python
        </span>
        <span className="rounded-full border border-white/10 px-4 py-2">
          SQL
        </span>
        <span className="rounded-full border border-white/10 px-4 py-2">
          AI-Assisted Development
        </span>
      </div>
    </section>
  )
}

export default Hero