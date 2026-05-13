function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        background: '#050816',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <h1 style={{ fontSize: '64px' }}>
        HushPay
      </h1>

      <p style={{ maxWidth: '700px', opacity: 0.7 }}>
        Private SMS payments on any phone — no app, no internet.
      </p>
    </section>
  );
}

export default Hero;
