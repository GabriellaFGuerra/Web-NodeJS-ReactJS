import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0, value1: 0, value2: 0
    }

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.multiply = this.multiply.bind(this);
  }

  handleChange1(event) {
    this.setState({ value1: event.target.value });
  }

  handleChange2(event) {
    this.setState({ value2: event.target.value });
  }

  multiply = () => {
    const { value1, value2 } = this.state;
    this.setState({ result: value1 * value2 });
  }

  render() {
    return (
      <div>
        <center>
          <h1>Multiplicador</h1>
          <div class="inputs">
            <input type="number" class="number1" value={this.state.value1} onChange={this.handleChange1} placeholder="Digite um número" />
            <input type="number" class="number2" value={this.state.value2} onChange={this.handleChange2} placeholder="Digite outro número" />
          </div>

          <div class="submit">
            <button onClick={this.multiply}>Multiplicar</button>
          </div>

          <div class="results">
            <h1>Resultado: {this.state.result}</h1>
          </div>
        </center>
      </div>
    );
  }
}

export default App;
