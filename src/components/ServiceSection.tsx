import { serviceSection } from '../data/lpContent'
import SectionHeader from './SectionHeader'

function ServiceSection() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeader title={serviceSection.title} lead={serviceSection.lead} />
        <div className="card-grid">
          {serviceSection.items.map((item) => (
            <article key={item.title} className="service-card">
              <div className="service-card-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="service-card-title">{item.title}</h3>
              <p className="service-card-text">{item.summary}</p>
              <ul className="service-card-details">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <p className="service-card-scene">
                <span className="service-card-scene-label">想定シーン</span>
                {item.scene}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
