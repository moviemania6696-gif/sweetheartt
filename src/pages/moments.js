import Layout from '../components/Layout';

export default function Moments() {
  const memories = [
    { img: '/images/memory1.jpg', caption: "That rainy day we danced under the awning." },
    { img: '/images/memory2.jpg', caption: "Midnight snacks and stupid jokes." },
    { img: '/images/memory3.jpg', caption: "When you smiled and my heart forgot to beat." },
  ];

  return (
    <Layout>
      <h1>✨ Moments We Hold</h1>
      <p style={{ margin: '20px 0', fontSize: '1.2rem' }}>
        “Your laugh is my favorite melody — I replay it in my dreams.”
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '40px' }}>
        {memories.map((m, i) => (
          <div key={i} className="floating"
               style={{
                 width: '250px',
                 padding: '20px',
                 background: 'white',
                 borderRadius: '15px',
                 boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                 transition: 'transform 0.3s'
               }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={m.img} alt="memory" style={{ width: '100%', borderRadius: '10px' }} />
            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>{m.caption}</p>
          </div>
        ))}
      </div>
      <a href="/boundaries" className="btn">Next: Our Boundaries 🌿</a>
    </Layout>
  );
}
