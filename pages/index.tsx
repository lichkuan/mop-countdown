import { useEffect, useState } from 'react'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const release = new Date('2025-07-22T00:00:00+02:00')
      const now = new Date()
      const diff = release.getTime() - now.getTime()

      if (diff <= 0) {
        setTimeLeft("C'est parti ! 🎉")
        clearInterval(interval)
        return
      }

      const d = Math.floor(diff / 86400000)
      const h = Math.floor((diff / 3600000) % 24)
      const m = Math.floor((diff / 60000) % 60)
      const s = Math.floor((diff / 1000) % 60)

      setTimeLeft(`${d}j ${h}h ${m}m ${s}s`)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'Segoe UI, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center',
      backgroundImage: 'url(https://cdn.wallpapersafari.com/88/37/HMCsG4.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <h1 style={{
        fontSize: '48px',
        color: 'gold',
        marginBottom: '20px',
        textShadow: '2px 2px 4px #000'
      }}>
        Mists of Pandaria arrive dans
      </h1>

      <div style={{
        fontSize: '64px',
        color: 'limegreen',
        fontWeight: 'bold',
        textShadow: '2px 2px 10px #0f0'
      }}>
        {timeLeft}
      </div>

      <div style={{
        marginTop: '40px',
        fontSize: '28px',
        color: 'red',
        textShadow: '2px 2px 6px #800'
      }}>
        Guilde <strong style={{ color: 'white' }}>&lt;Raid Tisane et Dodo&gt;</strong> – Gehennas EU Horde
      </div>
    </div>
  )
}
