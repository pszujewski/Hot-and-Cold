import React from 'react';
import Feedback from './feedback';
import User from './user';
import GuessBin from './guessBin';

export default function Container(props){
  return (
    <div className="game-container">
      <h1 className="title">HOT or COLD</h1>
      <Feedback messages={props.messages}/>
      <User totalNum={props.totalNum}/>
      <GuessBin guesses={props.guesses}/>
    </div>
  );
}