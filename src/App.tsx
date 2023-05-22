import React from 'react';
import './App.css';
import { useState } from 'react';
import { Board } from './components/Board';
import { Results } from './components/Results';

function Game() {
  const [history, setHistory] = useState([Array(16).fill(null)]);
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

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <Results history={history} onJumpTo={jumpTo}/>
      </div>
    </div>
  );
}

export default Game;
