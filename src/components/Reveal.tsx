import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-fade'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: RevealVariant
  once?: boolean
}

const variantClasses: Record<RevealVariant, string> = {
  'fade-up': 'reveal-fade-up',
  'fade-left': 'reveal-fade-left',
  'fade-right': 'reveal-fade-right',
  'scale-fade': 'reveal-scale-fade',
}

function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'fade-up',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={`reveal ${variantClasses[variant]} ${
        isVisible ? 'is-visible' : ''
      } ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

export default Reveal