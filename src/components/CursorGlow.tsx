import { useEffect, useRef } from 'react'

const trailCount = 12

function CursorGlow() {
  const coreRef = useRef<HTMLDivElement | null>(null)
  const trailRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const core = coreRef.current
    const trailElements = trailRefs.current

    if (!core) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches

    if (prefersReducedMotion || isTouchDevice) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    const points = Array.from({ length: trailCount }, () => ({
      x: mouseX,
      y: mouseY,
    }))

    let coreX = mouseX
    let coreY = mouseY
    let animationFrame: number
    let time = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const animate = () => {
      time += 0.08

      coreX += (mouseX - coreX) * 0.28
      coreY += (mouseY - coreY) * 0.28

      core.style.transform = `translate3d(${coreX}px, ${coreY}px, 0) translate(-50%, -50%)`

      points.forEach((point, index) => {
        const targetX = index === 0 ? mouseX : points[index - 1].x
        const targetY = index === 0 ? mouseY : points[index - 1].y

        const followSpeed = 0.18 - index * 0.012

        point.x += (targetX - point.x) * followSpeed
        point.y += (targetY - point.y) * followSpeed

        const waveStrength = 3 + index * 0.55
        const waveX = Math.sin(time + index * 0.75) * waveStrength
        const waveY = Math.cos(time + index * 0.65) * waveStrength

        const element = trailElements[index]

        if (element) {
          element.style.transform = `translate3d(${point.x + waveX}px, ${
            point.y + waveY
          }px, 0) translate(-50%, -50%)`
        }
      })

      animationFrame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <>
      {Array.from({ length: trailCount }).map((_, index) => (
        <div
          key={index}
          ref={(element) => {
            trailRefs.current[index] = element
          }}
          className="cursor-wave-glow"
          style={{
            width: `${42 - index * 2}px`,
            height: `${42 - index * 2}px`,
            opacity: `${0.34 - index * 0.018}`,
          }}
          aria-hidden="true"
        />
      ))}

      <div ref={coreRef} className="cursor-core-glow" aria-hidden="true" />
    </>
  )
}

export default CursorGlow