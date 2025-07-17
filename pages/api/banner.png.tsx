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
          backgroundColor: '#0f1014',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Segoe UI, sans-serif',
          color: '#ffffff',
        }}
      >
        {/* Logo Horde + Nom Serveur */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          marginBottom: 40,
        }}>
          <img
            src="https://e1.pngegg.com/pngimages/922/827/png-clipart-world-of-warcraft-horde-red-logo-thumbnail.png"
            width={64}
            height={64}
            alt="Horde Logo"
          />
          <div style={{ fontSize: 28, color: '#aaa' }}>
            Gehennas EU – Horde
          </div>
        </div>

        {/* Nom Guilde */}
        <div style={{
          fontSize: 44,
          fontWeight: 'bold',
          marginBottom: 40,
        }}>
          &lt;Raid Tisane et Dodo&gt;
        </div>

        {/* Compte à rebours */}
        <div style={{
          display: 'flex',
          gap: '60px',
          color: '#2dfc95',
          textShadow: '0 0 15px #2dfc95',
        }}>
          {[
            { value: d, label: 'Days' },
            { value: h.toString().padStart(2, '0'), label: 'Hours' },
            { value: m.toString().padStart(2, '0'), label: 'Minutes' },
            { value: s.toString().padStart(2, '0'), label: 'Seconds' }
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 80, fontWeight: 'bold' }}>{value}</div>
              <div style={{ fontSize: 24, marginTop: 10, color: '#ccc' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Date de sortie */}
        <div style={{ marginTop: 40, fontSize: 22, color: '#777' }}>
          Sortie : 22 juillet 2025 à 00:00 (CEST)
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
