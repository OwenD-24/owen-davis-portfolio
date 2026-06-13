import { Link } from 'react-router'

const contributionGroups = [
  {
    title: 'Guest-facing booking workflows',
    items: [
      'Supported guest journey testing across booking, calendar and preference-style flows.',
      'Worked with dummy guest scenarios to check how real users would move through the system.',
      'Helped validate that user-facing behaviour matched the expected booking logic.',
    ],
  },
  {
    title: 'Staff/admin workflows',
    items: [
      'Worked around staff-facing and admin-style workflows used to manage bookings, services and operational views.',
      'Supported testing around assignment-style processes and operational edge cases.',
      'Helped communicate issues clearly so changes could be reviewed and acted on.',
    ],
  },
  {
    title: 'Data and configuration',
    items: [
      'Worked with SQL data operations, service data, provider data, room data and booking-style records.',
      'Supported YAML/Axion configuration changes and checked how configuration affected app behaviour.',
      'Helped validate data after changes so screens and workflows reflected the expected result.',
    ],
  },
  {
    title: 'Testing, training and go-live support',
    items: [
      'Supported testing, bug investigation and issue checking during active project delivery.',
      'Travelled internationally to St Lucia as part of go-live preparation and supported in-person testing and training.',
      'Worked around real operational feedback from resort teams, not only isolated demo scenarios.',
    ],
  },
]

const toolGroups = [
  {
    title: 'Frontend / app workflow',
    items: ['Guest app flows', 'Admin views', 'Booking journeys', 'Workflow testing'],
  },
  {
    title: 'Data / configuration',
    items: ['SQL', 'DBeaver-style data checks', 'YAML/Axion', 'Service/provider data'],
  },
  {
    title: 'Delivery support',
    items: ['Bug investigation', 'Dummy guest testing', 'Training support', 'Go-live preparation'],
  },
  {
    title: 'AI-assisted direction',
    items: ['Workflow mapping', 'Prototype thinking', 'Logic checking', 'Safe app replication'],
  },
]

const learningPoints = [
  'Commercial software is not only about writing code — it is about understanding users, data, workflows and edge cases.',
  'Testing with realistic scenarios makes bugs easier to explain and easier for teams to resolve.',
  'AI-assisted development is useful when paired with clear logic, manual checking and an understanding of the real workflow.',
  'Strong communication matters when developers, managers and operational teams all need the same system to work correctly.',
]

const guestFlowImages = [
  {
    src: '/images/case-studies/bodyholiday/bodyholiday-guest-flow-full-wireframe.png',
    alt: 'BodyHoliday guest onboarding flow full wireframe',
    title: 'Full guest-flow wireframe',
    caption:
      'A public-safe wireframe showing the planned journey from email link, login and registration through to terms, forms and calendar choice.',
    wide: true,
  },
  {
    src: '/images/case-studies/bodyholiday/bodyholiday-guest-flow-registration-login.png',
    alt: 'BodyHoliday registration and login branch wireframe',
    title: 'Registration and login branch',
    caption:
      'Shows how unregistered guests were routed through account creation before returning to the login flow.',
  },
  {
    src: '/images/case-studies/bodyholiday/bodyholiday-guest-flow-first-visit-calendar-choice.png',
    alt: 'BodyHoliday first visit form and calendar choice wireframe',
    title: 'First-visit and calendar-choice logic',
    caption:
      'Shows how first-time guests moved through preferences, spa and dietary forms before choosing whether to build their own calendar or wait for pre-arrivals.',
  },
]

const restaurantFlowImages = [
  {
    src: '/images/case-studies/bodyholiday/bodyholiday-guest-side-nav-homepage.png',
    alt: 'BodyHoliday FEGA guest side navigation homepage',
    title: 'Guest-side navigation',
    caption:
      'The updated FEGA guest navigation showing the restaurant area inside the wider guest experience.',
  },
  {
    src: '/images/case-studies/bodyholiday/bodyholiday-restaurant-category-menu.png',
    alt: 'BodyHoliday restaurant category menu screen',
    title: 'Restaurant category menu',
    caption:
      'Shows how dining options such as Tao, I-Tal, Cariblue, Windows and The Clubhouse were presented to guests.',
  },
  {
    src: '/images/case-studies/bodyholiday/bodyholiday-restaurant-paid-booking-date.png',
    alt: 'BodyHoliday Tao paid restaurant booking date selection screen',
    title: 'Paid restaurant date selection',
    caption:
      'A Tao booking screen showing the start of the guest-facing paid restaurant reservation journey.',
  },
  {
    src: '/images/case-studies/bodyholiday/bodyholiday-demo-calendar-bookings.png',
    alt: 'BodyHoliday demo calendar showing guest bookings',
    title: 'Demo calendar booking view',
    caption:
      'A demo calendar view showing how guest bookings and activities could appear after booking-flow actions were completed.',
  },
]

type VisualImage = {
  src: string
  alt: string
  title: string
  caption: string
  wide?: boolean
}

function VisualProofCard({ image }: { image: VisualImage }) {
  return (
    <figure
      className={`overflow-hidden rounded-3xl border border-white/10 bg-white/3 ${
        image.wide ? 'md:col-span-2' : ''
      }`}
    >
      <div className="overflow-hidden border-b border-white/10 bg-slate-950/60">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
        />
      </div>

      <figcaption className="p-5">
        <p className="text-sm font-bold text-white">{image.title}</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">{image.caption}</p>
      </figcaption>
    </figure>
  )
}

