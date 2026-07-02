import { useState } from 'react'

type FaqItem = {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: '初心者でも利用できますか？',
    answer:
      'はい。基礎から順番に学べる内容のため、はじめての方でも利用しやすい構成です。',
  },
  {
    question: 'スマホでも見られますか？',
    answer: 'はい。スマホでも見やすいレイアウトを想定しています。',
  },
  {
    question: '途中でプラン変更できますか？',
    answer: 'はい。学習状況に合わせて、プランを見直せる想定です。',
  },
  {
    question: 'このページは実在するサービスですか？',
    answer:
      'いいえ。ポートフォリオ掲載用に作成した、架空サービスのLPサンプルです。',
  },
]

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <div className="faq-list">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`
        const buttonId = `faq-button-${index}`

        return (
          <div key={item.question} className={`faq-item${isOpen ? ' open' : ''}`}>
            <button
              type="button"
              id={buttonId}
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
            >
              <span className="faq-question-text">Q. {item.question}</span>
              <span className="faq-icon" aria-hidden="true" />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="faq-answer"
              hidden={!isOpen}
            >
              A. {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Faq() {
  return (
    <section id="faq" className="section faq">
      <div className="container">
        <h2 className="section-title">よくある質問</h2>
        <FaqAccordion />
      </div>
    </section>
  )
}

export default Faq
