'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import CinematicLayer from './CinematicLayer';
import styles from './VideoIntro.module.css';

export default function VideoIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    // GSAP Intro Animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Ensure container is faded in
      gsap.fromTo(containerRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 2, ease: 'power2.inOut' }
      );

      // Stagger text reveals
      tl.to(`.${styles.tagline}`, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 })
        .to(`.${styles.firstName}`, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
        .to(`.${styles.lastName}`, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
        .to(`.${styles.role}`, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
        .to(`.${styles.scrollIndicator}`, { opacity: 1, duration: 1, ease: 'power2.out' }, '-=0.5');

    }, containerRef);

    // Auto-hide sound hint
    const hintTimer = setTimeout(() => setShowHint(false), 6000);

    return () => {
      ctx.revert();
      clearTimeout(hintTimer);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current && bgVideoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        bgVideoRef.current.pause();
      } else {
        videoRef.current.play();
        bgVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      setShowHint(false); // hide hint immediately when interacted
    }
  };

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className={styles.heroSection} ref={containerRef}>
      
      {/* Background Ambient Video Layer */}
      <video
        ref={bgVideoRef}
        className={styles.backgroundVideo}
        src="/Video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Main Foreground Video Layer */}
      <video
        ref={videoRef}
        className={styles.foregroundVideo}
        src="/Video.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      />

      {/* Dark Cinematic Gradient Overlay */}
      <div className={styles.overlay} />

      {/* Three.js Cinematic Particle Layer */}
      <CinematicLayer />

      {/* Portfolio Content Overlay */}
      <div className={styles.content}>
        <div className={styles.tagline}>Creative Developer</div>
        <div className={styles.nameContainer}>
          <h1 className={styles.firstName}>JANE</h1>
          <h1 className={styles.lastName}>DOE</h1>
        </div>
        <p className={styles.role}>
          Crafting immersive digital experiences through code, motion, and design.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator} onClick={handleScrollClick}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLineContainer}>
          <div className={styles.scrollLine} />
        </div>
      </div>

      {/* Video Controls */}
      {showHint && <div className={styles.soundHint}>Tap for sound</div>}
      <div className={styles.controls}>
        <button onClick={toggleMute} className={styles.controlButton} aria-label="Toggle sound">
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <button onClick={togglePlay} className={styles.controlButton} aria-label="Toggle play">
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>

    </section>
  );
}
