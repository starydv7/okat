export type PartnerAccount = {
  name: string
  mobile: string
  email: string
  city: string
  id: string
  code: string
  createdAt: string
}

export type BusinessLead = {
  name: string
  business: string
  city: string
  phone: string
  note: string
  createdAt: string
}

const ACCOUNT = 'okat-partner'
const LEADS = 'okat-partner-leads'
const REF = 'okat-ref'

export function loadPartner(): PartnerAccount | null {
  try {
    const raw = localStorage.getItem(ACCOUNT)
    return raw ? (JSON.parse(raw) as PartnerAccount) : null
  } catch {
    return null
  }
}

export function savePartner(account: PartnerAccount) {
  localStorage.setItem(ACCOUNT, JSON.stringify(account))
}

export function createPartner(input: { name: string; mobile: string; email: string; city: string }): PartnerAccount {
  const digits = String(Math.floor(10000 + Math.random() * 89999))
  const first = input.name.trim().split(/\s+/)[0]?.replace(/[^a-zA-Z]/g, '') || 'OKAT'
  const account: PartnerAccount = {
    ...input,
    mobile: input.mobile.replace(/\s/g, ''),
    id: `OKAT-P${digits}`,
    code: `${first.toUpperCase()}${digits}`,
    createdAt: new Date().toISOString(),
  }
  savePartner(account)
  return account
}

export function referralPath(code: string) {
  return `/r/${code}`
}

export function loadLeads(): BusinessLead[] {
  try {
    const raw = localStorage.getItem(LEADS)
    return raw ? (JSON.parse(raw) as BusinessLead[]) : []
  } catch {
    return []
  }
}

export function saveLead(lead: Omit<BusinessLead, 'createdAt'>) {
  const next = [...loadLeads(), { ...lead, createdAt: new Date().toISOString() }]
  localStorage.setItem(LEADS, JSON.stringify(next))
}

export function rememberReferral(code: string) {
  sessionStorage.setItem(REF, code)
}

export function currentReferral() {
  return sessionStorage.getItem(REF)
}
