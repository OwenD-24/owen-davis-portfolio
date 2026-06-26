import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-24">
      <Reveal variant="fade-up">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Professional Experience, AI-assisted prototypes and public builds."
          description="A focused selection of commercial work, AI-assisted workflow thinking, full-stack projects and frontend fundamentals."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            variant="fade-up"
            delay={index * 100}
            className="h-full"
          >
            <ProjectCard
              project={project}
              featured={index < 2}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects