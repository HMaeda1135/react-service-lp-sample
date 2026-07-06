import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from 'react'
import { contactModal } from '../data/lpContent'

type ContactModalProps = {
  isOpen: boolean
  onClose: () => void
}

type FormData = {
  name: string
  email: string
  service: string
  message: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  service: '',
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
              {contactModal.title}
            </h2>
            <p id="modal-description" className="modal-description">
              {contactModal.description}
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
            <p className="modal-success-title">{contactModal.successTitle}</p>
            <p className="modal-success-text">{contactModal.successText}</p>
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
              <label htmlFor="contact-service">ご希望プラン（任意）</label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={(e) => updateField('service', e.target.value)}
              >
                {contactModal.serviceOptions.map((option) => (
                  <option key={option.value || 'empty'} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">お困りごと・ご希望</label>
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

            <p className="form-note">{contactModal.formNote}</p>

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
