import React from 'react';

import Navbar from './components/navbar';

import Container from './components/container';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      guesses: [3, 5, 22, 60, 11],
      totalNum: 0,
      messages: [
        'Hot', 'Cold', 'Less than warm', 'Kinda hot'
      ]
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <Container {...this.state}/>

      </div>
    );
  }
}

// message={this.state.messages[0]} {...this.state.totalNum} guesses={this.state.guesses}/>