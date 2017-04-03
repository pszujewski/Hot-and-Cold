import React from 'react';

export default function User(props) {
  return (
    <div className="user">
      <form>
        <label htmlFor="user-guess"></label>
        <input id="user-guess" placeholder="Enter your guess here" type="text"/>
        <button className="submit-btn">Submit your guess</button>
      </form>
      <h3>
        Guess #{props.totalNum}!
      </h3>
    </div>
  );
}