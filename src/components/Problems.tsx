const problems = [
  { icon: '?', text: '何から学べばいいかわからない' },
  { icon: '↻', text: '独学がなかなか続かない' },
  { icon: '★', text: '仕事や副業に活かせるスキルが身につきたい' },
] as const

function Problems() {
  return (
    <section id="problems" className="section problems">
      <div className="container">
        <h2 className="section-title">こんなお悩みはありませんか？</h2>
        <ul className="problem-list">
          {problems.map((item) => (
            <li key={item.text} className="problem-card">
              <div className="problem-icon" aria-hidden="true">
                {item.icon}
              </div>
              <p className="problem-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Problems
