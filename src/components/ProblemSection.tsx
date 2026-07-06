import { problemSection } from '../data/lpContent'
import SectionHeader from './SectionHeader'

function ProblemSection() {
  return (
    <section id="problems" className="section problems">
      <div className="container">
        <SectionHeader title={problemSection.title} lead={problemSection.lead} />
        <ul className="problem-list">
          {problemSection.items.map((item) => (
            <li key={item.text} className="problem-card">
              <div className="problem-icon" aria-hidden="true">
                {item.icon}
              </div>
              <p className="problem-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProblemSection
