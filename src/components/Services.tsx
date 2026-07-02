const services = [
  {
    icon: '📚',
    title: '初心者向けカリキュラム',
    text: '基礎から順番に学べるように、学習ステップを整理しています。',
  },
  {
    icon: '⏱',
    title: '自分のペースで学習',
    text: '動画や資料を見ながら、空いた時間に少しずつ学べます。',
  },
  {
    icon: '💬',
    title: '学習の相談サポート',
    text: 'つまずいたところや進め方を、相談しながら学習できます。',
  },
] as const

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">まなびスタートでできること</h2>
        <div className="card-grid">
          {services.map((item) => (
            <article key={item.title} className="service-card">
              <div className="service-card-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="service-card-title">{item.title}</h3>
              <p className="service-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
