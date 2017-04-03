import React from 'react';

export default function Feedback(props) {
  const random = Math.floor(Math.random()*props.messages.length);
  return (
    <div className="feedback">
      <p className="message">{props.messages[random]}</p>
    </div>
  );
}