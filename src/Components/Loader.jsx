import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import '../assets/loader.scss';

const Loader = () => {
  const letters = 'AFGHIJKLMNÑOPQRSTUVWXYZ';
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="loader-overlay">
      <div className="loader">
        <h1 className='loaderh1' >
          {letters[currentIndex]}eff
        </h1>
      </div>
    </div>
  );
};

export default Loader;
