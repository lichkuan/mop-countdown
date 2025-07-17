// pages/index.tsx
import { useEffect, useState } from 'react'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  function getTimeRemaining() {
    const release = new Date('2025-07-22T00:00:00+02:00')
    const now = new Date()
    const diff = release.getTime() - now.getTime()

    const total = Math.max(diff, 0)
    const d = Math.floor(total / (1000 * 60 * 60 * 24))
    const h = Math.floor((total / (1000 * 60 * 60)) % 24)
    const m = Math.floor((total / (1000 * 60)) % 60)
    const s = Math.floor((total / 1000) % 60)

    return { d, h, m, s }
  }

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ color: 'red', fontSize: '2.5rem' }}>
        &lt;Raid Tisane et Dodo&gt;
      </h1>
      <h2 style={{ color: '#ccc', marginBottom: '30px' }}>
        Gehennas EU – Horde
      </h2>
      <div style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'lime',
        marginBottom: '20px'
      }}>
        {timeLeft.d}d {timeLeft.h}h {timeLeft.m}m {timeLeft.s}s
      </div>
      <div style={{ color: '#aaa' }}>
        Sortie : 22 juillet 2025 à 00:00 (CEST)
      </div>
    </div>
  )
}
