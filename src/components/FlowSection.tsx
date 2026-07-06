import { flowSection } from '../data/lpContent'
import SectionHeader from './SectionHeader'

function FlowSection() {
  return (
    <section id="flow" className="section flow">
      <div className="container">
        <SectionHeader title={flowSection.title} lead={flowSection.lead} />
        <ol className="flow-timeline">
          {flowSection.steps.map((item) => (
            <li key={item.step} className="flow-step">
              <div className="flow-step-marker" aria-hidden="true">
                <span className="flow-step-number">{item.step}</span>
              </div>
              <div className="flow-step-body">
                <h3 className="flow-step-title">{item.title}</h3>
                <p className="flow-step-text">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default FlowSection
