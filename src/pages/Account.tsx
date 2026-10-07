import { useState, type FormEvent } from 'react'
import { loadProfile, saveProfile, type Profile } from '../profile'
import { useTitle } from '../useTitle'

export function Account() {
  useTitle('Your details · Okat')
  const [profile, setProfile] = useState<Profile>(() => loadProfile())
  const [saved, setSaved] = useState(false)

  function update(key: keyof Profile, value: string) {
    setSaved(false)
    setProfile((current) => ({ ...current, [key]: value }))
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    saveProfile(profile)
    setSaved(true)
  }

  return (
    <div className="container page narrow">
      <p className="eyebrow dark">Account</p>
      <h1>Details for delivery</h1>
      <p className="lede">Saved on this device and filled in at checkout. No password, no inbox to confirm.</p>
      <form className="form-card" onSubmit={onSubmit}>
        <label>
          Full name
          <input value={profile.name} onChange={(event) => update('name', event.target.value)} autoComplete="name" />
        </label>
        <label>
          Mobile
          <input value={profile.phone} onChange={(event) => update('phone', event.target.value)} autoComplete="tel" />
        </label>
        <label>
          Address
          <input value={profile.address} onChange={(event) => update('address', event.target.value)} autoComplete="street-address" />
        </label>
        <label>
          City
          <input value={profile.city} onChange={(event) => update('city', event.target.value)} autoComplete="address-level2" />
        </label>
        <label>
          PIN code
          <input value={profile.pin} onChange={(event) => update('pin', event.target.value)} autoComplete="postal-code" />
        </label>
        <button className="btn btn-forest" type="submit">
          Save details
        </button>
        {saved && <p className="note ok">Saved on this browser.</p>}
      </form>
    </div>
  )
}
