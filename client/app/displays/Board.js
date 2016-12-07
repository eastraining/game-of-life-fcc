import React from 'react';
import { render } from 'react-dom';

const Board = ({height, width}) => {
  let rows = []
  for (var i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} index={i} />);
  }
  return (
    <div className='board'>
      {rows}
    </div>
  )
}

const Row = ({width, index}) => {
  let squares = []
  for (var j = 0; j < width; j++) {
    squares.push(<Square key={[index, j]} />);
  }
  return (
    <div className="board-row">
      {squares}
    </div>
  )
}

const Square = () => (
  <div className="board-square" />
)

export default Board;
