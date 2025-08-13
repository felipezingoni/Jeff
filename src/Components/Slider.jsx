import React, { useEffect, useRef, useState } from 'react';
import '../assets/slider.scss';
import Spline from '@splinetool/react-spline';
import TextRing from './TextRing';
import { TweenMax, Power2, Elastic, gsap } from 'gsap'; // Importa los módulos TweenMax que estás usando
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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


    const video = document.querySelector(".background-video");
    const overlay = document.querySelector(".video-overlay");

    gsap.to(video, {
      scale: 2,
      scrollTrigger: {
        trigger: ".overlay-trigger-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to(overlay, {
      opacity: 1,
      scrollTrigger: {
        trigger: ".overlay-trigger-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  const downloadPortfolio = () => {
    // Ruta al archivo PDF en tu proyecto, ajusta la ruta según tu estructura de archivos.
    const pdfFilePath = 'https://storage.googleapis.com/zeffstudio/Zeff%20Studio_portfolio%20y%20presupuesto_compri%20alta.pdf';

    // Abre el PDF en una nueva pestaña (_blank).
    window.open(pdfFilePath, '_blank');
  };
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source
          src="https://res.cloudinary.com/dmmdvpbbz/video/upload/v1753716138/6077634_Ring_3d_Vj_Experimental_By_Juanjo_McLittle_Artlist_HD_s1k4kv.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-overlay" />
      <div className="sce">
        <h1>
          <span>{titleText}</span> <br />
        </h1>
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
