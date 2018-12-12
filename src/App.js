import React, { Component } from 'react';
//components
import TitleConfig from './TitleConfig'
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleConfig />
        <NavBar />
      </div>
    );
  }
}

export default App;