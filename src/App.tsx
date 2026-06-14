import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ScrollToTop from './components/ScrollToTop'
import BodyHolidayCaseStudy from './pages/BodyHolidayCaseStudy'
import FegaSamAiRebuildCaseStudy from './pages/FegaSamAiRebuildCaseStudy'
import CertificatesPage from './pages/CertificatesPage'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/case-studies/bodyholiday-sam-fega"
          element={<BodyHolidayCaseStudy />}
        />
        <Route
          path="/case-studies/fega-sam-ai-rebuild"
          element={<FegaSamAiRebuildCaseStudy />}
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