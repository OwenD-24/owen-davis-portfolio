import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const contactSignals = [
  'Junior Developer roles',
  'Frontend / React opportunities',
  'Full-stack support roles',
  'AI-assisted workflow projects',
]

const contactLinks = [
  {
    label: 'Email Me',
    href: 'mailto:owendavis1991@gmail.com',
    primary: true,
    external: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/owen-davis-465508279/',
    primary: false,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/OwenD-24',
    primary: false,
    external: true,
  },
  {
    label: 'Download CV',
    href: '/cv/Owen-Davis-CV.pdf',
    primary: false,
    external: true,
    accent: true,
  },
]

function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-24">
      <Reveal variant="fade-up" delay={100}>
        <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8 shadow-2xl shadow-cyan-950/10 sm:p-10">
          <SectionHeading
            eyebrow="Contact"
            title="Open to junior, graduate and early-career developer opportunities."
            description="I’m looking for roles where I can keep improving, contribute to real projects and build on my commercial software experience across React, TypeScript, full-stack development, workflow systems and AI-assisted development."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {contactSignals.map((signal, index) => (
              <Reveal
                key={signal}
                variant="fade-up"
                delay={160 + index * 70}
              >
                <span className="block rounded-full border border-white/10 bg-slate-950/30 px-4 py-2 text-sm text-slate-300">
                  {signal}
                </span>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {contactLinks.map((link, index) => (
              <Reveal
                key={link.label}
                variant="fade-up"
                delay={260 + index * 80}
              >
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={
                    link.primary
                      ? 'inline-flex rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
                      : link.accent
                        ? 'inline-flex rounded-full border border-cyan-300/40 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-950'
                        : 'inline-flex rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300'
                  }
                >
                  {link.label}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Contact