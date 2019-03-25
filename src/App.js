import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Travel 
             destination="Zanarkand"
             country ="FF"
             photo="https://oyster.ignimgs.com/mediawiki/apis.ign.com/final-fantasy-x/0/05/FFX.PS3_HD.1.jpg?width=640"
             distance="Far Far away"/>
 
          <Travel 
           destination="The Good Place"
           country ="none"
           photo="http://bit.ly/VVPmGy"
           distance="Imagination "/>
           
     
      </div>
    );
  }
}

export default App;
