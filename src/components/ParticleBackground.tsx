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
    // Circular particle texture with glowing effect
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64; // Increased size for better glow resolution
      canvas.height = 64;
      const context = canvas.getContext('2d');
      if (context) {
        // Create radial gradient for a soft glow center
        const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        context.fillStyle = gradient;
        context.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createCircleTexture();
    const particleMeshes: { mesh: THREE.Points; speed: number }[] = [];

    // 3 depth layers for parallax effect
    const layers = [
      { count: 500, size: 0.15, speed: 0.015, opacity: 0.3, zOffset: -15 }, // Distant, slow
      { count: 300, size: 0.25, speed: 0.03, opacity: 0.5, zOffset: -5 },   // Middle
      { count: 100, size: 0.4, speed: 0.06, opacity: 0.8, zOffset: 2 },     // Foreground, fast
    ];

    // Subtle purple/blue colors for glassmorphism theme
    const colorChoices = [
      new THREE.Color('#D7E2EA'), // white/blueish
      new THREE.Color('#b072ff'), // subtle purple
      new THREE.Color('#61bafb'), // subtle blue
    ];

    layers.forEach((layer) => {
      const positions = new Float32Array(layer.count * 3);
      const colors = new Float32Array(layer.count * 3);

      for (let i = 0; i < layer.count * 3; i += 3) {
        // Spread particles around
        positions[i] = (Math.random() - 0.5) * 30;     // x
        positions[i + 1] = (Math.random() - 0.5) * 30; // y
        positions[i + 2] = (Math.random() - 0.5) * 10 + layer.zOffset; // z with depth offset

        const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: layer.size,
        vertexColors: true,
        map: particleTexture,
        transparent: true,
        opacity: layer.opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const mesh = new THREE.Points(geometry, material);
      scene.add(mesh);
      particleMeshes.push({ mesh, speed: layer.speed });
    });

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
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Calculate scroll velocity
      const currentScrollY = window.scrollY;
      const rawVelocity = currentScrollY - lastScrollY;
      scrollVelocity += (rawVelocity - scrollVelocity) * 0.1; // Smooth it out
      lastScrollY = currentScrollY;

      // Gentle drift upward and slow rotation, plus scroll velocity effect
      // Parallax rotation across different layers
      particleMeshes.forEach(({ mesh, speed }) => {
        mesh.rotation.y = elapsedTime * speed + scrollVelocity * (speed * 0.1);
        mesh.rotation.x = elapsedTime * (speed * 0.5) + scrollVelocity * (speed * 0.05);
      });
      
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
      particleMeshes.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div 
        ref={mountRef} 
        className="fixed inset-0 z-0 pointer-events-none bg-[#08080A]"
      />
      {/* Subtle overlay blur to enhance glowing aesthetic and modern look */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent to-[#08080A]/80" />
    </>
  );
};

export default ParticleBackground;
