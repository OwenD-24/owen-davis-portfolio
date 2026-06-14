import { Link } from 'react-router'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  featured?: boolean
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`h-full flex-col rounded-3xl border p-6 shadow-2xl shadow-black/20 transition ${
        featured
          ? 'border-cyan-300/30 bg-cyan-300/5 hover:border-cyan-300/60'
          : 'border-white/10 bg-white/3 hover:border-cyan-300/40 hover:bg-white/5'
      }`}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          {project.eyebrow}
        </p>

        {featured ? (
          <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
            Featured
          </span>
        ) : null}
      </div>

      {project.image && (
        <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="aspect-video w-full object-cover transition duration-500 hover:scale-[1.03]"
          />
        </div>
      )}

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
            className="rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {project.caseStudyHref ? (
          <Link
            to={project.caseStudyHref}
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Case Study
          </Link>
        ) : null}
        
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