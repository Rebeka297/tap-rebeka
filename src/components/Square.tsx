import React from 'react';
import { SquareType } from '../types';

export function Square(props: SquareType) {
  return (<button className="square" onClick={props.onSquareClick}>{ props.value }</button>);
}