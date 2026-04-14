import * as React from 'react'

export const Q_PATH =
  'M123.85 21.5822H129V25H115.8C109.314 25 104.132 19.857 104.132 13.4445C104.132 7.03194 109.314 1.88891 115.8 1.88891C122.286 1.88891 127.501 7.03194 127.501 13.4445C127.501 16.6344 126.034 19.4989 123.85 21.5822ZM107.815 13.4445C107.815 17.9039 111.4 21.5822 115.8 21.5822C120.2 21.5822 123.785 17.9039 123.785 13.4445C123.785 8.95244 120.2 5.30674 115.8 5.30674C111.4 5.30674 107.815 8.95244 107.815 13.4445Z'

export const I_PATH = 'M102.863 24.6745H99.5055V1.88891H102.863V24.6745Z'

type LogoProps = {
  className?: string
  width?: number
  height?: number
  color?: string
  fill?: string
  stroke?: string
  strokeWidth?: number
}

export const LogoIQ: React.FC<LogoProps> = ({
  className,
  width = 40,
  height = 25,
  color,
  fill,
  stroke = '#000000',
  strokeWidth = 1.6,
}) => {
  const accentFill = fill ?? color ?? '#b7f601'

  const sharedProps = {
    fill: accentFill,
    stroke,
    strokeWidth,
    strokeLinejoin: 'round' as const,
    strokeLinecap: 'round' as const,
    paintOrder: 'stroke fill' as const,
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="97 -1.5 34 28"
      fill="none"
      overflow="visible"
      className={className}
    >
      <path d={Q_PATH} {...sharedProps} />
      <path d={I_PATH} {...sharedProps} />
    </svg>
  )
}

/**
 * Same geometry and paint as `LogoIQ` defaults (lime fill, black stroke, 1.6),
 * serialized for `rel="icon"` data URLs.
 */
export function buildLogoIqFaviconDataUrl(
  fill = '#b7f601',
  stroke = '#000000',
  strokeWidth = 1.6,
): string {
  const pathAttrs = `fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linejoin="round" stroke-linecap="round" paint-order="stroke fill"`
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="97 -1.5 34 28" fill="none" overflow="visible"><path d="${Q_PATH}" ${pathAttrs}/><path d="${I_PATH}" ${pathAttrs}/></svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}
