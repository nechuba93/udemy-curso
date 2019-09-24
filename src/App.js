import React, {Component} from 'react';
import './App.css';
import ComponentDidCatch from './sections/life-cycle/componentDidCatch';

class App extends Component {
  render () {
    return (
      <div className="App">
        <ComponentDidCatch />
      </div>
    );
  }
}

export default App;
