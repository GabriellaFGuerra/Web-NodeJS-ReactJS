import React, { Component } from 'react';
import './App.css';
import img from "../src/profile.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <Profile />
      </div>
    );
  }
}
export default App;

class Profile extends Component {
  render() {
    return (
      <center>
        <img src={img} width={250} height={250} alt="" />
        <h1>Dados pessoais</h1>
        <p>Gabriella Guerra, 19</p>
        <h1>Formação</h1>
        <p>Técnica em Informática para Internet</p>
        <h1>Experiência</h1>
        <p>Desenvolvimento PHP</p>
        <h1>Projetos</h1>
        <p><a href="https://github.com/GabriellaFGuerra">Github</a></p>
      </center>
    );
  }
}
