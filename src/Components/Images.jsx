import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import '../assets/images.scss'; // Asegúrate de tener la ruta correcta al archivo de estilos;

gsap.registerPlugin(ScrollTrigger);

const selectedImages = [
  {
    url: 'https://res.cloudinary.com/dmmdvpbbz/image/upload/v1701081277/Jeff/Captura_de_pantalla_2023-11-17_a_la_s_17.21.50_zcowyl.png',
  },
  {
    url: 'https://res.cloudinary.com/dmmdvpbbz/image/upload/v1701081282/Jeff/image14_ajegec.jpg',
  },
  {
    url: 'https://res.cloudinary.com/dmmdvpbbz/image/upload/v1701189231/Jeff/iPad_Pro_12.9__-_SEGUNDO_PASO_shsrj5.png',
  },
  {
    url: 'https://res.cloudinary.com/dmmdvpbbz/image/upload/v1701081284/Jeff/image19_sac33q.png',
  },
  {
    url: 'https://res.cloudinary.com/dmmdvpbbz/image/upload/v1701081876/Jeff/image18_nq8cd3.png',
  },
  // {
  //   url: 'https://res.cloudinary.com/dmmdvpbbz/image/upload/v1701189231/Jeff/iPad_Pro_12.9__-_PRIMER_PASO_cidvx2.png',
  // },
  // {
  //   url: 'https://res.cloudinary.com/dmmdvpbbz/image/upload/v1701189639/Jeff/image17_hpz5t4.png',
  // },
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
        <div className="wrapper text">ZeffStudioZeffStudioZeffStudioZeffStudio</div>
      </section>
    </div>
  );
};

export default Images;
