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
  caseStudyHref?: string
  image?: string
}

export const projects: Project[] = [
  {
    title: 'BodyHoliday / SAM / FEGA Commercial Case Study',
    eyebrow: 'Commercial project • Private case study',
    summary:
      'Supported a hospitality and wellness booking platform across guest-facing booking flows, staff/admin workflows, SQL data operations, YAML/Axion configuration, testing and training.',
    impact:
      'Contributed to real commercial delivery work including St Lucia go-live preparation, dummy guest testing, permissions checks, data validation and issue resolution with resort teams.',
    tags: ['Commercial Software', 'SQL', 'YAML/Axion', 'Testing', 'Training'],
    status: 'Safe public commercial case study now live.',
    caseStudyHref: '/case-studies/bodyholiday-sam-fega',
    image: '/images/projects/bodyholiday-commercial-case-study.png',
  },
  {
    title: 'FEGA/SAM AI-Assisted Rebuild Concept',
    eyebrow: 'AI-assisted prototype • Lovable',
    summary:
      'A private prototype exploring how legacy booking workflows could be replicated, simplified and improved through AI-assisted development.',
    impact:
      'Models guest booking journeys, service/provider/room workflows, couple treatment booking, infrared therapy calendar splitting and admin assignment screens.',
    tags: ['AI-Assisted Development', 'Lovable', 'Product Thinking', 'UX Flow'],
    status: 'Safe public AI-assisted concept case study now live.',
    caseStudyHref: '/case-studies/fega-sam-ai-rebuild',
    image: '/images/case-studies/fega-sam-rebuild/fega-sam-registration-prearrival-flow.png',
  },
  {
    title: 'Productised Offer Engine',
    eyebrow: 'Productised service build',
    summary:
      'A productised service website and offer-flow concept for landing page, brand kit and audit-style sprint offers.',
    impact:
      'Focused on product thinking, service structure, conversion-focused copy, responsive layouts, reusable page sections and deployment workflow.',
    tags: ['Frontend', 'Productised Services', 'Responsive Design', 'Deployment'],
    image: '/images/projects/72h-offer-engine.png',
    status: 'Private concept project',
  },
  {
    title: 'Graphic Design Blog',
    eyebrow: 'Full-stack Django project',
    summary:
      'A full-stack Django blog app where users can register, log in, manage profiles, create posts and save favourite content.',
    impact:
      'Built as a solo final bootcamp project with authentication, CRUD workflows, PostgreSQL, Cloudinary media storage, Heroku deployment and structured testing.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Cloudinary', 'Heroku'],
    image: '/images/projects/graphic-design-blog.png',
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
      'Built as a practical technical task before joining TechnoCore, demonstrating Flask routing, database-backed records, template rendering and CRUD-style workflow structure.',
    tags: ['Flask', 'Python', 'MySQL', 'HTML', 'CSS'],
    image: '/images/projects/collections-dashboard.png',
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
      'Shows frontend fundamentals including DOM manipulation, event listeners, keyboard controls, Clipboard API, responsive layout and GitHub Pages deployment.',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'DOM', 'GitHub Pages'],
    image: '/images/projects/colour-palette-generator.png',
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