import React, { useEffect } from 'react';
import Atropos from 'atropos/react';
import '../assets/proyects.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const applyAnimations = () => {
  const sections = document.querySelectorAll(".secto");

  sections.forEach(section => {
    gsap.to(section, {
      y: 0,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        pin: true,
        scrub: true,
        pinSpacing: false
      },
    });
  });
};

const Proyects = () => {
  const videoElements = ['.video-first', '.video-second', '.video-third', '.video-four'];

  useEffect(() => {
    applyAnimations();


    videoElements.forEach((selector) => {
      gsap.set(selector, { scale: 0.5 });

      gsap.to(selector, {
        opacity: 1,
        scale: 1,
        ease: 'back',
        scrollTrigger: {
          trigger: selector,
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: true,
          opacity: 0,
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 0.5 + progress * 0.5;
            gsap.set(selector, { scale: scale });
          },
        },
      });
    });

  }, []);

  return(
    <div className='proyects' >
      <h5 className='mini-title m-5'>OUR PROYECTS</h5>
      <section className='secto' style={{ backgroundColor: '#202020' }}>
        <div>
          <div className='d-flex justify-content-start' style={{width:'123px'}}>
            <Atropos className="my-atropos">
              <img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1692642548/Nike/nike_pfroe4.svg" className='logo-proyect' alt="" />
            </Atropos>
          </div>
          <video src="https://res.cloudinary.com/dmmdvpbbz/video/upload/v1692725769/Jeff/Grabacio%CC%81n_de_pantalla_2023-08-21_a_la_s_14.37.03_wpw7ha.mov" autoPlay loop muted playsInline width={850} className='video-first'/>
          <h1 className='nike-title'>NIKE</h1>
        </div>
      </section>
      <section className='secto' style={{ backgroundColor: '#F0F0F0' }}>
        <div className='' >
          <div className='d-flex justify-content-end' >
            <Atropos className="my-atropos">
              <div className='logo-proyect2'>
                <img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1682381877/Beton/Logo_op1amg.svg" width={65} alt="" />
              </div>
            </Atropos>
          </div>
          <video src="https://res.cloudinary.com/dmmdvpbbz/video/upload/v1692725814/Jeff/Grabacio%CC%81n_de_pantalla_2023-08-21_a_la_s_15.45.34_rozh7n.mov" autoPlay loop muted playsInline width={850} className='video-second' />
          <h1 className='beton-title'>BETON.</h1>
          <p className='beton-sub '>ARQUITECTURA</p>
        </div>
      </section>
      <section className='secto' style={{ backgroundColor: '#202020' }}>
        <div className='' >
          <div className='d-flex justify-content-start' style={{ width: '123px' }}>
            <Atropos className="my-atropos">
              <div className='logo-proyect2'>
                <img src="https://res.cloudinary.com/ddlmgs04n/image/upload/v1674590356/Zinma2.0/Zinma_full_color_ymgqie_1_1_xgboiv.webp" width={80} height={80} alt="" />
              </div>
            </Atropos>
          </div>
          <video src="https://res.cloudinary.com/dmmdvpbbz/video/upload/v1692725762/Jeff/Grabacio%CC%81n_de_pantalla_2023-08-21_a_la_s_16.19.51_mnsaqn.mov" autoPlay loop muted playsInline width={850} className='video-third' />
          <h1 className='zinma-title'><strong>Zinma</strong> Seeds</h1>
        </div>
      </section>
      <section className='secto' style={{ backgroundColor: '#F0F0F0' }}>
        <div className='' >
          <div className='d-flex justify-content-end' >
            <Atropos className="my-atropos">
              <div className='logo-proyect2'>
                <img src="https://skiingkids.com/wp-content/uploads/2021/11/cropped-Untitled-design-3-400x169.png" width={65} alt="" />
              </div>
            </Atropos>
          </div>
          <video src="https://res.cloudinary.com/dmmdvpbbz/video/upload/v1692725724/Jeff/Grabacio%CC%81n_de_pantalla_2023-08-22_a_la_s_14.04.21_l6i0sn.mov" autoPlay loop muted playsInline width={850} className='video-four' />
          <h1 className='beton-title'>Ski Company</h1>
        </div>
      </section>
    </div>
  )
}
export default Proyects;
