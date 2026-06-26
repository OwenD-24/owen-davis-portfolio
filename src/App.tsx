import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ScrollToTop from './components/ScrollToTop'
import LuxuryResortCaseStudy from './pages/LuxuryResortCaseStudy'
import LuxuryResortAiRebuildCaseStudy from './pages/LuxuryResortAiRebuildCaseStudy'
import CertificatesPage from './pages/CertificatesPage'
import CursorGlow from './components/CursorGlow'
import AmbientLines from './components/AmbientLines'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <AmbientLines />
      <CursorGlow />
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/case-studies/luxury-wellness-resort-platform"
          element={<LuxuryResortCaseStudy />}
        />

        <Route
          path="/case-studies/luxury-wellness-resort-ai-rebuild"
          element={<LuxuryResortAiRebuildCaseStudy />}
        />
        <Route 
          path="/certificates" 
          element={<CertificatesPage />} 
        />
      </Routes>
    </main>
  )
}

export default App