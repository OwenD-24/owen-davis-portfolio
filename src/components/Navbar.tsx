const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-bold tracking-wide text-white">
          Owen Davis
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-950"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  )
}

export default Navbar