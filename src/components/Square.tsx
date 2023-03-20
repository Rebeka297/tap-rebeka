import React from 'react';
import { SquareType } from '../types';
import { Button } from './Button';

export function Square(props: SquareType) {
  return <Button
    className="square" label={props.value} onKlik={props.onSquareClick}/>
}