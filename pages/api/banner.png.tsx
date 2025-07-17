import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function handler() {
  const release = new Date('2025-07-22T00:00:00+02:00')
  const now = new Date()
  const diff = release.getTime() - now.getTime()

  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff / 3600000) % 24)
  const m = Math.floor((diff / 60000) % 60)
  const s = Math.floor((diff / 1000) % 60)

  const countdown = `${d}d ${h}h ${m}m ${s}s`

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: 48,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ color: 'red', fontWeight: 'bold', marginBottom: 20 }}>
          &lt;Raid Tisane et Dodo&gt;
        </div>
        <div style={{ fontSize: 32, color: '#ccc', marginBottom: 20 }}>
          Gehennas EU – Horde
        </div>
        <div style={{ color: '#00ff00', fontSize: 64, fontWeight: 'bold' }}>
          {countdown}
        </div>
        <div style={{ marginTop: 30, fontSize: 24, color: '#888' }}>
          Sortie : 22 juillet 2025 à 00:00
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
