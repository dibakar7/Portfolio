import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';

const ProfileBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create a collection of stars
    const stars = [];
    const numStars = 1000;

    for (let i = 0; i < numStars; i++) {
      const geometry = new THREE.CircleGeometry(0.1, 32);
      const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
      const star = new THREE.Points(geometry, material);

      // Random initial position
      star.position.set(
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(10)
      );

      stars.push(star);
      scene.add(star);
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Slowly move stars in a small random radius
      const elapsedTime = Date.now() * 0.001;
      stars.forEach(star => {
        star.position.x = THREE.MathUtils.randFloatSpread(0.2) * Math.sin(elapsedTime + star.position.x);
        star.position.y = THREE.MathUtils.randFloatSpread(0.2) * Math.cos(elapsedTime + star.position.y);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="fixed top-0 left-0 w-full h-full -z-10" ref={mountRef}></div>;
};

export default ProfileBackground;
