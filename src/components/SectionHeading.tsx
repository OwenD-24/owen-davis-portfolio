type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading