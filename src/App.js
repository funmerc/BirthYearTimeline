import React, { Component } from 'react';
import './App.css';

//Components
import InitComponent from './mainPage/initComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className ="App-Body">
          <InitComponent />
        </div>
      </div>
    );
  }
}

export default App;
