import React from 'react';
import Feedback from './feedback';
import User from './user';
import GuessBin from './guessBin';

export default function Container(props){
  return (
    <div className="game-container">
      <h1 className="title">HOT or COLD</h1>
      <Feedback guesses={props.guesses}  secretNum={props.secretNum} toggleIsWon={props.toggleIsWon} isWon={props.isWon} />
      <User guesses={props.guesses}  secretNum={props.secretNum} addGuess={props.addGuess} isWon={props.isWon}/>
      <GuessBin guesses={props.guesses}/>
    </div>
  );
}