interface FogOverlayProps {
  opacity?: number
  intensity?: 'light' | 'medium' | 'strong'
  position?: 'center' | 'top' | 'bottom'
}

export default function FogOverlay({
  opacity = 10,
  intensity = 'medium',
  position = 'center',
}: FogOverlayProps) {
  const opacityClass = {
    light: 'opacity-5',
    medium: 'opacity-10',
    strong: 'opacity-15',
  }[intensity]

  const positionClass = {
    center: 'from-center',
    top: 'from-top',
    bottom: 'from-bottom',
  }[position]

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${opacityClass}`}
      style={{
        background: 'radial-gradient(ellipse at center, rgba(188, 153, 91, 0.12) 0%, transparent 70%)',
        filter: 'blur(10px)',
      }}
      aria-hidden="true"
    />
  )
}
