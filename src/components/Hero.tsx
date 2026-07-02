function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 id="hero-title" className="hero-title">
            はじめての学び直しを、
            <br />
            やさしくサポート。
          </h1>
          <p className="hero-description">
            仕事や副業に役立つスキルを、初心者でも少しずつ学べるオンライン講座サービスです。
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              サービス内容を見る
            </a>
            <a href="#pricing" className="btn btn-secondary">
              料金を見る
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card visual-card-main">
            <p className="visual-card-title">学習ステップ</p>
            <ol className="step-list">
              <li className="step-item done">
                <span className="step-number">1</span>
                <span>基礎を理解する</span>
              </li>
              <li className="step-item">
                <span className="step-number">2</span>
                <span>実践課題に挑戦</span>
              </li>
              <li className="step-item">
                <span className="step-number">3</span>
                <span>学習計画を見直す</span>
              </li>
            </ol>
          </div>

          <div className="visual-card visual-card-sub">
            <p className="visual-card-title">講座カード</p>
            <div className="course-mini">
              <div className="course-mini-bar">
                <div className="course-mini-bar-fill" style={{ width: '65%' }} />
              </div>
              <span className="course-mini-label">Web制作の基礎 — 65% 完了</span>
            </div>
          </div>

          <div className="visual-card visual-card-checklist">
            <p className="visual-card-title">チェックリスト</p>
            <ul className="checklist">
              <li className="checklist-item checked">
                <span className="checklist-icon">✓</span>
                <span>第1章を視聴</span>
              </li>
              <li className="checklist-item checked">
                <span className="checklist-icon">✓</span>
                <span>課題を提出</span>
              </li>
              <li className="checklist-item">
                <span className="checklist-icon" />
                <span>復習メモを作成</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
