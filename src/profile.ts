export type Profile = {
  name: string
  phone: string
  address: string
  city: string
  pin: string
}

const KEY = 'okat-profile'

export const emptyProfile: Profile = {
  name: '',
  phone: '',
  address: '',
  city: '',
  pin: '',
}

export function loadProfile(): Profile {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return emptyProfile
    return { ...emptyProfile, ...(JSON.parse(raw) as Partial<Profile>) }
  } catch {
    return emptyProfile
  }
}

export function saveProfile(profile: Profile) {
  localStorage.setItem(KEY, JSON.stringify(profile))
}
