import React from 'react';
import { animated } from '@react-spring/web';

function CellComponent({ style, isFirstBlob }) {
  return (
    <animated.div className="cell" style={style}>
      {[...Array(6)].map((_, index) => (
        <animated.div
          key={index}
          className={`blob ${isFirstBlob && index === 0 ? 'first-blob' : ''}`}
        ></animated.div>
      ))}
      <animated.div className='blob2'></animated.div>
      <animated.div className='blob3'></animated.div>
    </animated.div>
  );
}

export default CellComponent;
