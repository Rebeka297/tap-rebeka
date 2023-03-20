export type SquareType = {
  value: string
  onSquareClick: () => void
}

export type BoardType = {
  xIsNext: boolean
  squares: string[]
  onPlay: any
}