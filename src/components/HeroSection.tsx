import { heroContent } from '../data/lpContent'

function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="hero-eyebrow">{heroContent.eyebrow}</p>
          <h1 id="hero-title" className="hero-title">
            {heroContent.titleLine1}
            <br />
            {heroContent.titleLine2}
          </h1>
          <p className="hero-description">{heroContent.description}</p>
          <div className="hero-actions">
            <a href={heroContent.primaryCta.href} className="btn btn-primary">
              {heroContent.primaryCta.label}
            </a>
            <a href={heroContent.secondaryCta.href} className="btn btn-secondary">
              {heroContent.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card visual-card-main">
            <p className="visual-card-title">{heroContent.panelTitle}</p>
            <div className="tag-list">
              {heroContent.panelTags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <ol className="step-list">
              {heroContent.panelSteps.map((item, index) => (
                <li
                  key={item.label}
                  className={`step-item${item.done ? ' done' : ''}`}
                >
                  <span className="step-number">{index + 1}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ol>
            <p className="panel-note">{heroContent.panelNote}</p>
          </div>

          <div className="visual-card visual-card-sub">
            <p className="visual-card-title">{heroContent.subPanelTitle}</p>
            <div className="progress-block">
              <div className="progress-row">
                <span className="progress-label">{heroContent.progressLabel}</span>
                <span className="progress-value">{heroContent.progressValue}</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '65%' }} />
              </div>
              <p className="progress-caption">{heroContent.progressCaption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
