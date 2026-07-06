import { worksSection } from '../data/lpContent'
import SectionHeader from './SectionHeader'

function WorksSection() {
  return (
    <section id="works" className="section works">
      <div className="container">
        <SectionHeader title={worksSection.title} lead={worksSection.lead} />
        <div className="works-grid">
          {worksSection.items.map((item) => (
            <article key={item.title} className="work-card">
              <span className="work-label">{item.label}</span>
              <h3 className="work-title">{item.title}</h3>
              <p className="work-summary">{item.summary}</p>
              <div className="work-tech">
                {item.tech.map((tech) => (
                  <span key={tech} className="work-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="work-highlight">
                <span className="work-highlight-label">見どころ</span>
                {item.highlight}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorksSection
