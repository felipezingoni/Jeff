import React, { useState, useRef } from 'react';
import '../assets/header2.scss';

function Header2() {
  const originalSize = 50;

  const [iconSizes, setIconSizes] = useState({
    House: originalSize,
    Checklist: originalSize,
    Restaurant: originalSize,
    Favorite: originalSize,
    Profile: originalSize,
    Register: originalSize,
  });

  const iconsRef = {
    House: useRef(null),
    Checklist: useRef(null),
    Restaurant: useRef(null),
    Favorite: useRef(null),
    Profile: useRef(null),
    Register: useRef(null),
  };

  const handleMouseMove = (e) => {
    const newIconSizes = {};
    Object.keys(iconsRef).forEach(iconId => {
      const icon = iconsRef[iconId].current;
      if (icon) {
        const rect = icon.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(rect.left + rect.width / 2 - e.clientX, 2) +
          Math.pow(rect.top + rect.height / 2 - e.clientY, 2)
        );
        // Ajusta el tamaño del ícono entre 35px y 46px basado en la distancia
        const size = Math.max(90 - distance / 5, 50); // Ajusta esta fórmula si es necesario
        newIconSizes[iconId] = size;
      }
    });
    setIconSizes(newIconSizes);
  };

  const handleMouseLeaveFooter = () => {
    setIconSizes({
      House: originalSize,
      Checklist: originalSize,
      Restaurant: originalSize,
      Favorite: originalSize,
      Profile: originalSize,
      Register: originalSize,
    });
  };



  const authenticatedFooterContent = (
    <>
      <div to="/">
        <div ref={iconsRef.House} style={{ width: `${iconSizes.House}px`, height: `${iconSizes.House}px`, borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.53)' }} className="icon-container">
          <div className="tooltip-container">
            <span className="icon-title">
              <svg xmlns="http://www.w3.org/2000/svg" width={35} viewBox="0 0 32.236 32" id="House"><path d="M1.656 17.756 16 5.324l14.344 12.432a1.001 1.001 0 0 0 1.312-1.512l-15-13a1 1 0 0 0-1.31 0L10 7.876V6a2 2 0 0 0-4 0v5.342L.344 16.244a1.003 1.003 0 0 0-.1 1.412c.364.416.994.462 1.412.1zM12 22h8v10h6a2 2 0 0 0 2-2v-9.802c0-.6-.268-1.166-.732-1.546l-10-8.198a1.996 1.996 0 0 0-2.536 0l-10 8.198A1.993 1.993 0 0 0 4 20.198V30a2 2 0 0 0 2 2h6V22z" fill="#A9A895" className="color000000 svgShape"></path></svg>
            </span>
          </div>
        </div>
      </div>
      <div to="/">
        <div ref={iconsRef.Checklist} style={{ width: `${iconSizes.Checklist}px`, height: `${iconSizes.Checklist}px`, borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.53)' }} className="icon-container">
          <div className="tooltip-container">
            <span className="icon-title">
              <img src="https://res.cloudinary.com/dmmdvpbbz/image/upload/v1698072642/Jeff/FZ_negro_rxv4sw.png"  alt="" />
              <svg xmlns="http://www.w3.org/2000/svg" width={35} enableBackground="new 0 0 34 34" viewBox="0 0 34 34" id="Checklist"><path d="M25.1,17.2c-4.4,0-7.9,3.5-7.9,7.9c0,4.4,3.5,7.9,7.9,7.9c4.3,0,7.9-3.5,7.9-7.9C32.9,20.7,29.4,17.2,25.1,17.2z
                      M28.7,23.7l-4,4c-0.2,0.2-0.5,0.3-0.7,0.3s-0.5-0.1-0.7-0.3l-2-2c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.3,1.3l3.3-3.3
                      c0.4-0.4,1-0.4,1.4,0S29.1,23.3,28.7,23.7z" fill="#A9A895" className="color000000 svgShape"></path><path d="M21.1,1h-17c-1.7,0-3,1.4-3,3v24c0,1.7,1.3,3,3,3h13c-1.2-1.6-2-3.7-2-5.9c0-0.4,0-0.7,0.1-1.1H6.1c-0.6,0-1-0.4-1-1
                      c0-0.5,0.4-1,1-1h9.6c0.2-0.7,0.5-1.4,0.9-2H6.1c-0.6,0-1-0.4-1-1c0-0.5,0.4-1,1-1h12.1c1.6-1.5,3.6-2.5,5.9-2.8V4
                      C24.1,2.4,22.7,1,21.1,1z M6.1,6h8c0.5,0,1,0.5,1,1c0,0.6-0.5,1-1,1h-8c-0.6,0-1-0.4-1-1C5.1,6.5,5.5,6,6.1,6z M19.1,16h-13
                      c-0.6,0-1-0.4-1-1c0-0.5,0.4-1,1-1h13c0.5,0,1,0.5,1,1C20.1,15.6,19.6,16,19.1,16z M19.1,12h-13c-0.6,0-1-0.4-1-1c0-0.5,0.4-1,1-1
                      h13c0.5,0,1,0.5,1,1C20.1,11.6,19.6,12,19.1,12z" fill="#A9A895" className="color000000 svgShape"></path></svg>
            </span>
          </div>
        </div>
      </div>
      <div to="/categories">
        <div ref={iconsRef.Restaurant} style={{ width: `${iconSizes.Restaurant}px`, height: `${iconSizes.Restaurant}px`, borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.53)', border: '2px solid rgba(255, 255, 255, 0.96)' }} className="icon-container">
          <div className="tooltip-container">
            <span className="icon-title">
              <svg xmlns="http://www.w3.org/2000/svg" width={45} viewBox="0 0 25 25" id="Restaurant"><g data-name="Restaurant" fill="#000000" className="color000000 svgShape"><path fill="#cfcdb8" d="M14.734,21.606a1.494,1.494,0,0,1-1.256-.7,64.446,64.446,0,0,1-3.913-7.1L9.131,13.7A2.794,2.794,0,0,1,7.257,12L5.377,7.065a2.782,2.782,0,0,1,.194-2.411l.238-.41a.969.969,0,0,1,.842-.48h.012a.975.975,0,0,1,.846.5l8.544,15.164a1.4,1.4,0,0,1,.115,1.113,1.509,1.509,0,0,1-.7.869A1.487,1.487,0,0,1,14.734,21.606ZM6.651,4.514a.223.223,0,0,0-.195.11l-.237.408A2.037,2.037,0,0,0,6.078,6.8l1.881,4.936a2.037,2.037,0,0,0,1.368,1.243l.6.158a.38.38,0,0,1,.243.2,64.576,64.576,0,0,0,3.94,7.165.737.737,0,0,0,.99.257.748.748,0,0,0,.354-.436A.657.657,0,0,0,15.4,19.8L6.856,4.634A.219.219,0,0,0,6.651,4.514Z" className="color2b3344 svgShape"></path><path fill="#cfcdb8" d="M8.444 21.606a1.44 1.44 0 0 1-.767-.219 1.479 1.479 0 0 1-.542-1.975c.856-1.575 1.878-3.281 2.956-4.938a.375.375 0 0 1 .629.41C9.653 16.523 8.641 18.213 7.8 19.768a.734.734 0 0 0 .272.979.717.717 0 0 0 .982-.22c.719-1.086 1.479-2.321 2.262-3.675a.375.375 0 0 1 .649.375c-.791 1.367-1.558 2.615-2.282 3.709A1.463 1.463 0 0 1 8.444 21.606zM11.776 12.979a.371.371 0 0 1-.375-.37V12.6a.381.381 0 0 1 .065-.212c.555-.808 1.03-1.483 1.382-1.982A1.592 1.592 0 0 1 12.5 8.377l2.88-4.8a.376.376 0 0 1 .644.387l-2.88 4.8a.831.831 0 0 0 .292 1.146l.133.082a.374.374 0 0 1 .17.244.371.371 0 0 1-.061.291l-.1.15c-.356.5-.868 1.229-1.478 2.118A.377.377 0 0 1 11.776 12.979zM12.945 15.045A.378.378 0 0 1 12.768 15a.375.375 0 0 1-.153-.507c.757-1.413 1.434-2.728 1.812-3.516a.375.375 0 0 1 .233-.2.365.365 0 0 1 .3.04l.13.08a.831.831 0 0 0 .633.1.82.82 0 0 0 .508-.379l2.88-4.8a.376.376 0 0 1 .644.387L16.877 11a1.567 1.567 0 0 1-.97.72 1.6 1.6 0 0 1-.976-.068c-.4.807-1 1.963-1.655 3.191A.374.374 0 0 1 12.945 15.045z" className="color2b3344 svgShape"></path><path fill="#cfcdb8" d="M14.767 8.53a.378.378 0 0 1-.193-.054.375.375 0 0 1-.129-.513l2.181-3.638a.375.375 0 0 1 .644.385L15.089 8.347A.372.372 0 0 1 14.767 8.53zM16.01 9.275a.368.368 0 0 1-.192-.054.374.374 0 0 1-.129-.513L17.87 5.07a.375.375 0 1 1 .643.385l-2.18 3.637A.374.374 0 0 1 16.01 9.275z" className="color2b3344 svgShape"></path></g></svg>
            </span>
          </div>
        </div>
      </div>
      <div to="/favorite">
        <div ref={iconsRef.Favorite} style={{ width: `${iconSizes.Favorite}px`, height: `${iconSizes.Favorite}px`, borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.53)' }} className="icon-container">
          <div className="tooltip-container">
            <span className="icon-title">
              <svg xmlns="http://www.w3.org/2000/svg" width={35} viewBox="0 0 48 48" id="Favorite"><path fill="none" d="M0 0h48v48H0z"></path><path d="m24 42.7-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z" fill="#A9A895" className="color000000 svgShape" ></path></svg>
            </span>
          </div>
        </div>
      </div>
      <div to="/">
        <div ref={iconsRef.Profile} style={{ width: `${iconSizes.Profile}px`, height: `${iconSizes.Profile}px`, borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.53)' }} className="icon-container">
          <div className="tooltip-container">
            <span className="icon-title">
              <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 24 24" id="profile"><path fill="#A9A895" d="M5.84846399,13.5498221 C7.28813318,13.433801 8.73442297,13.433801 10.1740922,13.5498221 C10.9580697,13.5955225 11.7383286,13.6935941 12.5099314,13.8434164 C14.1796238,14.1814947 15.2696821,14.7330961 15.73685,15.6227758 C16.0877167,16.317132 16.0877167,17.1437221 15.73685,17.8380783 C15.2696821,18.727758 14.2228801,19.3149466 12.4926289,19.6174377 C11.7216312,19.7729078 10.9411975,19.873974 10.1567896,19.9199288 C9.43008411,20 8.70337858,20 7.96802179,20 L6.64437958,20 C6.36753937,19.9644128 6.09935043,19.9466192 5.83981274,19.9466192 C5.05537891,19.9062698 4.27476595,19.8081536 3.50397353,19.6530249 C1.83428106,19.3327402 0.744222763,18.7633452 0.277054922,17.8736655 C0.0967111971,17.5290284 0.00163408158,17.144037 0.000104217816,16.752669 C-0.00354430942,16.3589158 0.0886574605,15.9704652 0.268403665,15.6227758 C0.72692025,14.7330961 1.81697855,14.1548043 3.50397353,13.8434164 C4.27816255,13.6914539 5.06143714,13.5933665 5.84846399,13.5498221 Z M8.00262682,-1.16351373e-13 C10.9028467,-1.16351373e-13 13.2539394,2.41782168 13.2539394,5.40035587 C13.2539394,8.38289006 10.9028467,10.8007117 8.00262682,10.8007117 C5.10240696,10.8007117 2.75131423,8.38289006 2.75131423,5.40035587 C2.75131423,2.41782168 5.10240696,-1.16351373e-13 8.00262682,-1.16351373e-13 Z" transform="translate(4 2)" className="color200e32 svgShape"></path></svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );



  return (
    <footer className='footer' onMouseLeave={handleMouseLeaveFooter}>
      <div className='main-footer' onMouseMove={handleMouseMove}>
        <div className='orders'>{authenticatedFooterContent}</div>
      </div>

    </footer>
  );
}

export default Header2;
