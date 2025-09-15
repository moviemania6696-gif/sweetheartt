import { useEffect } from 'react';
import Layout from '../components/Layout';

export default function Forever() {
  useEffect(() => {
    const createPetal = () => {
      const petal = document.createElement('div');
      petal.innerHTML = '🌹';
      petal.className = 'petal';
      petal.style.left = Math.random() * 100 + 'vw';
      petal.style.fontSize = (Math.random() * 20 + 10) + 'px';
      document.body.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, 10000);
    };

    const interval = setInterval(createPetal, 300);

    return () => clearInterval(interval);
  }, []);

  const playVoice = () => {
    const audio = new Audio('/audio/love-message.mp3');
    audio.play();
  };

  return (
    <Layout>
      <h1 style={{ fontSize: '5rem', color: '#d6336c', textShadow: '0 0 20px rgba(255,105,180,0.5)' }}>
        FOREVER STARTS NOW
      </h1>
      <p style={{ fontSize: '1.5rem', margin: '30px 0', fontStyle: 'italic' }}>
        “This isn’t the end of the website —<br />it’s the beginning of everything I promise you.”
      </p>
      <button onClick={playVoice} className="btn" style={{ background: '#ff6b9d', fontSize: '1.3rem' }}>
        💌 Hear My Heart (Click Me)
      </button>
      <p style={{ marginTop: '30px', fontSize: '1.1rem' }}>
        P.S. I’m waiting for you in the living room with flowers 😉
      </p>
    </Layout>
  );
}
