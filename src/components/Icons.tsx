import type { SVGProps } from 'react'

type IconName =
  | 'search'
  | 'user'
  | 'bag'
  | 'menu'
  | 'close'
  | 'leaf'
  | 'check'
  | 'farm'
  | 'cow'
  | 'churn'
  | 'drop'
  | 'package'
  | 'truck'
  | 'star'
  | 'play'
  | 'arrow'
  | 'quote'
  | 'shield'
  | 'refresh'
  | 'minus'
  | 'plus'

const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const props: SVGProps<SVGSVGElement> = { width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': true, ...common }
  switch (name) {
    case 'search':
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16.5 20 20.5" />
        </svg>
      )
    case 'user':
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5 19.2c1.4-3 3.8-4.4 7-4.4s5.6 1.4 7 4.4" />
        </svg>
      )
    case 'bag':
      return (
        <svg {...props}>
          <path d="M6.5 8.5h11l-.8 10.2a2 2 0 0 1-2 1.8H9.3a2 2 0 0 1-2-1.8L6.5 8.5Z" />
          <path d="M9 8.5V7.2A3 3 0 0 1 12 4a3 3 0 0 1 3 3.2v1.3" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...props}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      )
    case 'close':
      return (
        <svg {...props}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      )
    case 'leaf':
      return (
        <svg {...props}>
          <path d="M12 20c0-8 6-12 10-13-1 8-6 13-10 13Z" />
          <path d="M12 20c0-8-6-12-10-13 1 8 6 13 10 13Z" />
          <path d="M12 20V10" />
        </svg>
      )
    case 'check':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m8.2 12.2 2.4 2.4 5.2-5.3" />
        </svg>
      )
    case 'farm':
      return (
        <svg {...props}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M6 10.5V20h12v-9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      )
    case 'cow':
      return (
        <svg {...props}>
          <path d="M6 10c0-2 1.4-3 3-3h.5L8 5M18 10c0-2-1.4-3-3-3h-.5L16 5" />
          <path d="M5 14c.4-3 2.4-5 7-5s6.6 2 7 5c.3 2.2-.2 4.2-2 5.2-1.2-1.4-2.8-2-5-2s-3.8.6-5 2c-1.8-1-2.3-3-2-5.2Z" />
          <path d="M9 14.2h.1M15 14.2h.1" />
        </svg>
      )
    case 'churn':
      return (
        <svg {...props}>
          <path d="M8 10h8l-.6 8.2a2 2 0 0 1-2 1.8h-2.8a2 2 0 0 1-2-1.8L8 10Z" />
          <path d="M9 10c.2-2.2 1.4-4 3-4s2.8 1.8 3 4" />
          <path d="M12 6V3M10 4.2 12 6l2-1.8" />
        </svg>
      )
    case 'drop':
      return (
        <svg {...props}>
          <path d="M12 3.5S6.5 10 6.5 14a5.5 5.5 0 0 0 11 0c0-4-5.5-10.5-5.5-10.5Z" />
        </svg>
      )
    case 'package':
      return (
        <svg {...props}>
          <path d="M3.5 8 12 4l8.5 4L12 12 3.5 8Z" />
          <path d="M3.5 8V16L12 20l8.5-4V8" />
          <path d="M12 12v8" />
        </svg>
      )
    case 'truck':
      return (
        <svg {...props}>
          <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
          <circle cx="7" cy="17.5" r="1.5" />
          <circle cx="17.5" cy="17.5" r="1.5" />
        </svg>
      )
    case 'star':
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="m12 3.6 2.1 4.6 5 .6-3.7 3.4.9 5-4.3-2.4L7.7 17l.9-5L4.9 8.8l5-.6L12 3.6Z" />
        </svg>
      )
    case 'play':
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="M9 7.2v9.6l8-4.8-8-4.8Z" />
        </svg>
      )
    case 'arrow':
      return (
        <svg {...props}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )
    case 'quote':
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="M10 8H6.5C6 11 7 14 10 16l-1.2 2C5.2 16.4 3.5 13 3.5 9.5V8H10V8Zm10 0h-3.5c-.5 3 .5 6 3.5 8l-1.2 2c-3.6-1.6-5.3-5-5.3-8.5V8H20Z" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 3.5 19 6.5v5.2c0 4.2-2.8 6.8-7 8.8-4.2-2-7-4.6-7-8.8V6.5L12 3.5Z" />
          <path d="m9 12 2 2 4-4.2" />
        </svg>
      )
    case 'refresh':
      return (
        <svg {...props}>
          <path d="M19 12a7 7 0 1 1-2-4.9" />
          <path d="M19 5v4h-4" />
        </svg>
      )
    case 'minus':
      return (
        <svg {...props}>
          <path d="M6 12h12" />
        </svg>
      )
    case 'plus':
      return (
        <svg {...props}>
          <path d="M12 6v12M6 12h12" />
        </svg>
      )
  }
}

export function Logo() {
  return (
    <span className="logo">
      <span className="logo-mark">
        <Icon name="leaf" size={20} />
      </span>
      <span className="logo-type">
        <span className="logo-word">Okat</span>
        <span className="logo-tag">pure by nature</span>
      </span>
    </span>
  )
}
