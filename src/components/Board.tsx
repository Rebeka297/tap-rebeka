import React from 'react';
import { BoardType } from '../types';
import { calculateWinner } from '../helpers/winner';
import { Square } from './Square';

export function Board(propsBoard: BoardType) {
  function handleClick(i: number) {
    if (calculateWinner(propsBoard.squares) || propsBoard.squares[i]) {
      return;
    }
    const nextSquares = propsBoard.squares.slice();
    if (propsBoard.xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    propsBoard.onPlay(nextSquares);
  }

  const winner = calculateWinner(propsBoard.squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (propsBoard.xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      {
        [0,1,2].map((rowIndex: number) => {
          return (<div key={`row${rowIndex}`} className="board-row">
            {
              [0,1,2].map((columnIndex) => {
                const iterator = rowIndex*3 + columnIndex
                return (<Square key={`column${iterator}`} value={propsBoard.squares[iterator]} onSquareClick={() => handleClick(iterator) } />)
              })
            }
          </div>)
        })
      }
    </>
  );
}