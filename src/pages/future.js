import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Layout from '../components/Layout';

export default function Future() {
  const mountRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const stars = [];
    const promises = [
      "Trip to Santorini",
      "Midnight Pancakes",
      "Grow Old Together",
      "Dance in the Kitchen",
      "Adopt a Golden Retriever"
    ];

    const geometry = new THREE.CircleGeometry(0.1, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 100; i++) {
      const star = new THREE.Mesh(geometry, material);
      star.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
      if (i < promises.length) star.userData.promise = promises[i];
      scene.add(star);
      stars.push(star);
    }

    camera.position.z = 30;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(stars);
      if (intersects.length > 0 && intersects[0].object.userData.promise) {
        alert("🌟 I Promise You: " + intersects[0].object.userData.promise);
      }
    };

    window.addEventListener('click', onMouseClick);

    const animate = () => {
      requestAnimationFrame(animate);
      stars.forEach(s => {
        s.rotation.x += 0.01;
        s.rotation.y += 0.01;
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
      window.removeEventListener('click', onMouseClick);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <Layout>
      <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}></div>
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <h1>🌠 Future Written in Stars</h1>
        <p style={{ margin: '20px 0', fontSize: '1.2rem' }}>
          “Let’s write a story so beautiful, even time will pause to read it.”
        </p>
        <p>Click any star to reveal a promise I made just for you.</p>
        <a href="/forever" className="btn" style={{ marginTop: '40px' }}>Final Page: Forever Starts Now 💞</a>
      </div>
    </Layout>
  );
}
