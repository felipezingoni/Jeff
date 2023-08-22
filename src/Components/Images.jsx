import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import '../assets/images.scss'; // Asegúrate de tener la ruta correcta al archivo de estilos;

gsap.registerPlugin(ScrollTrigger);

const selectedImages = [
  {
    url: 'https://res.cloudinary.com/ddlmgs04n/image/upload/v1673620221/Zinma2.0/DSC06257_1_d0c22j_ie6t7u.webp',
  },
  {
    url: 'https://res.cloudinary.com/ddlmgs04n/image/upload/v1673619922/Zinma2.0/Frame_206_ux6sbv_m5peqi.webp',
  },
  {
    url: 'https://res.cloudinary.com/ddlmgs04n/image/upload/v1673619765/Zinma2.0/DJI_0874_1_hflxst_jrk8wf.webp',
  },
  {
    url: 'https://res.cloudinary.com/ddlmgs04n/image/upload/v1673619888/Zinma2.0/Frame_205_tamood_aw5sxu.webp',
  },
  {
    url: 'https://res.cloudinary.com/ddlmgs04n/image/upload/v1684183776/living_q4mbdn.jpg',
  },
  {
    url: 'https://res.cloudinary.com/ddlmgs04n/image/upload/v1689264661/Beton/CAM002_vrtvln.jpg',
  },
];

const randomImages = [...Array(4)].map(() => {
  return [...Array(Math.floor(Math.random() * 2) + 3)].map(() => {
    const randomImageIndex = Math.floor(Math.random() * selectedImages.length);
    return selectedImages[randomImageIndex];
  });
});

const Images = () => {


  // const showDemo = () => {
  //   document.body.style.overflow = 'auto';
  //   document.scrollingElement.scrollTo(0, 0);

  //   const sections = document.querySelectorAll('section');
  //   sections.forEach((section, index) => {
  //     const wrapper = section.querySelectorAll('.wrapper');
  //     const [x, xEnd] = index % 2 ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1] : [wrapper.scrollWidth * -1, 0];

  //     gsap.fromTo(wrapper, { x }, {
  //       x: xEnd,
  //       scrollTrigger: {
  //         trigger: section,
  //         scrub: 0.5
  //       }
  //     });
  //   });
  // };

  const showDemo = () => {
    document.body.style.overflow = 'auto';
    document.scrollingElement.scrollTo(0, 0);

    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      const wrapper = section.querySelector('.wrapper');

      if (wrapper) {  // Verifica si 'wrapper' no es null
        const [x, xEnd] = index % 2
          ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
          : [wrapper.scrollWidth * -1, 0];

        gsap.fromTo(
          wrapper,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 0.5,
            },
          }
        );
      }
    });
  };

  useEffect(() => {
    showDemo();
  }, []);


  return (
    <div className="demo-wrapper mt-5">

      <section className="demo-text">
        <div className="wrapper text">WeCreateDigitalProducts</div>
      </section>

      {randomImages.map((imageArray, i) => (
        <section key={i} className="demo-gallery">
          <ul className="wrapper">
            {imageArray.map((image, j) => (
              <li key={j} className='lie'>
                <img className="img-2" src={image.url} alt="" />
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="demo-text">
        <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      </section>
    </div>
  );
};

export default Images;
