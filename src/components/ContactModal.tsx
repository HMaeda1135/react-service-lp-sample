import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from 'react'

type ContactModalProps = {
  isOpen: boolean
  onClose: () => void
}

type FormData = {
  name: string
  email: string
  plan: string
  message: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  plan: '',
  message: '',
}

function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const nameInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false)
      setFormData(initialFormData)
      return
    }

    document.body.style.overflow = 'hidden'
    nameInputRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-header">
          <div>
            <h2 id="modal-title" className="modal-title">
              お問い合わせ
            </h2>
            <p id="modal-description" className="modal-description">
              学び方やプランについて、お気軽にご相談ください。
            </p>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="閉じる"
          />
        </div>

        {isSubmitted ? (
          <div className="modal-success">
            <p className="modal-success-title">送信完了（デモ）</p>
            <p className="modal-success-text">
              お問い合わせありがとうございます。
              <br />
              こちらはデモ用フォームのため、実際の送信は行われません。
            </p>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              閉じる
            </button>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">お名前</label>
              <input
                ref={nameInputRef}
                id="contact-name"
                type="text"
                name="name"
                required
                placeholder="山田 太郎"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">メールアドレス</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-plan">ご希望プラン（任意）</label>
              <select
                id="contact-plan"
                name="plan"
                value={formData.plan}
                onChange={(e) => updateField('plan', e.target.value)}
              >
                <option value="">選択してください</option>
                <option value="light">ライトプラン</option>
                <option value="standard">スタンダードプラン</option>
                <option value="support">サポートプラン</option>
                <option value="undecided">未定・相談したい</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">ご相談内容</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="学びたい内容や、現在の状況などをお書きください"
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
              />
            </div>

            <p className="form-note">
              ※ デモ用フォームです。送信してもデータは送信されません。
            </p>

            <div className="modal-actions">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                キャンセル
              </button>
              <button type="submit" className="btn btn-primary">
                送信する
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactModal
