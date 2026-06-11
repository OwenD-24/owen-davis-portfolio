import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Selected Projects"
        title="Commercial experience, AI-assisted prototypes and public builds."
        description="These projects are ordered to show the strongest signal first: commercial work, AI-assisted workflow thinking, then public full-stack and frontend projects."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects