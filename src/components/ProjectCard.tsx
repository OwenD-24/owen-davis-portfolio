import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/3 p-6 shadow-2xl shadow-black/20 transition hover:border-cyan-300/40 hover:bg-white/5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {project.eyebrow}
      </p>

      <h3 className="text-2xl font-bold tracking-tight text-white">
        {project.title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-slate-300">
        {project.summary}
      </p>

      <p className="mt-4 text-sm leading-6 text-slate-400">
        {project.impact}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {link.label}
          </a>
        ))}

        {project.status ? (
          <span className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-400">
            {project.status}
          </span>
        ) : null}
      </div>
    </article>
  )
}

export default ProjectCard