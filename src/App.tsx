import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CommercialExperience from './sections/CommercialExperience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <CommercialExperience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App