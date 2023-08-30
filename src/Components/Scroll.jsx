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
          >
            <div className='toipe'>
              <p className='number'>01</p>
            </div>
            <div className='row'>
              <div className='col-6 d-flex align-items-center'><h3>UI & UX Design</h3></div>
              <div className='col-6'><p className='pe'>Our focus is on user-centered design and innovative solutions. Our methodology revolves around gaining profound insights into user perspectives and their requirements. This involves comprehensive research, meticulous data organization, analysis of user behaviors and patterns, meticulous design, and rigorous testing.  </p></div>
            </div>
            <img src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" className="img-scroll" alt="" />
          </Link>
        </div>
        <div className='sec-scroll'>
          <Link
            to='section2' // Usa un identificador único para cada sección
            spy={true}
            smooth={true}
            duration={800}
            delay={500}
          >
            <div className='toipe'>
              <p className='number'>02</p>
            </div>
            <div className='row'>
              <div className='col-6 d-flex align-items-center'><h3>Web development</h3></div>
              <div className='col-6'><p className='pe'>We turn your design idea into a real product. Our approach consists of research, data organization, design and development. Our goal is to develop an amazing solution that exceeds the expectations of even the most demanding customers.</p></div>
            </div>
            <img src="https://images.unsplash.com/photo-1506104489822-562ca25152fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" className="img-scroll" alt="" />
          </Link>
        </div>
        <div className='sec-scroll'>
          <Link
            to='section3' // Usa un identificador único para cada sección
            spy={true}
            smooth={true}
            duration={800}
            delay={500}
          >
            <div className='toipe'>
              <p className='number'>03</p>
            </div>
            <div className='row'>
              <div className='col-6 d-flex align-items-center'><h3>E-commrce<br /> Development</h3></div>
              <div className='col-6'><p className='pe'>Our e-commerce platforms provide more than just aesthetic appeal. They are highly functional, fast, responsive, and stable. Our approach involves understanding the users through research and analyzing behavior and using modern technologies to create custom solutions for Shopify, WooCommerce, and APIs. Our goal is to generate high conversions and revenue.</p></div>
            </div>
            <img src="https://images.unsplash.com/photo-1541890289-b86df5bafd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1745&q=80" className="img-scroll" alt="" />
          </Link>
        </div>
        <div className='sec-scroll'>
          <Link
            to='section4' // Usa un identificador único para cada sección
            spy={true}
            smooth={true}
            duration={800}
            delay={500}
          >
            <div className='toipe'>
              <p className='number'>04</p>
            </div>
            <div className='row'>
              <div className='col-6 d-flex align-items-center'><h3>Maintenance and<br /> Support</h3></div>
              <div className='col-6'><p className='pe'>Provide ongoing support to troubleshooting technical issues, monitoring website performance and updating content to ensure that the website's content remains up to date and relevant. Identifying areas that need improvement in order to improve the conversion rates and traffic.</p></div>
            </div>
            <img src="https://images.unsplash.com/photo-1541890289-b86df5bafd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1745&q=80" className="img-scroll" alt="" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Scroll;
