type Plan = {
  name: string
  price: string
  features: readonly string[]
  featured?: boolean
}

const plans: Plan[] = [
  {
    name: 'ライトプラン',
    price: '3,000',
    features: ['基礎講座の視聴', '学習チェックリスト', 'メールサポート'],
  },
  {
    name: 'スタンダードプラン',
    price: '6,000',
    features: ['基礎講座の視聴', '実践課題', '月1回の相談サポート'],
    featured: true,
  },
  {
    name: 'サポートプラン',
    price: '10,000',
    features: ['実践課題', '月2回の相談サポート', '学習計画の作成サポート'],
  },
]

function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <h2 className="section-title">料金プラン</h2>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`pricing-card${plan.featured ? ' pricing-card-featured' : ''}`}
            >
              {plan.featured && <span className="pricing-badge">おすすめ</span>}
              <h3 className="pricing-name">{plan.name}</h3>
              <p className="pricing-price">
                {plan.price}
                <span>円 / 月</span>
              </p>
              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
