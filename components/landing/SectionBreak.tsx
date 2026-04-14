export function SectionBreak() {
  return (
    <div
      className="w-full"
      style={{
        height: '75px',
        backgroundImage: "url('/spacer.png')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      aria-hidden
    />
  )
}