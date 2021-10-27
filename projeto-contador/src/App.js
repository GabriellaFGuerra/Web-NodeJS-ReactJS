import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    number: 0
  }

  constructor(props) {
    super(props);
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }


  plus = () => {
    this.setState(({ number }) => ({
      number: number + 1
    }));
  }


  minus = () => {
    this.setState(({ number }) => ({
      number: number - 1
    }));
  }

  render() {
    return (
      <div>
        <center>
          <h1>Contador de pessoas na loja</h1>

          <div class="counter">
            <h1>{this.state.number}</h1>
          </div>

          <div class="buttons">
            <button class="plus" onClick={this.plus}>+</button>
            <button class="minus" onClick={this.minus}>-</button>
          </div>
        </center>
      </div>
    );
  }
}

export default App;
