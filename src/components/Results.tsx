import { Button } from './Button';

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
            <Button label={description} onKlik={() => props.onJumpTo(move)} />
          </li>
        );
      })
    }
  </ol>)
}