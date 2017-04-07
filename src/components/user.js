import React from 'react';

export default function User(props) {
  let inputNum;
  function handleSubmit(e) {
    e.preventDefault();
    if (!props.isWon && inputNum.value !== "" && inputNum.value !== " ") {
      let newGuess = inputNum.value;
      inputNum.value = "";
      props.addGuess(newGuess);
    }
    if (props.isWon) {
      alert('start a new game');
    }
  }
  function getTotal() {
    return props.guesses.length;
  }
  return (
    <div className="user">
      <form>
        <label htmlFor="user-guess"></label>
        <input id="user-guess" placeholder="Enter your guess here" type="number" ref={input => inputNum = input} />
        <button className="submit-btn" onClick={(e) => handleSubmit(e)}>Submit your guess</button>
      </form>
      <h3>
        Guess #{getTotal()}!
      </h3>
    </div>
  );
}