import React, { useEffect } from 'react';
import '../assets/scroll.scss';
import { Link } from 'react-scroll';
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
      x: -sectionWidth * 5, // Ajusta el número de imágenes menos 1
      duration:5,
      ease: 'none',
      scrollTrigger: {
        trigger: '.sec-all',
        start: 'top 10%',
        end: `+=${sectionWidth * 5}`, // Dejar espacio para el scroll horizontal
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


      gsap.to('.one', {
        opacity: 1,
        scale: 0.5,
        duration: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: '.one',
          start: 'top 80%', // Comienza la animación cuando el 80% superior de la imagen entra en la vista
          end: 'bottom 20%', // Finaliza la animación cuando el 20% inferior de la imagen sale de la vista
          scrub: true,
          scale: 1.5
        },
      });

    gsap.to('.two', {
      opacity: 1,
      scale: 0.5,
      duration: 4,
      ease: 'none',
      scrollTrigger: {
        trigger: '.two',
        start: 'bottom 80%', // Comienza la animación cuando el 80% superior de la imagen entra en la vista
        end: 'bottom -200%', // Finaliza la animación cuando el 20% inferior de la imagen sale de la vista
        scrub: true,
        scale: 1.5,
      },
    });

    gsap.to('.three', {
      opacity: 1,
      scale: 0.5,
      duration: 4,
      ease: 'none',
      scrollTrigger: {
        trigger: '.three',
        start: 'top -200%', // Comienza la animación cuando el 80% superior de la imagen entra en la vista
        end: 'bottom -420%', // Finaliza la animación cuando el 20% inferior de la imagen sale de la vista
        scrub: true,
        scale: 1.5,
      },
    });

    gsap.to('.four', {
      opacity: 1,
      scale: 0.5,
      duration: 4,
      ease: 'none',
      scrollTrigger: {
        trigger: '.four',
        start: 'bottom -420%', // Comienza la animación cuando el 80% superior de la imagen entra en la vista
        end: 'bottom -600%', // Finaliza la animación cuando el 20% inferior de la imagen sale de la vista
        scrub: true,
        scale: 1.5,
      },
    });
  }, []);


  return(
    <section className='container sec-conta'  >
      <h5 className='mini-title'>WHO WE WORK</h5>
      <br />
      <br />
      <div className='sec-all' >
        <div className='sec-scroll'>
          <Link
            to='section1' // Usa un identificador único para cada sección
            spy={true}
            smooth={true}
            duration={800}
            delay={500}
            className='porpo'
          >
            <div className='toipe'>
              <p className='number'>01</p>
            </div>
            <div className='row'>
              <div className='col-12 col-lg-6 d-flex align-items-center'><h3>UI & UX Design</h3></div>
              <div className='col-12 col-lg-6'><p className='pe'>Our focus is on user-centered design and innovative solutions. Our methodology revolves around gaining profound insights into user perspectives and their requirements. This involves comprehensive research, meticulous data organization, analysis of user behaviors and patterns, meticulous design, and rigorous testing.  </p></div>
            </div>
            <img src="https://res.cloudinary.com/dmmdvpbbz/image/upload/f_auto/v1701081277/Jeff/Captura_de_pantalla_2023-11-17_a_la_s_17.21.50_zcowyl.png" className="img-scroll one" alt="" />
          </Link>
        </div>
        <div className='sec-scroll'>
          <Link
            to='section2' // Usa un identificador único para cada sección
            spy={true}
            smooth={true}
            duration={800}
            delay={500}
            className='porpo'
          >
            <div className='toipe'>
              <p className='number'>02</p>
            </div>
            <div className='row'>
              <div className='col-12 col-lg-6 d-flex align-items-center'><h3>Web development</h3></div>
              <div className='col-12 col-lg-6'><p className='pe'>We turn your design idea into a real product. Our approach consists of research, data organization, design and development. Our goal is to develop an amazing solution that exceeds the expectations of even the most demanding customers.</p></div>
            </div>
            <img src="https://res.cloudinary.com/dmmdvpbbz/image/upload/f_auto/v1701081876/Jeff/image18_nq8cd3.png" className="img-scroll two" alt="" />
          </Link>
        </div>
        <div className='sec-scroll'>
          <Link
            to='section3' // Usa un identificador único para cada sección
            spy={true}
            smooth={true}
            duration={800}
            delay={500}
            className='porpo'
          >
            <div className='toipe'>
              <p className='number'>03</p>
            </div>
            <div className='row'>
              <div className='col-12 col-lg-6 d-flex align-items-center'><h3>E-commrce<br /> Development</h3></div>
              <div className='col-12 col-lg-6'><p className='pe'>Our e-commerce platforms provide more than just aesthetic appeal. They are highly functional, fast, responsive, and stable. Our approach involves understanding the users through research and analyzing behavior and using modern technologies to create custom solutions for Shopify, WooCommerce, and APIs. Our goal is to generate high conversions and revenue.</p></div>
            </div>
            <img src="https://res.cloudinary.com/dmmdvpbbz/image/upload/f_auto/v1701081282/Jeff/image14_ajegec.jpg" className="img-scroll three" alt="" />
          </Link>
        </div>
        <div className='sec-scroll'>
          <Link
            to='section4' // Usa un identificador único para cada sección
            spy={true}
            smooth={true}
            duration={800}
            delay={500}
            className='porpo'
          >
            <div className='toipe'>
              <p className='number'>04</p>
            </div>
            <div className='row'>
              <div className='col-12 col-lg-6 d-flex align-items-center'><h3>Maintenance and<br /> Support</h3></div>
              <div className='col-12 col-lg-6'><p className='pe'>Provide ongoing support to troubleshooting technical issues, monitoring website performance and updating content to ensure that the website's content remains up to date and relevant. Identifying areas that need improvement in order to improve the conversion rates and traffic.</p></div>
            </div>
            <img src="https://res.cloudinary.com/dmmdvpbbz/image/upload/f_auto/v1701081284/Jeff/image19_sac33q.png" className="img-scroll four" alt="" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Scroll;
