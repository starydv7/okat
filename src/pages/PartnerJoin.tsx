import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createPartner, loadPartner } from '../partner/account'
import { useTitle } from '../useTitle'
import '../partner.css'

export function PartnerJoin() {
  useTitle('Become an Okat Partner')
  const existing = loadPartner()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', mobile: '', email: '', city: '' })

  function set(key: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    const mobile = form.mobile.replace(/\s/g, '')
    if (form.name.trim().length < 2) return setError('Add the name for the partner account.')
    if (!/^\d{10}$/.test(mobile)) return setError('Enter a 10-digit mobile number.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError('Enter an email address.')
    if (form.city.trim().length < 2) return setError('Add a city.')
    createPartner({ ...form, mobile })
    navigate('/partner/dashboard')
  }

  return (
    <div className="partner">
      <section className="pn-form">
        <p className="pn-eyebrow">Join free</p>
        <h1>Become an Okat Partner</h1>
        <p className="pn-sub">No fee, no inventory. Your Partner ID and referral link are created on this device.</p>
        {existing ? (
          <div className="pn-panel">
            <p>This browser already has partner {existing.id}.</p>
            <Link to="/partner/dashboard" className="btn btn-forest">Open dashboard</Link>
          </div>
        ) : (
          <form onSubmit={submit}>
            <label>Full name<input value={form.name} onChange={(event) => set('name', event.target.value)} autoComplete="name" /></label>
            <label>Mobile<input value={form.mobile} onChange={(event) => set('mobile', event.target.value)} inputMode="numeric" autoComplete="tel" /></label>
            <label>Email<input value={form.email} onChange={(event) => set('email', event.target.value)} type="email" autoComplete="email" /></label>
            <label>City<input value={form.city} onChange={(event) => set('city', event.target.value)} autoComplete="address-level2" /></label>
            {error && <p className="pn-error">{error}</p>}
            <button className="btn btn-forest" type="submit">Create partner account</button>
            <p className="pn-note">There is no SMS code on this site. The account is saved in this browser so you can use the dashboard immediately.</p>
          </form>
        )}
      </section>
    </div>
  )
}
