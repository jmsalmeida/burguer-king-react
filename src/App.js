import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Background from './Background';
import Imagem from './Imagem';
import chicken from './images/chicken.png';
import bacon from './images/triplo-bacon.png';
import cheddar from './images/duplo-cheddar.png';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Background/>

        <div className="imagens">
          <Imagem imagem={chicken} titulo={"texto"}/>
          <Imagem imagem={cheddar} titulo={"texto"}/>
          <Imagem imagem={bacon} titulo={"texto"}/>
        </div>

        <div className="imagens">
          <Imagem imagem={bacon} titulo={"texto"}/>
          <Imagem imagem={chicken} titulo={"texto"}/>
          <Imagem imagem={cheddar} titulo={"texto"}/>
        </div>
      </div>
    );
  }
}

export default App;
