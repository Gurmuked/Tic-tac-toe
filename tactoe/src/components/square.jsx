
import React from 'react';
function Square({value, onSquareClick}) {
  return (
    <button className="" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;