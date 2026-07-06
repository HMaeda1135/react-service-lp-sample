import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import ServiceSection from './components/ServiceSection'
import StrengthSection from './components/StrengthSection'
import FlowSection from './components/FlowSection'
import WorksSection from './components/WorksSection'
import FaqSection from './components/FaqSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import './App.css'

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="page">
      <Header />

      <main>
        <HeroSection />
        <ProblemSection />
        <ServiceSection />
        <StrengthSection />
        <FlowSection />
        <WorksSection />
        <FaqSection />
        <CtaSection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  )
}

export default App
