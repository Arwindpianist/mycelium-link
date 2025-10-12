import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'MyceliumLink - The Decentralized Data Layer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #100f05 0%, #1a1810 50%, #100f05 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Background network pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.3,
          }}
        >
          {/* Network nodes */}
          <div style={{ position: 'absolute', top: '20%', left: '15%', width: '6px', height: '6px', borderRadius: '50%', background: '#b1a235' }} />
          <div style={{ position: 'absolute', top: '25%', left: '35%', width: '6px', height: '6px', borderRadius: '50%', background: '#b1a235' }} />
          <div style={{ position: 'absolute', top: '30%', left: '55%', width: '6px', height: '6px', borderRadius: '50%', background: '#b1a235' }} />
          <div style={{ position: 'absolute', top: '20%', left: '75%', width: '6px', height: '6px', borderRadius: '50%', background: '#b1a235' }} />
          
          <div style={{ position: 'absolute', top: '50%', left: '20%', width: '6px', height: '6px', borderRadius: '50%', background: '#236c71' }} />
          <div style={{ position: 'absolute', top: '55%', left: '40%', width: '6px', height: '6px', borderRadius: '50%', background: '#236c71' }} />
          <div style={{ position: 'absolute', top: '60%', left: '60%', width: '6px', height: '6px', borderRadius: '50%', background: '#236c71' }} />
          <div style={{ position: 'absolute', top: '50%', left: '80%', width: '6px', height: '6px', borderRadius: '50%', background: '#236c71' }} />
          
          <div style={{ position: 'absolute', top: '80%', left: '25%', width: '6px', height: '6px', borderRadius: '50%', background: '#2f3f98' }} />
          <div style={{ position: 'absolute', top: '85%', left: '45%', width: '6px', height: '6px', borderRadius: '50%', background: '#2f3f98' }} />
          <div style={{ position: 'absolute', top: '90%', left: '65%', width: '6px', height: '6px', borderRadius: '50%', background: '#2f3f98' }} />
          <div style={{ position: 'absolute', top: '80%', left: '85%', width: '6px', height: '6px', borderRadius: '50%', background: '#2f3f98' }} />
        </div>

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #b1a235 0%, #c4b43b 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '30px',
            }}
          >
            <div
              style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#100f05',
              }}
            >
              M
            </div>
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #b1a235 0%, #c4b43b 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            MyceliumLink
          </div>
        </div>

        {/* Main tagline */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: '600',
            color: '#f8f5e8',
            textAlign: 'center',
            marginBottom: '20px',
            lineHeight: '1.2',
          }}
        >
          The Decentralized Data Layer
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: '#c4b896',
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '800px',
            lineHeight: '1.4',
          }}
        >
          Connecting datacenters, enterprises, and individuals into one intelligent, secure, and autonomous data mesh
        </div>

        {/* Key features */}
        <div
          style={{
            display: 'flex',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#b1a235',
              }}
            />
            <span style={{ fontSize: '18px', color: '#f8f5e8' }}>Decentralized Storage</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#236c71',
              }}
            />
            <span style={{ fontSize: '18px', color: '#f8f5e8' }}>Blockchain Integrity</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#2f3f98',
              }}
            />
            <span style={{ fontSize: '18px', color: '#f8f5e8' }}>Global Network</span>
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            fontSize: '20px',
            color: '#b1a235',
            fontWeight: '500',
          }}
        >
          myceliumlink.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
