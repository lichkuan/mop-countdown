import { ImageResponse } from '@vercel/og'

export const config = { runtime: 'edge' }

export default async function handler() {
  const release = new Date('2025-07-22T00:00:00+02:00')
  const now = new Date()
  const diff = release.getTime() - now.getTime()
  if (diff <= 0) {
    return new ImageResponse('🎉 It’s out!', { width: 1200, height: 630 })
  }
  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff / 3600000) % 24)
  const m = Math.floor((diff / 60000) % 60)
  const s = Math.floor((diff / 1000) % 60)
  const countdown = `${d}d ${h}h ${m}m ${s}s`

  return new ImageResponse(
    (
      <div style={{
        width: '1200px',
        height: '630px',
        backgroundImage: 'url(https://images.ctfassets.net/bltw2k2bgo9iy7o4ogkce/7ajC0V0L8SMg9BHvWObLFK/fec60b9de1b8be1a593a81f1b1c9a928/mop-classic-bg.jpg)',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'Segoe UI, sans-serif',
        textShadow: '2px 2px 4px black'
      }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/3/3d/World_of_Warcraft_Mists_of_Pandaria_logo.png"
          width={300}
          alt="MoP Logo"
          style={{ marginBottom: 30 }}
        />
        <h1 style={{ fontSize: 60, color: 'gold', marginBottom: 20 }}>
          Mists of Pandaria Classic
        </h1>
        <div style={{
          fontSize: 50,
          fontWeight: 'bold',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '20px 40px',
          borderRadius: '20px',
        }}>
          {countdown}
        </div>
        <div style={{ marginTop: 20, fontSize: 28, color: '#ccc' }}>
          Sortie : 22 juillet 2025 à 00:00 (CEST)
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  )
}
