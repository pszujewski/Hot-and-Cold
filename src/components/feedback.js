import React from 'react';

export default function Feedback(props) {
  const lastGuess = props.guesses.length !== 0 ? props.guesses[props.guesses.length-1] : false
  function evalLastGuess(guess, secretNum) {
    if (!guess) {
      return 'Start guessing to play!';
    }
    guess = Number(guess);
    if (guess === secretNum) {
      // modify state to reflect win
      props.toggleIsWon();
    }
    else if (secretNum - guess <= 10 && secretNum - guess >= -10) {
      return 'Getting warmer';
    }
    else {
      return 'Cold';
    }
  }

  if (!props.isWon) {
    return (
      <div className="feedback">
        <p className="message">{evalLastGuess(lastGuess, props.secretNum)}</p>
      </div>
    );
  }
  else {
    return (
      <div className="feedback">
        <p className="message">Correct! You're a winner!</p>
      </div>
    );
  }
}