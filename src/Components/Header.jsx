import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import '../assets/header.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (menuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const handleMenuToggle = () => {
    if (!menuOpen) {
      const link = document.querySelectorAll('.link-header');
      gsap.fromTo(link, { opacity: 0, y: -150 }, { opacity: 1, y: 0, ease: 'elastic', duration: 2 });
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='container d-flex justify-content-between align-items-center'>
      <img style={{width:'100px'}} src="https://res.cloudinary.com/dmmdvpbbz/image/upload/v1698072642/Jeff/FZ_negro_rxv4sw.png" alt="" />
      <div className=''>
        <input id='menu-hamburger' type='checkbox' />

        <label htmlFor='menu-hamburger'>
          <div className='menu' onClick={handleMenuToggle}>
            <span className='hamburger'></span>
          </div>
        </label>

        <ul id='menuo' className={menuOpen ? 'menu-open' : ''}>
          <li className='lin3'>
            <a href='#' className='link-header'>
              Home
            </a>
            <a href='#' className='link-header'>
              About
            </a>
            <a href='#' className='link-header'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
