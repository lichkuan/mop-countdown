import { ImageResponse } from '@vercel/og'

export const config = { runtime: 'edge' }

export default async function handler() {
  const release = new Date('2025-07-22T00:00:00+02:00')
  const now = new Date()
  const diff = release.getTime() - now.getTime()

  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff / 3600000) % 24)
  const m = Math.floor((diff / 60000) % 60)
  const s = Math.floor((diff / 1000) % 60)

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Segoe UI, sans-serif',
          color: '#ff0000',
          padding: 40,
        }}
      >
        <div style={{
          fontSize: 48,
          fontWeight: 'bold',
          marginBottom: 30,
          color: '#ff2d2d',
          textShadow: '0 0 8px #ff0000',
        }}>
          &lt;Raid Tisane et Dodo&gt;
        </div>

        <div style={{
          fontSize: 32,
          marginBottom: 30,
          color: '#ff4d4d',
        }}>
          Gehennas EU – Horde
        </div>

        <div style={{
          display: 'flex',
          gap: '60px',
          textShadow: '0 0 15px #00ff88',
        }}>
          {[
            { value: d, label: 'Days' },
            { value: h.toString().padStart(2, '0'), label: 'Hours' },
            { value: m.toString().padStart(2, '0'), label: 'Minutes' },
            { value: s.toString().padStart(2, '0'), label: 'Seconds' }
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 80,
                fontWeight: 'bold',
                color: '#00ff88',
              }}>{value}</div>
              <div style={{ fontSize: 24, color: '#ffffff' }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 40,
          fontSize: 24,
          color: '#888',
        }}>
          Sortie prévue : 22 juillet 2025 à 00:00 (CEST)
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
