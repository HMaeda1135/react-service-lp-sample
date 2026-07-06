import { useState } from 'react'
import { faqItems } from '../data/lpContent'
import SectionHeader from './SectionHeader'

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <div className="faq-list">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`
        const buttonId = `faq-button-${index}`

        return (
          <div key={item.question} className={`faq-item${isOpen ? ' open' : ''}`}>
            <button
              type="button"
              id={buttonId}
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
            >
              <span className="faq-question-text">Q. {item.question}</span>
              <span className="faq-icon" aria-hidden="true" />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="faq-answer"
              hidden={!isOpen}
            >
              A. {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function FaqSection() {
  return (
    <section id="faq" className="section faq">
      <div className="container">
        <SectionHeader title="よくある質問" />
        <FaqAccordion />
      </div>
    </section>
  )
}

export default FaqSection
