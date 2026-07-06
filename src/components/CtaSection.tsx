import { ctaSection } from '../data/lpContent'

type CtaSectionProps = {
  onOpenContact: () => void
}

function CtaSection({ onOpenContact }: CtaSectionProps) {
  return (
    <section id="contact" className="cta" aria-labelledby="cta-title">
      <div className="container cta-inner">
        <h2 id="cta-title" className="cta-title">
          {ctaSection.titleLine1}
          <br />
          {ctaSection.titleLine2}
        </h2>
        <p className="cta-description">{ctaSection.description}</p>
        <div className="cta-actions">
          <button type="button" className="btn btn-cta" onClick={onOpenContact}>
            {ctaSection.primaryLabel}
          </button>
          <a href={ctaSection.secondaryCta.href} className="btn btn-cta-secondary">
            {ctaSection.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
