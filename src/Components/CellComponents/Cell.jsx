import React from 'react';
import CellComponent from './CellComponent';
import SvgFilter from './SvgFilter';

function Cell({ style, positionStyle }) {
  return (
    <div style={positionStyle}>
      <CellComponent style={style} />
      <SvgFilter />
    </div>
  );
}


export default Cell;
