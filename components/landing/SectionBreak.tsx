export function SectionBreak() {
  return (
    <div
      className="w-full"
      style={{
        height: '75px',
        background: `
          linear-gradient(to right, black, transparent 20%, transparent 80%, black),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 12px,
            rgba(255,255,255,0.15) 12px,
            rgba(255,255,255,0.15) 14px
          )
        `,
        backgroundColor: 'black',
      }}
      aria-hidden
    />
  )
}