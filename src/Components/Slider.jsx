import React, { useEffect, useRef, useState } from 'react';
import '../assets/slider.scss';
import Spline from '@splinetool/react-spline';
import TextRing from './TextRing';
import { TweenMax, Power2, Elastic } from 'gsap'; // Importa los módulos TweenMax que estás usando

const Slider = () => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [titleText, setTitleText] = useState('');
  useEffect(() => {
    // Scroll to top animation
    const scrollToTop = () => {
      const scrollToTopBtn = document.querySelector('.scrolltop');
      scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    };

    // Scroll top button visibility
    const handleScroll = () => {
      const scrollToTopBtn = document.querySelector('.scrolltop');
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 20) {
          TweenMax.to(scrollToTopBtn, 0.3, { opacity: 1 });
        } else {
          TweenMax.to(scrollToTopBtn, 0.3, { opacity: 0 });
        }
      });
    };

    // Parallax effect for scroll top button
    class HoverButton {
      constructor(el) {
        this.el = el;
        this.hover = false;
        this.calculatePosition();
        this.attachEventsListener();
      }

      attachEventsListener() {
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
        window.addEventListener('resize', () => this.calculatePosition());
      }

      calculatePosition() {
        TweenMax.set(this.el, {
          x: 0,
          y: 0,
          scale: 1
        });
        const box = this.el.getBoundingClientRect();
        this.x = box.left + box.width * 0.5;
        this.y = box.top + box.height * 0.5;
        this.width = box.width;
        this.height = box.height;
      }

      onMouseMove(e) {
        const hoverArea = this.hover ? 1.5 : 1.5;
        const x = e.clientX - this.x;
        const y = e.clientY - this.y;
        const distance = Math.sqrt(x * x + y * y);
        if (distance < this.width * hoverArea) {
          this.hover = true;
          this.onHover(e.clientX, e.clientY);
        }

        if (!this.hover) {
          this.onLeave();
          this.hover = false;
        }
      }

      onHover(x, y) {
        TweenMax.to(this.el, 0.4, {
          x: (x - this.x) * 0.4,
          y: (y - this.y) * 0.4,
          scale: 1.15,
          ease: Power2.easeOut
        });
        this.el.style.zIndex = 10;
      }

      onLeave() {
        TweenMax.to(this.el, 0.7, {
          x: 0,
          y: 0,
          scale: 1,
          ease: Elastic.easeOut.config(1.2, 0.4)
        });
        this.el.style.zIndex = 1;
      }
    }

    const scrollToTopBtn = document.querySelector('.scrolltop');
    scrollToTop();
    handleScroll();
    new HoverButton(scrollToTopBtn);


    const titleTextFull = "We create digital products";
    const animationDuration = 2;
    const stepDuration = animationDuration / titleTextFull.length;
    const initialDelay = 3; // Retraso inicial en segundos
    let currentStep = 0;

    const writeTitle = () => {
      if (currentStep <= titleTextFull.length) {
        setTitleText(titleTextFull.slice(0, currentStep));
        currentStep++;
        setAnimationProgress(currentStep / titleTextFull.length);
        setTimeout(writeTitle, stepDuration * 1000);
      }
    };

    setTimeout(writeTitle, initialDelay * 1000);

  }, []);

  const downloadPortfolio = () => {
    // Ruta al archivo PDF en tu proyecto, ajusta la ruta según tu estructura de archivos.
    const pdfFilePath = '../public/pdf/Zeff Studio_portfolio y presupuesto_compri +alta.pdf';

    // Abre el PDF en una nueva pestaña (_blank).
    window.open(pdfFilePath, '_blank');
  };
  return (
    <div>
      <h1 className='comingsoon'>COMING SOON</h1>
      <div className="sce">
        <h1>
          <span>{titleText}</span> <br />
        </h1>
        <button className='button-4' role="button" onClick={downloadPortfolio}>Download Portfolio</button>
        {/* <h1><span>We are <br /> digital </span> <br /> Creators</h1> */}
        {/* <h1>Zeff <span>Studio</span></h1> */}
        {/* <Spline scene="https://prod.spline.design/zzl5GTX6HKr9sQx4/scene.splinecode" /> */}
        <TextRing/>
        <p className='text-rep'>Zeff Studio</p>
        {/* <p>We Create <span>DIGITAL PRODUCTS</span></p> */}
      </div>
      <div className='arrow'>
        <a href="#top">
          <div className="scrolltop">
            <img src="https://img.freepik.com/iconos-gratis/navegue-flechas_318-48520.jpg?t=st=1692392382~exp=1692392982~hmac=24a13896322636c86004db1b6d9ccff6532871fd2ccd404ab4568ff86c59adf7" width='30px' height='30px' alt="Scroll To Top" />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Slider;
