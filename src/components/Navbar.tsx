import { useState } from 'react'

const navLinks = [
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="/"
          onClick={closeMenu}
          className="text-sm font-bold text-white"
        >
          Owen Davis
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="/#contact"
            className="rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-300/10"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-300/10 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 rounded-full bg-cyan-300" />
            <span className="h-0.5 w-5 rounded-full bg-cyan-300" />
            <span className="h-0.5 w-5 rounded-full bg-cyan-300" />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-5 md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/#contact"
              onClick={closeMenu}
              className="rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar