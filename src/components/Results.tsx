type ResultsIn = {
  history: any[][]
  onJumpTo: (step: number) => void
}

export function Results(props: ResultsIn) {
  return (<ol>
    {
      props.history.map((squares, move) => {
        let description;
        if (move > 0) {
          description = 'Go to move #' + move;
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
            <button
              onClick={() => props.onJumpTo(move)}
            >
              {description}
            </button>
          </li>
        );
      })
    }
  </ol>)
}