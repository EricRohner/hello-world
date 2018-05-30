import React, { Component } from 'react';
import background from './cat.JPG';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
	    <p className="Hello World!">
			Hello World!</p>
        <header className="App-header">
			<img src={background} className="App-background" alt="background" />
        </header>
        
      </div>
    );
  }
}

export default App;
