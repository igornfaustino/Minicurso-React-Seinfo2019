import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom"

// Componets
import Header from "./components/Header";
import Routes from "./routes/main"

export class App extends Component {
  state = {
    historico: []
  }

  addToHistorico = poke => {
    this.setState({
      historico: [poke, ...this.state.historico]
    }, () => {
      console.log(this.state.historico)
    })
  }

  getHistorico = () => {
    return this.state.historico
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (window.location.href.split(window.location.host)[1] !== "/")
  }
  
  
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes addToHistorico={this.addToHistorico} getHistorico={this.getHistorico} />
      </BrowserRouter>
    );
  }
}

export default App;
