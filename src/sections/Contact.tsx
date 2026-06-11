import SectionHeading from '../components/SectionHeading'

const contactSignals = [
  'Junior Developer roles',
  'Frontend / React opportunities',
  'Full-stack support roles',
  'AI-assisted workflow projects',
]

function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8 shadow-2xl shadow-cyan-950/10 sm:p-10">
        <SectionHeading
          eyebrow="Contact"
          title="Open to junior, graduate and early-career developer opportunities."
          description="I’m looking for roles where I can keep improving, contribute to real projects and build on my commercial software experience across React, TypeScript, full-stack development, workflow systems and AI-assisted development."
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {contactSignals.map((signal) => (
            <span
              key={signal}
              className="rounded-full border border-white/10 bg-slate-950/30 px-4 py-2 text-sm text-slate-300"
            >
              {signal}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:owendavis1991@gmail.com"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/owen-davis-465508279/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/OwenD-24"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact