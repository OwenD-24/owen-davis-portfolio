import SectionHeading from '../components/SectionHeading'

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Building responsive interfaces and component-based layouts.',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Data',
    description: 'Working with server-side logic, databases and data-backed apps.',
    skills: ['Python', 'Django', 'Flask', 'SQL', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Workflow & Tools',
    description: 'Managing projects, deployments and development workflows.',
    skills: ['Git', 'GitHub', 'Vite', 'Vercel', 'Heroku', 'Cloudinary'],
  },
  {
    title: 'Commercial / AI Direction',
    description: 'Applying technical skills inside real workflow and AI-assisted contexts.',
    skills: [
      'Testing',
      'Bug Fixing',
      'YAML/Axion',
      'AI-Assisted Development',
      'Workflow Mapping',
      'LLM App Direction',
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="A practical full-stack skill set with a strong AI-assisted direction."
        description="My current focus is strengthening React and TypeScript while building on real commercial workflow, data, testing and AI-assisted development experience."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/3 p-6 shadow-2xl shadow-black/20 transition hover:border-cyan-300/40 hover:bg-white/5"
          >
            <h3 className="text-lg font-bold text-white">{group.title}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {group.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills