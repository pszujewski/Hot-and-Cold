import React from 'react';

export default function Navbar(props) {
  function handleNewGame(e) {
    props.doNewGame();
  }
  return (
    <nav>
      <div className="flex-nav">
        <h3>WHAT?</h3>
        <h3 onClick={(e) => handleNewGame(e)}>+NEW GAME</h3>
      </div>
    </nav>
  );
}