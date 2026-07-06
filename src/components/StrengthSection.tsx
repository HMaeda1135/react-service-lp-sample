import { strengthSection } from '../data/lpContent'
import SectionHeader from './SectionHeader'

function StrengthSection() {
  return (
    <section id="strengths" className="section strengths">
      <div className="container">
        <SectionHeader title={strengthSection.title} lead={strengthSection.lead} />
        <div className="strengths-grid">
          {strengthSection.items.map((item) => (
            <div key={item.number} className="strength-item">
              <span className="strength-number">{item.number}</span>
              <h3 className="strength-title">{item.title}</h3>
              <p className="strength-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StrengthSection
