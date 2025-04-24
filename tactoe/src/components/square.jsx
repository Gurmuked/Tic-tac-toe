
import React from 'react';
function Square({value, onSquareClick}) {
  return (
    <button className="border-2 border-black h-50 w-50" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;