import { Link } from 'react-router'
import Reveal from './Reveal'

const heroSkills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Python',
  'SQL',
  'AI-Assisted Development',
]

const proofPoints = [
  'Commercial project support',
  'Hospitality booking workflows',
  'SQL/YAML data operations',
  'Testing and bug fixing',
]

const profileImage = '/images/profile/owen-davis-st-lucia-profile.jpeg'

function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:pt-40">
      <div className="absolute right-0 top-32 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Mobile profile image - appears first */}
      <Reveal variant="scale-fade" delay={0} className="mb-10 flex justify-center lg:hidden">
        <div className="relative w-52 sm:w-64">
          <div className="profile-cutout absolute inset-0 bg-cyan-300/20 blur-3xl" />

          <img
            src={profileImage}
            alt="Owen Davis in St Lucia during go-live support"
            loading="eager"
            className="profile-cutout relative aspect-square w-full object-cover object-center shadow-2xl shadow-cyan-500/10"
          />
        </div>
      </Reveal>

      {/* Desktop profile image - appears after text/buttons/tags */}
      <Reveal
        variant="scale-fade"
        delay={450}
        className="pointer-events-none absolute right-6 top-82.5 hidden lg:block xl:top-87.5"
      >
        <div className="relative w-72 xl:w-80">
          <div className="profile-cutout absolute inset-0 bg-cyan-300/20 blur-3xl" />

          <img
            src={profileImage}
            alt="Owen Davis in St Lucia during go-live support"
            loading="eager"
            className="profile-cutout relative aspect-square w-full object-cover object-center shadow-2xl shadow-cyan-500/10"
          />
        </div>
      </Reveal>

      <div className="relative z-10">
        <Reveal variant="fade-up" delay={80}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Developer Portfolio
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Junior Full-Stack Developer building practical web apps and workflow systems.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I&apos;m Owen Davis, a Junior Full-Stack Developer with commercial
            experience supporting hospitality and wellness booking workflows,
            guest-facing journeys, staff/admin tools, SQL data operations,
            YAML/Axion configuration, testing, bug fixing, training and
            AI-assisted development.
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={180}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="#experience"
              className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              View Experience
            </a>

            <a
              href="/cv/Owen-Davis-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-300/40 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-950"
            >
              Download CV
            </a>

            <Link
              to="/certificates"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              Certificates
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 flex max-w-4xl flex-wrap gap-3 text-sm text-slate-400">
          {heroSkills.map((skill, index) => (
            <Reveal key={skill} variant="fade-up" delay={240 + index * 60}>
              <span className="block rounded-full border border-white/10 bg-white/3 px-4 py-2">
                {skill}
              </span>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid w-full max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point, index) => (
            <Reveal key={point} variant="fade-up" delay={360 + index * 80}>
              <div className="h-full rounded-2xl border border-cyan-300/15 bg-cyan-300/5 px-4 py-3 text-sm font-medium text-slate-300">
                {point}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero