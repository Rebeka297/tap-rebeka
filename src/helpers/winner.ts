function splitArray(array: string[], part: number) {
  var tmp = [];
  for(var i = 0; i < array.length; i += part) {
      tmp.push(array.slice(i, i + part));
  }
  return tmp;
}

export function calculateWinner(squares: string[]) {
  let squaresNew = splitArray(squares, 4);

  const pobjednikX = hasWon(squaresNew, "X");
  const pobjednikO = hasWon(squaresNew, "O");

  if (pobjednikX) return "X";
  if (pobjednikO) return "O";

  else return null;
}

function hasWon(squares: string[][], player: string) {

  for(let row = 0; row < 4; row++) {
    if (squares[row][0] === player && squares[row][1] === player && squares[row][2] === player && squares[row][3] === player) return true;
}

  for (let col=0; col < 4; col++) {
    if (squares[0][col] === player && squares[1][col] === player && squares[2][col] === player && squares[col][3] === player) return true;
}

  if(squares[0][0] === player && squares[1][1] === player && squares[2][2] === player && squares[3][3] === player) return true;
  if(squares[0][2] === player && squares[1][1] === player && squares[2][0] === player && squares[4][4] === player) return true;

return false;
}
