import { useState } from 'react';
import Layout from '../components/Layout';

export default function Boundaries() {
  const [selected, setSelected] = useState('');

  const boundaries = [
    { title: "Space", text: "I love you enough to let you breathe — because love isn’t a cage, it’s wings." },
    { title: "Trust", text: "I trust you not because you never fail, but because I choose to believe in us — every day." },
    { title: "Growth", text: "Let’s grow separately so we can bloom together — roots deep, branches wide." },
  ];

  return (
    <Layout>
      <h1>🌿 Boundaries of Love</h1>
      <p style={{ margin: '20px 0', fontSize: '1.2rem' }}>
        “Our boundaries aren’t walls — they’re the frame that holds our masterpiece.”
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
        {boundaries.map((b, i) => (
          <div key={i}
               onClick={() => setSelected(selected === b.title ? '' : b.title)}
               style={{
                 padding: '20px',
                 background: selected === b.title ? '#ffe0e6' : 'white',
                 borderRadius: '15px',
                 cursor: 'pointer',
                 width: '250px',
                 boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                 transition: 'all 0.3s'
               }}
          >
            <h3>{b.title}</h3>
            {selected === b.title && <p style={{ marginTop: '10px', fontStyle: 'italic' }}>{b.text}</p>}
          </div>
        ))}
      </div>
      <a href="/future" className="btn" style={{ marginTop: '40px' }}>Next: Our Future 🌠</a>
    </Layout>
  );
}
