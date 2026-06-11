const heroSkills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Python',
  'SQL',
  'AI-Assisted Development',
]

const proofPoints = [
  'Commercial project support',
  'Hospitality booking workflows',
  'SQL/YAML data operations',
  'Testing and bug fixing',
]

function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-start justify-center overflow-hidden px-6 pb-20 pt-32">
      <div className="absolute right-0 top-32 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
        Developer Portfolio
      </p>

      <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Junior Full-Stack Developer building practical web apps and workflow systems.
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        I&apos;m Owen Davis, a Junior Full-Stack Developer with commercial
        experience supporting hospitality and wellness booking workflows,
        guest-facing journeys, staff/admin tools, SQL data operations,
        YAML/Axion configuration, testing, bug fixing, training and
        AI-assisted development.
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
        {heroSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/3 px-4 py-2"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-8 grid w-full max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {proofPoints.map((point) => (
          <div
            key={point}
            className="rounded-2xl border border-cyan-300/15 bg-cyan-300/5 px-4 py-3 text-sm font-medium text-slate-300"
          >
            {point}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero