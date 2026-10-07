import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { loadLeads, loadPartner, referralPath, saveLead } from '../partner/account'
import { inrPaise, partnerProgram } from '../partner/program'
import { useTitle } from '../useTitle'
import '../partner.css'

export function PartnerDashboard() {
  useTitle('Partner dashboard · Okat')
  const partner = loadPartner()
  const [copied, setCopied] = useState(false)
  const [leads, setLeads] = useState(() => loadLeads())
  const [sent, setSent] = useState(false)

  if (!partner) {
    return (
      <div className="partner">
        <section className="pn-form">
          <h1>No partner account on this device</h1>
          <p className="pn-sub">Create one to get a referral link. Earnings stay at zero until an eligible sale is approved.</p>
          <Link to="/partner/join" className="btn btn-forest">Become an Okat Partner</Link>
        </section>
      </div>
    )
  }

  const path = referralPath(partner.code)
  const url = `${window.location.origin}${path}`
  const whatsapp = `https://wa.me/?text=${encodeURIComponent(`Okat ghee, from our farms. Order here: ${url}`)}`

  function copy() {
    void navigator.clipboard.writeText(url).then(() => setCopied(true))
  }

  function lead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    saveLead({
      name: String(data.get('name') || ''),
      business: String(data.get('business') || ''),
      city: String(data.get('city') || ''),
      phone: String(data.get('phone') || ''),
      note: String(data.get('note') || ''),
    })
    setLeads(loadLeads())
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <div className="partner">
      <section className="pn-dash">
        <p className="pn-eyebrow">Dashboard</p>
        <h1>{partner.name}</h1>
        <p className="pn-sub">{partner.id} · {partner.city} · Level: Starter, because eligible kg this month is 0.</p>
        <div className="pn-dash-grid">
          {[
            ['Total earnings', 0],
            ['Pending', 0],
            ['Approved', 0],
            ['Paid', 0],
          ].map(([label, value]) => (
            <article key={String(label)} className="pn-stat">
              <span>{label}</span>
              <strong>{inrPaise(Number(value))}</strong>
            </article>
          ))}
        </div>
        <div className="pn-dash-grid">
          {['Orders', 'Customers', 'Kg sold', 'Sales value'].map((label) => (
            <article key={label} className="pn-stat">
              <span>{label}</span>
              <strong>{label === 'Sales value' ? inrPaise(0) : '0'}</strong>
            </article>
          ))}
        </div>
        <div className="pn-panel">
          <h2>Your referral link</h2>
          <div className="pn-link">
            <code>{url}</code>
            <button className="btn btn-forest" type="button" onClick={copy}>{copied ? 'Copied' : 'Copy link'}</button>
            <a className="btn btn-line" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <p className="pn-note">Code {partner.code}. Commission is {partnerProgram.products.map((item) => `${Math.round(item.commissionRate * 100)}% on ${item.name}`).join(' and ')}. Cancelled orders never become payable.</p>
        </div>
        <div className="pn-miles" style={{ marginTop: 18 }}>
          {partnerProgram.milestones.map((item) => (
            <article key={item.kg} className="pn-mile">
              <div className="pn-medal">0</div>
              <h3>{item.title}</h3>
              <p>0 / {item.kg} kg</p>
            </article>
          ))}
        </div>
        <form id="lead" className="pn-panel" style={{ marginTop: 18 }} onSubmit={lead}>
          <h2>Business lead</h2>
          <label>Contact name<input name="name" required /></label>
          <label>Business<input name="business" required /></label>
          <label>City<input name="city" required /></label>
          <label>Phone<input name="phone" required /></label>
          <label>Note<textarea name="note" rows={3} /></label>
          <button className="btn btn-forest" type="submit">Save lead</button>
          {sent && <p className="pn-note">Saved on this device. Okat has not been emailed automatically.</p>}
          {leads.length > 0 && <p className="pn-note">{leads.length} lead{leads.length === 1 ? '' : 's'} saved here.</p>}
        </form>
        <div className="pn-panel">
          <h2>Payout history</h2>
          <p>No payouts yet. Approved commission will appear here after a sale clears the return window.</p>
        </div>
      </section>
    </div>
  )
}
