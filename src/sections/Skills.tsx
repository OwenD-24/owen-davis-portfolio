import SectionHeading from '../components/SectionHeading'

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Data',
    skills: ['Python', 'Django', 'Flask', 'SQL', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Workflow & Tools',
    skills: ['Git', 'GitHub', 'Vite', 'Vercel', 'Heroku', 'Cloudinary'],
  },
  {
    title: 'Commercial / AI',
    skills: ['Testing', 'Bug Fixing', 'YAML/Axion', 'AI-Assisted Development', 'LLM Apps', 'Workflow Automation'],
  },
]

function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="A practical full-stack skill set with a strong AI-assisted direction."
        description="My current focus is strengthening React and TypeScript while continuing to build on real-world workflow, data, testing and AI-assisted development experience."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/3 p-6"
          >
            <h3 className="text-lg font-bold text-white">{group.title}</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
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