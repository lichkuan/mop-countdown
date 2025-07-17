// pages/api/banner.png.tsx
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default function handler() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
        fontSize: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        🎉 Mists of Pandaria arrive !
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
