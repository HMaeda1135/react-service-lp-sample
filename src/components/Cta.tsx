type CtaProps = {
  onOpenContact: () => void
}

function Cta({ onOpenContact }: CtaProps) {
  return (
    <section id="contact" className="cta" aria-labelledby="cta-title">
      <div className="container cta-inner">
        <h2 id="cta-title" className="cta-title">
          まずは学び方を
          <br />
          相談してみませんか？
        </h2>
        <p className="cta-description">
          自分に合った学び方やプランが知りたい方は、お気軽にご相談ください。
        </p>
        <button type="button" className="btn btn-cta" onClick={onOpenContact}>
          お問い合わせへ
        </button>
      </div>
    </section>
  )
}

export default Cta
