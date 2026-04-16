export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '24px',
        background: '#f3f3f3',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: '24px',
          padding: '32px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '8px 14px',
            borderRadius: '999px',
            background: '#1d4ed8',
            color: '#fff',
            fontWeight: 700,
            fontSize: '12px',
            marginBottom: '18px',
          }}
        >
          Online
        </div>

        <h1
          style={{
            margin: '0 0 12px 0',
            fontSize: '40px',
            lineHeight: 1.05,
          }}
        >
          Projeto funcionando na Vercel
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: '16px',
            lineHeight: 1.6,
            color: 'rgba(0,0,0,0.65)',
          }}
        >
          Se você está vendo esta página, a rota principal foi publicada corretamente.
        </p>

        <button
          type="button"
          style={{
            marginTop: '24px',
            height: '48px',
            padding: '0 22px',
            border: 'none',
            borderRadius: '14px',
            background: '#1d4ed8',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Continuar
        </button>
      </div>
    </main>
  )
}
