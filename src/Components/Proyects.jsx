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
          duration:5,
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
      {/* <h5 className='mini-title m-5'>OUR PROYECTS</h5>
      <br />
      <br /> */}
      <section className='secto' style={{ backgroundColor: '#202020' }}>
        <div>
          <div className='d-flex justify-content-start' style={{width:'123px'}}>
            <Atropos className="my-atropos">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAADACAMAAAA+71YtAAAAflBMVEX///8AAADx8fH29vb5+fmbm5vh4eHOzs7X19eKior8/Pyenp4jIyO4uLiXl5fU1NRnZ2dwcHBJSUnGxsa/v78xMTGtra09PT1ycnIUFBTn5+d/f39eXl6kpKQrKysSEhKPj49OTk4cHBxCQkJWVlY3NzcnJyd6enofIB+pqqk12YLnAAAD30lEQVR4nO3a2YKiMBAFUAPK0gqCuCMurbbd//+DA+KKSSCoSXDueZi3oYpqKimCrRYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANNWXozoDJqMtMVhnLjGYACfpRBLrkHTlxarMGB6WsdTnNFql/3zJjFimbfsj8vsnsyXSh48MpcYr0Xa6C0JIYEuOa816kiNyWF64TIvQ86UvWOaIjGXHpEsXhD3JTDy5DXE0IESHpcH2JyQX9FXEDwlZK14jTSsJTjUgvbWhJId1GttSEvnE8qbLcxHIRkVDZLw0+EBN6Fa2IMQTchUqG2r7WfiOmtj2en9TAzLz1TRExjhmIL8tTKezIHc2nvQkztK1cZulMJIc1hoHv/dFIAclO8RFnCchJVa+I829cF+oAel11TXEkZfnIWuIatvuqFiDdJGOJIVnsk6ZyHgm0wVh91gDMouVbtm584717qeybf0FM0oRyCRR3BBH7jmdt0aZe1NKM2QWtg7TfCs65/P9thDtYbyk14AQV5PzL7N36dH3XL/vb1g1IJOxoun5UUzeV4e2kwQrZhFIKPt8haN/TevFfTEfh4wFIa/6WpOGyN2m+rqrmpwFIW8IT4u18aJ7m9xrNi/TXm+5NVD5Oslg3qX3/EBn5gerXCMNv5DEdxm6z10sfW3iN0NmN9Rmh7iaF/5S9a9keIef0hoQosP0TBEX0qzXGGbhHIVln2j4KGSMYqbi53Km49NemygWyl8nmfyHZMXevNMFoUozZFw9GyJHGfUqp2t4097jf6db6jM90wxpOVfZ08yhW74xXCw0mp6pqI39XfJEGP2qC8JRb51dT6/ZseBhlTzhrBFOsigerHINPFPe/dQ1ZmZPPZ9LX5sqLwg57aZnOs4A/OM75vVZ/jLsJBQrQdpfCj/GCDG++TcyCWI3dQgGnBMElp1mr5Mc/fK7qevQjIbIJW8qwkr1xxhBwh1fySb7fVVjeiIjMgVUpMXHGEEm7+ywFj0+xogyauwCPNpPzwwG9QNbTStdPsaIe2EdtuNGLYz3XlaHqdpfbjzLEHphYtLw7FnQ5vkibLX6MXZN02er0KjpmY352l3JvpHDAo1VfrNMu6jBO0RR7cG6gdMzT1R+xxSTvwYctYkZiFch0PdjTH3CK4Rev9x4HaEtY9+cozZhbvntn4TNnp7LVCvE9mOGBaZuaRFm7mfMjSVs/seZ+LP74daY9e1+6/8/Rci0hw8/9vzdudGHbpJcRj+Jg+1yNFruQrcTzT9uZgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV/gHbkirAi4jVPQAAAABJRU5ErkJggg==" className='logo-proyect' alt="" />
            </Atropos>
          </div>
          <video src="https://res.cloudinary.com/dmmdvpbbz/video/upload/v1692725769/Jeff/Grabacio%CC%81n_de_pantalla_2023-08-21_a_la_s_14.37.03_wpw7ha.mov" autoPlay loop muted playsInline width={850} className='video-first'/>
          <h1 className='nike-title'>NIKE</h1>
          <p className='p-nike'>Web Design/ UX&UI / Web Development / Ecommerce</p>
        </div>
      </section>
      <section className='secto' style={{ backgroundColor: '#F0F0F0' }}>
        <div className='' >
          <div className='d-flex justify-content-end' >
            <Atropos className="my-atropos">
              <div className='logo-proyect2'>
                <img src="https://res.cloudinary.com/dpy9qeoty/image/upload/v1700608937/Beton%20web/Logo_op1amg_i1hdwk.svg" alt="" />
              </div>
            </Atropos>
          </div>
          <video src="https://res.cloudinary.com/dmmdvpbbz/video/upload/v1692803215/Grabacio%CC%81n_de_pantalla_2023-08-23_a_la_s_11.58.30_rjn7qc.mov" autoPlay loop muted playsInline width={850} className='video-second' />
          <h1 className='beton-title'>BETON.</h1>
          <p className='beton-sub '>ARQUITECTURA</p>
          <p className='p-beton'>Web Design/ UX&UI / Web Development</p>
        </div>
      </section>
      <section className='secto' style={{ backgroundColor: '#202020' }}>
        <div className='' >
          <div className='d-flex justify-content-start' style={{ width: '123px' }}>
            <Atropos className="my-atropos">
              <div className='logo-proyect2'>
                <img src="https://storage.googleapis.com/zinmaimages/Zinma_full_color_ymgqie_1_1_xgboiv.webp" width={80} height={80} alt="" />
              </div>
            </Atropos>
          </div>
          <video src="https://res.cloudinary.com/dmmdvpbbz/video/upload/v1692725762/Jeff/Grabacio%CC%81n_de_pantalla_2023-08-21_a_la_s_16.19.51_mnsaqn.mov" autoPlay loop muted playsInline width={850} className='video-third' />
          <h1 className='zinma-title'><strong>Zinma</strong> Seeds</h1>
          <p className='p-nike'>Web Design/ UX&UI / Web Development</p>
        </div>
      </section>
      <section className='secto' style={{ backgroundColor: '#F0F0F0' }}>
        <div className='' >
          <div className='d-flex justify-content-end' >
            <Atropos className="my-atropos">
              <div className='logo-proyect2'>
                <img src="https://dcassetcdn.com/design_img/2883586/24106/24106_15872328_2883586_d8ec9462_image.png" width={100} alt="" />
              </div>
            </Atropos>
          </div>
          <video src="https://res.cloudinary.com/dmmdvpbbz/video/upload/v1692725724/Jeff/Grabacio%CC%81n_de_pantalla_2023-08-22_a_la_s_14.04.21_l6i0sn.mov" autoPlay loop muted playsInline width={850} className='video-four' />
          <h1 className='beton-title'>Ski Company</h1>
          <p className='p-beton'>Web Design/ UX&UI / Web Development / Ecommerce</p>
        </div>
      </section>
    </div>
  )
}
export default Proyects;
