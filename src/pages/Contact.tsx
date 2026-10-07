import { useState, type FormEvent } from 'react'
import { useTitle } from '../useTitle'

export function Contact() {
  useTitle('Contact · Okat')
  const [sent, setSent] = useState(false)

  function submit(event: FormEvent) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="container page narrow">
      <p className="eyebrow dark">Contact</p>
      <h1>Write to the dairy</h1>
      <p className="lede">Anand–Vidyanagar Road, Anand, Gujarat 388001. +91 98250 11024.</p>
      {sent ? (
        <p className="note ok">Noted on this page. Nothing was emailed.</p>
      ) : (
        <form className="form-card" onSubmit={submit}>
          <label>Name<input name="name" required /></label>
          <label>Mobile<input name="phone" required /></label>
          <label>Message<textarea name="message" rows={4} required /></label>
          <button className="btn btn-forest" type="submit">Send</button>
        </form>
      )}
    </div>
  )
}
