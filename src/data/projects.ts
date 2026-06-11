export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  eyebrow: string
  summary: string
  impact: string
  tags: string[]
  links?: ProjectLink[]
  status?: string
}

export const projects: Project[] = [
  {
    title: 'BodyHoliday / SAM / FEGA Commercial Case Study',
    eyebrow: 'Commercial project • Private case study',
    summary:
      'Supported a hospitality and wellness booking platform across guest-facing booking flows, staff/admin workflows, SQL data operations, YAML/Axion configuration, testing and training.',
    impact:
      'Includes real commercial experience, St Lucia go-live preparation, dummy guest testing, permissions checks, data validation and issue resolution with resort teams.',
    tags: ['Commercial Software', 'SQL', 'YAML/Axion', 'Testing', 'Training'],
    status: 'Private commercial work — safe case study page coming soon.',
  },
  {
    title: 'FEGA/SAM AI-Assisted Rebuild Concept',
    eyebrow: 'AI-assisted prototype • Loveable',
    summary:
      'A modern app concept used to explore how legacy booking workflows could be replicated and improved through AI-assisted development.',
    impact:
      'Models guest booking flows, service/provider/room workflows, couple treatment booking, infrared therapy calendar splitting and admin/assignment screens.',
    tags: ['AI-Assisted Development', 'Loveable', 'Product Thinking', 'UX Flow'],
    status: 'Private prototype — screenshots to be added after sanitising names/data.',
  },
  {
    title: 'ZTZ Studios / 72h Offer Engine',
    eyebrow: 'React-style productised service build',
    summary:
      'A productised service website and offer engine for landing page, brand kit and audit sprint offers.',
    impact:
      'Shows product thinking, service structure, conversion copy, responsive layouts, reusable page sections and live deployment experience.',
    tags: ['Frontend', 'Productised Services', 'Responsive Design', 'Deployment'],
    links: [
      {
        label: 'Authority Hub',
        href: 'https://ztzstudios.co',
      },
      {
        label: 'Offer Engine',
        href: 'https://72h.ztzstudios.co',
      },
    ],
  },
  {
    title: 'Graphic Design Blog',
    eyebrow: 'Full-stack Django project',
    summary:
      'A full-stack Django blog app where users can register, log in, manage profiles, create posts and save favourite content.',
    impact:
      'Built as a solo final bootcamp project with authentication, CRUD workflows, PostgreSQL, Cloudinary, Heroku deployment and structured testing.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Cloudinary', 'Heroku'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/OwenD-24/Graphic-Design-Blog',
      },
      {
        label: 'Live Demo',
        href: 'https://graphics-blog-0f37e68d5715.herokuapp.com/',
      },
    ],
  },
  {
    title: 'Collections Dashboard',
    eyebrow: 'Flask / MySQL technical task',
    summary:
      'A Flask and MySQL dashboard for managing collector notes, customer transactions and payment plans.',
    impact:
      'Built as a practical technical task before joining TechnoCore, demonstrating Flask routes, database-backed records and CRUD-style workflows.',
    tags: ['Flask', 'Python', 'MySQL', 'HTML', 'CSS'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/OwenD-24/mysql-flask-app',
      },
    ],
  },
  {
    title: 'Colour Palette Generator',
    eyebrow: 'Vanilla JavaScript frontend project',
    summary:
      'A responsive colour palette generator where users can generate palettes, copy colour codes and use keyboard shortcuts.',
    impact:
      'Shows frontend fundamentals including DOM manipulation, event listeners, Clipboard API, keyboard controls and GitHub Pages deployment.',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'DOM', 'GitHub Pages'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/OwenD-24/JS-Colour-Picker-Project',
      },
      {
        label: 'Live Demo',
        href: 'https://owend-24.github.io/JS-Colour-Picker-Project/',
      },
    ],
  },
]