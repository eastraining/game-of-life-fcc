import React from 'react';
import { render } from 'react-dom';

const Board = ({board}) => (
  <div className='board'>
    {board.map((data, index) => 
      <Row data={data} key={index} grid={index} />
    )}
  </div>
)

const Row = ({data, grid}) => (
  <div className="board-row">
    {data.map((single, index) => 
      <Square single={single} key={(grid, index)} />
    )}
  </div>
)

const Square = ({single}) => {
  switch(single) {
    case 1:
      return <div className="board-square__alive" />
    default:
      return <div className="board-square__dead" />
  }
}

export default Board;
