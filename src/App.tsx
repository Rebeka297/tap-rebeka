import React from 'react';
import './App.css';
import { useState } from 'react';
import { isPropertySignature } from 'typescript';
import { calculateWinner } from './helpers/winner';

type SquareType = {
  value: string
  onSquareClick: () => void
}

function Square(props: SquareType) {
  return (<button className="square" onClick={props.onSquareClick}>{ props.value }</button>);
}

type BoardType = {
  xIsNext: boolean
  squares: string[]
  onPlay: any
}

function Board(propsBoard: BoardType) {
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
      <div className="board-row">
      <Square value={propsBoard.squares[0]} onSquareClick={() => handleClick(0) } />
      <Square value={propsBoard.squares[1]} onSquareClick={() => handleClick(1) } />
      <Square value={propsBoard.squares[2]} onSquareClick={() => handleClick(2) } />
      </div>
      <div className="board-row">
      <Square value={propsBoard.squares[3]} onSquareClick={() => handleClick(3) } />
      <Square value={propsBoard.squares[4]} onSquareClick={() => handleClick(4) } />
      <Square value={propsBoard.squares[5]} onSquareClick={() => handleClick(5) } />
      </div>
      <div className="board-row">
      <Square value={propsBoard.squares[6]} onSquareClick={() => handleClick(6) } />
      <Square value={propsBoard.squares[7]} onSquareClick={() => handleClick(7) } />
      <Square value={propsBoard.squares[8]} onSquareClick={() => handleClick(8) } />
      </div>
    </>
  );
}



function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: []) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{ moves }</ol>
      </div>
    </div>
  );
}

export default Game;
