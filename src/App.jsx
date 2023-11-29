import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import { useSpring, config } from '@react-spring/web';
import CustomCursor from './Components/CustomCursor';
import Cell from './Components/CellComponents/Cell';
import Header from "./Components/Header";
// import Network from "./Components/Network";
// import Words from "./Words";
import Loader from './Components/Loader';
import Slider from "./Components/Slider";
import Scroll from "./Components/Scroll";
import Images from "./Components/Images";
// import Insta from "./Components/Insta";
import Footer from "./Components/Footer";
import Proyects from "./Components/Proyects";
import Text from "./Components/Text";



function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  const cellStyle = {
    position: 'absolute',
    top: mousePosition.y,
    left: mousePosition.x,
    transform: 'translate(-280%, -200%)', // Center the Cell
  };

  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setMousePosition({ x, y });
  };

  const blobStyle = useSpring({
    to: { transform: `translate3d(${mousePosition.x - 0 }px, ${mousePosition.y - 0 }px, 0)` },
    // config: { tension: 170, friction: 56 },
    config: config.slow,
  })

  useEffect(() => {
    // Simula un tiempo de carga
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);






  return (
    <div className="App " onMouseMove={handleMouseMove}>
      <CustomCursor />
      {isLoading ? <Loader /> : null}
      <div >
        <div className="background-content" >
          <Header />
          <Slider />
          <Scroll />
        </div>
        <Text />
        <Proyects/>
        <Images />


        {/* <div style={{ height: '100vh' }}>
          <Network />

        </div>
        < Words/>
        < Insta/>
        <Network /> */}
        <Footer />
      </div>
      <Cell style={blobStyle} positionStyle={cellStyle} />
    </div>
  );
}

export default App;
