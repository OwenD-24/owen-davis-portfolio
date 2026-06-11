import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Selected Projects"
        title="Commercial experience, AI-assisted prototypes and public builds."
        description="A focused selection of commercial work, AI-assisted workflow thinking, full-stack projects and frontend fundamentals."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            featured={index < 2}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects