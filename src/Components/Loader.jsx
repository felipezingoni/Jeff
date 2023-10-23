import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import '../assets/loader.scss';
import soundLoader from '../assets/loader.mp3';

const Loader = () => {
  const letters = 'AFGHIJKLMNÑOPQRSTUVWXYZ';
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();


    const interval = setInterval(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < letters.length) {
        setCurrentIndex(nextIndex);
      } else {
        clearInterval(interval);

        // Animación de desvanecimiento hacia arriba
        tl.to('.loader-overlay', { y: '-100%', duration: 0.8, ease: 'power2.in' });
      }

    }, 100);

    return () => {
      clearInterval(interval);
      tl.kill();
    };
  }, [currentIndex]);

  useEffect(() => {
    // Reproducir el sonido cuando la página esté completamente cargada
    window.onload = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };
  }, []);

  return (
    <div className="loader-overlay">
      <div className="loader">
        <h1 className='loaderh1' >
          {letters[currentIndex]}eff
        </h1>
      </div>
      <audio ref={audioRef} src={soundLoader} type="audio/mpeg" autoPlay />
    </div>
  );
};

export default Loader;
