import { Link } from 'react-router'
import Reveal from '../components/Reveal'

function CertificatesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-36">
        <Reveal variant="fade-up" delay={80}>
            <Link
                to="/"
                className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
                ← Back to home
            </Link>
        </Reveal>
      <Reveal variant="fade-up" delay={120}>
        <section className="mt-12">
            <p className="text-sm font-bold uppercase tracking-[0.45em] text-cyan-300">
            Certificates
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Development certificates and learning proof.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            A small collection of certificates supporting my full-stack development,
            frontend and AI-assisted software learning.
            </p>
        </section>
      </Reveal>

      <Reveal variant="fade-up" delay={180}>
        <section className="mt-16 rounded-3xl border border-cyan-400/20 bg-slate-950/60 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-cyan-300">
            Featured Certificate
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
                <div>
                    <h2 className="text-3xl font-black text-white">
                    Code Institute — Full-Stack Developer Skills Bootcamp
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-300">
                    Certificate of Achievement for completing a 16-week High-Performance
                    Full-Stack Developer Skills Bootcamp covering front-end development,
                    JavaScript, Python and Django full-stack frameworks.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Django'].map(
                        (skill) => (
                        <span
                            key={skill}
                            className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-300"
                        >
                            {skill}
                        </span>
                        )
                    )}
                    </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                    <p className="text-sm font-semibold text-slate-400">Issued</p>
                    <p className="mt-2 text-xl font-bold text-white">October 2024</p>

                    <p className="mt-6 text-sm font-semibold text-slate-400">Provider</p>
                    <p className="mt-2 text-xl font-bold text-white">Code Institute</p>

                    <a
                    href="/certificates/code-institute-full-stack-certificate.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                    >
                    View Certificate
                    </a>
                </div>
            </div>
        </section>
      </Reveal>
      <Reveal variant="fade-up" delay={280}>                 
        <section className="mt-10 rounded-3xl border border-white/10 bg-slate-950/40 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-cyan-300">
            More coming soon
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            This page will be updated as I complete more React, TypeScript,
            AI engineering and automation training.
            </p>
        </section>
      </Reveal> 
    </main>
  )
}

export default CertificatesPage