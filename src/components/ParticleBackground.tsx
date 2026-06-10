'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // 2. Create Particles
    const particlesCount = 800; // Dense enough for a beautiful cinematic effect
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    // Subtle purple/blue colors for glassmorphism theme
    const colorChoices = [
      new THREE.Color('#D7E2EA'), // white/blueish
      new THREE.Color('#b072ff'), // subtle purple
      new THREE.Color('#61bafb'), // subtle blue
    ];

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Spread particles around
      positions[i] = (Math.random() - 0.5) * 20;     // x
      positions[i + 1] = (Math.random() - 0.5) * 20; // y
      positions[i + 2] = (Math.random() - 0.5) * 20; // z

      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Circular particle texture (creates soft bokeh/stars instead of squares)
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const context = canvas.getContext('2d');
      if (context) {
        context.beginPath();
        context.arc(16, 16, 14, 0, Math.PI * 2);
        context.fillStyle = '#ffffff';
        context.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      map: createCircleTexture(),
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    camera.position.z = 5;

    // Mouse interactivity
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.0005;
      mouseY = (event.clientY - windowHalfY) * 0.0005;
    };
    document.addEventListener('mousemove', onDocumentMouseMove);

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle drift upward and slow rotation
      particlesMesh.rotation.y = elapsedTime * 0.02;
      particlesMesh.rotation.x = elapsedTime * 0.01;
      
      // Parallax mouse effect
      targetX = mouseX * 0.5;
      targetY = mouseY * 0.5;
      camera.position.x += (targetX - camera.position.x) * 0.02;
      camera.position.y += (-targetY - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      
      if (mountRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-0 pointer-events-none bg-[#08080A]"
    />
  );
};

export default ParticleBackground;
