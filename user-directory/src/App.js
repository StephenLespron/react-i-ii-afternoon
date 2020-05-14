import React, { Component } from 'react';
import Header from './Components/Header.js'
import './App.css';
import Directory from './Components/Directory.js';

export default class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
  return (
    <div className="App">
      <Header/>
      <Directory/>
    </div>
  );
 }
}
