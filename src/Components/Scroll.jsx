import React, { useEffect } from 'react';
import '../assets/scroll.scss';
import  gsap from 'gsap';
import  ScrollTrigger from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  useEffect(() => {
    const sections = document.querySelector('.sec-scroll');
    const sectionWidth = sections.offsetWidth;
    const tut = sections.length
    console.log(tut)

    gsap.to('.sec-scroll', {
      x: -sectionWidth * 4, // Ajusta el número de imágenes menos 1
      ease: 'none',
      scrollTrigger: {
        trigger: '.sec-all',
        start: 'top 10%',
        end: `+=${sectionWidth * 4}`, // Dejar espacio para el scroll horizontal
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    gsap.to('.sec-all', {
      y: 0, // Mantener en la parte superior durante el scroll horizontal
      ease: 'none',
      scrollTrigger: {
        trigger: '.sec-all',
        start: `top 10%`, // Comienza cuando se completa el scroll horizontal
        end: 'bottom 10%', // Llega al final cuando la sección está en la parte superior
        scrub: 1,
      },


    });

    // gsap.to(".img-scroll" , {
    //   opacity: 1,
    //   scale: 0.4,
    //   duration: 4,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.img-scroll',
    //     opacity: 1,
    //     scale: 1.5, // Llega al final cuando la sección está en la parte superior
    //     scrub: 1,
    //   },

    // })


      gsap.to('.img-scroll', {
        opacity: 1,
        scale: 0.4,
        duration: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: '.img-scroll',
          start: 'top 80%', // Comienza la animación cuando el 80% superior de la imagen entra en la vista
          end: 'bottom 20%', // Finaliza la animación cuando el 20% inferior de la imagen sale de la vista
          scrub: true,
          scale: 1.5,
        },
      });


  }, []);


  return(
    <section className='container sec-conta'  >
      <h5 className='mini-title'>WHO WE WORK</h5>
      <div className='sec-all' >
        <div className='sec-scroll'>
          <h3>Design</h3>
          <img src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" className="img-scroll" alt="" />
        </div>
        <div className='sec-scroll'>
          <h3>Development</h3>
          <img src="https://images.unsplash.com/photo-1506104489822-562ca25152fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" className="img-scroll" alt="" />
        </div>
        <div className='sec-scroll'>
          <h3>Lorem Ipsum</h3>
          <img src="https://images.unsplash.com/photo-1541890289-b86df5bafd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1745&q=80" className="img-scroll" alt="" />
        </div>
        <div className='sec-scroll'>
          <h3>Lorem Ipsum</h3>
          <img src="https://images.unsplash.com/photo-1541890289-b86df5bafd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1745&q=80" className="img-scroll" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Scroll;
