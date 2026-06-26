import Hero from '../components/Hero'
import ProfessionalExperience from '../sections/ProfessionalExperience'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Contact from '../sections/Contact'

function HomePage() {
  return (
    <>
      <Hero />
      <ProfessionalExperience />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default HomePage