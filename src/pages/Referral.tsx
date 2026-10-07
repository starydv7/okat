import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { rememberReferral } from '../partner/account'

export function Referral() {
  const { code } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (code) rememberReferral(code)
    navigate('/shop', { replace: true })
  }, [code, navigate])
  return null
}
