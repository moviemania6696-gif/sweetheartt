import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Layout from '../components/Layout';

export default function Home() {
  const mountRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const hearts = [];
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xff6b9d, transparent: true, opacity: 0.8 });

    for (let i = 0; i < 60; i++) {
      const heart = new THREE.Mesh(geometry, material);
      heart.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
      heart.scale.setScalar(0.5 + Math.random() * 1.5);
      scene.add(heart);
      hearts.push(heart);
    }

    camera.position.z = 20;

    const animate = () => {
      requestAnimationFrame(animate);
      hearts.forEach(h => {
        h.rotation.x += 0.01;
        h.rotation.y += 0.01;
        h.position.y += 0.02;
        if (h.position.y > 15) h.position.y = -15;
      });
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <Layout>
      <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}></div>
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', textShadow: '2px 2px 8px rgba(0,0,0,0.2)' }}>
          In a universe of chaos,<br />my soul chose yours.
        </h1>
        <p style={{ fontSize: '1.3rem', margin: '20px 0' }}>
          Not by chance — but by destiny written in stardust.
        </p>
        <a href="/moments" className="btn">Enter Our Story ❤️</a>
      </div>
    </Layout>
  );
}
