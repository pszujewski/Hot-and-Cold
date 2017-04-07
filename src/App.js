import React from 'react';

import Navbar from './components/navbar';

import Container from './components/container';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      guesses: [],
      secretNum: Math.floor(Math.random()*101),
      isWon: false
    };
  }

  addGuess(num) {
    this.setState({
      guesses: [...this.state.guesses, num]
    });
  }

 toggleIsWon() {
   const toggle = this.state.isWon ? false : true;
   this.setState({
      isWon: toggle
    });
 }

 doNewGame() {
   this.setState({
      guesses: [],
      secretNum: Math.floor(Math.random()*101),
      isWon: false
    });
 }

  render() {
    return (
      <div className='app-container'>
        <Navbar doNewGame={() => this.doNewGame()} />
        <Container {...this.state} addGuess={(num) => this.addGuess(num)} toggleIsWon={() => this.toggleIsWon()} />
      </div>
    );
  }
}
