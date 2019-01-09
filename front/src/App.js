import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import Footer from './components/helpers/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default App;
