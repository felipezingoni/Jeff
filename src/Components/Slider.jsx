import React, { useEffect } from 'react';
import '../assets/slider.scss';
import { TweenMax, Power2, Elastic } from 'gsap'; // Importa los módulos TweenMax que estás usando

const Slider = () => {
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
  }, []);

  return (
    <div>
      <div className="sce">
        <h1>Jeff <span>Studio</span></h1>
        <p>We Create <span>DIGITAL PRODUCTS</span></p>
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
