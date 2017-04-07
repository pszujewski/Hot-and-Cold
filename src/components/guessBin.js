import React from 'react';

export default function GuessBin(props){
  const guesses = props.guesses.map((guess, index) => {
    return <li key={index}>{guess}</li>;
  });
  return(
    <div className="guess-bin">
      <ul>
        {guesses}
      </ul>
    </div>
  );
}