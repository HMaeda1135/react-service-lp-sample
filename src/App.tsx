import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Services from './components/Services'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Cta from './components/Cta'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import './App.css'

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="page">
      <Header />

      <main>
        <Hero />
        <Problems />
        <Services />
        <Features />
        <Pricing />
        <Faq />
        <Cta onOpenContact={() => setIsContactOpen(true)} />
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
