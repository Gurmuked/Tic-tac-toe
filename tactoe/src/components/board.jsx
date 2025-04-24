import React, { useState } from 'react';
import Square from './square';


const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

 

  return (
    <>
      <div className="board-row grid-cols-3">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row grid-cols-3">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row grid-cols-3">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

export default Board;