function BodyHolidayCaseStudy() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-36">
      <Link
        to="/#projects"
        className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
      >
        ← Back to projects
      </Link>

      <div className="mt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Commercial Case Study
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          BodyHoliday / SAM / FEGA Commercial Case Study
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          A safe public case study covering my commercial experience supporting
          a hospitality and wellness booking platform across guest-facing
          workflows, staff/admin tools, operational data, testing, training and
          go-live preparation.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Overview
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Real commercial workflow experience, not just a demo build.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
            <p>
              This project involved supporting a hospitality and wellness
              booking platform used around guest journeys, service bookings,
              staff/admin workflows and operational data.
            </p>

            <p>
              My work sat across the practical delivery side of the system:
              checking flows, validating data, investigating issues, supporting
              configuration changes and helping teams understand how the system
              behaved in realistic scenarios.
            </p>

            <p>
              The strongest value of this experience is that it connected code,
              data and product thinking to real users and real operational
              workflows.
            </p>
          </div>
        </article>

        <aside className="rounded-3xl border border-white/10 bg-white/3 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Role
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white">
            Junior Full-Stack Developer
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            TechnoCore LTD · Feb 2025 — Present
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              'Commercial software',
              'SQL data checks',
              'YAML/Axion',
              'Testing',
              'Training support',
              'Bug investigation',
              'AI-assisted workflow thinking',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </aside>
      </div>

      <div className="mt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Selected Contributions
        </p>

        <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Supporting guest journeys, admin workflows, data checks and delivery.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {contributionGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/3 p-6"
            >
              <h3 className="text-xl font-bold text-white">{group.title}</h3>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Visual proof
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white">
          Workflow visuals and delivery examples.
        </h2>

        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
          These visuals show safe examples of the type of guest-facing workflow and
          booking experience I worked around during the BodyHoliday / SAM / FEGA
          project. They are included as public-safe visual references and do not
          expose private guest data, credentials, internal implementation details or
          confidential business logic.
        </p>

        <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Guest onboarding flow
          </p>

          <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
            Guest onboarding flow logic.
          </h3>

          <div className="mt-5 grid gap-6 text-base leading-8 text-slate-300 lg:grid-cols-2">
            <p>
              One of the key areas I worked around was the guest onboarding journey
              from registration through to form completion and calendar choice. The
              resort needed a cleaner flow that could handle both new guests and
              returning guests, while still making sure privacy, liability, spa,
              preference and dietary steps were completed in the correct order.
            </p>

            <p>
              The important logic was the first-visit branch. If the guest selected
              that it was their first stay during registration, the system needed to
              show the full preference flow before spa and dietary forms. If the
              guest was returning and their preferences already existed, the flow
              could skip preferences and continue from the spa form.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {guestFlowImages.map((image) => (
              <VisualProofCard key={image.src} image={image} />
            ))}
          </div>

          <div className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-5 text-sm leading-6 text-slate-300 md:grid-cols-2">
            <p>• Worked around new-vs-returning guest logic.</p>
            <p>• Supported YAML/Axion flow changes backed by SQL checks.</p>
            <p>• Helped connect registration data to later form routing.</p>
            <p>• Worked across onboarding, forms and calendar-choice behaviour.</p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/3 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Restaurant booking journey
          </p>

          <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
            Guest-facing restaurant booking flow.
          </h3>

          <div className="mt-5 grid gap-6 text-base leading-8 text-slate-300 lg:grid-cols-2">
            <p>
              I also supported the guest-facing restaurant booking experience inside
              FEGA. A newer guest homepage and side-navigation structure was
              introduced, and I worked on restaurant pages for Cariblue, I-Tal, Tao,
              The Clubhouse and Windows.
            </p>

            <p>
              The restaurant flow needed to support different dining types. Some
              restaurants were walk-in or free dining, while paid reservation
              restaurants such as Tao required a booking journey where guests selected
              a date, added booking details and then saw the booking reflected in the
              guest calendar.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {restaurantFlowImages.map((image) => (
              <VisualProofCard key={image.src} image={image} />
            ))}
          </div>

          <div className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-5 text-sm leading-6 text-slate-300 md:grid-cols-2">
            <p>• Added and supported guest-facing restaurant pages.</p>
            <p>• Worked around paid and walk-in restaurant booking differences.</p>
            <p>• Helped connect restaurant booking flows to calendar behaviour.</p>
            <p>• Supported booking data checks, guest-flow testing and validation.</p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            What the visuals show
          </p>

          <div className="mt-5 grid gap-4 text-sm leading-7 text-slate-300 md:grid-cols-2">
            <p>• I can work from wireframes and turn planned journeys into app behaviour.</p>
            <p>• I understand how guest-facing UI, form routing, SQL checks and booking data connect.</p>
            <p>• I can support real hospitality workflows where one change affects forms, calendars, emails and staff operations.</p>
            <p>• I can explain commercial work safely without exposing private client information.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-3xl border border-white/10 bg-white/3 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            St Lucia Go-Live Support
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            On-site exposure to real users and resort operations.
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            As part of go-live preparation, I travelled internationally to St Lucia and supported
            in-person testing, training, data validation and issue resolution
            with resort teams. This gave me direct exposure to how software
            changes affect real operations, not just local development screens.
          </p>
        </article>

        <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            What this proves
          </p>

          <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
            <li>• I can work around real commercial workflows and user needs.</li>
            <li>• I can connect app behaviour to data, configuration and testing.</li>
            <li>• I can investigate issues and communicate them clearly.</li>
            <li>• I can work with AI tools while still checking logic manually.</li>
            <li>• I can contribute inside a real software delivery environment.</li>
          </ul>
        </article>
      </div>

      <div className="mt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Tools and Workflow Areas
        </p>

        <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          A mix of frontend thinking, data validation, configuration and delivery support.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {toolGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/3 p-6"
            >
              <h3 className="text-lg font-bold text-white">{group.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-white/3 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Challenges
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Working across moving parts.
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            The main challenge was that booking platforms are connected systems.
            A change in service data, provider setup, room data, configuration
            or permissions can affect what users see elsewhere. This meant the
            work required careful testing, clear notes and repeated validation.
          </p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/3 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Impact
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Better confidence before real-world use.
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            My support helped validate workflows, identify issues, check data,
            assist training and improve confidence around how the platform would
            behave for staff and guests during real operational use.
          </p>
        </article>
      </div>

      <div className="mt-16 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          What I learned
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {learningPoints.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-white/10 bg-slate-950/30 p-5 text-sm leading-7 text-slate-300"
            >
              {point}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-3xl border border-white/10 bg-white/3 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Confidentiality Note
        </p>

        <p className="mt-5 max-w-4xl leading-8 text-slate-300">
          This case study is intentionally written as a safe public overview. It
          does not include private client data, guest data, credentials,
          internal screenshots, confidential implementation details or sensitive
          operational information.
        </p>
      </div>
    </section>
  )
}

export default BodyHolidayCaseStudy