const features = [
  {
    number: '1',
    title: 'わかりやすい構成',
    text: '悩みからサービス、料金、FAQまで、段階的に情報を整理しています。',
  },
  {
    number: '2',
    title: 'スマホでも見やすい',
    text: '画面サイズに合わせてレイアウトが変わる、レスポンシブ設計です。',
  },
  {
    number: '3',
    title: '問い合わせしやすい導線',
    text: '気になった方がすぐ相談できるよう、CTAを下部に配置しています。',
  },
] as const

function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <h2 className="section-title">選ばれる理由</h2>
        <div className="features-grid">
          {features.map((item) => (
            <div key={item.number} className="feature-item">
              <span className="feature-number">{item.number}</span>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-text">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="features-note">
          LP制作サンプルとして、情報整理と導線設計を意識した構成です。
        </p>
      </div>
    </section>
  )
}

export default Features
