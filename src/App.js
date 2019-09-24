import React, {Component} from 'react';
import './App.css';
import ComponentWillMount from './sections/life-cycle/componentWillMount';
import Render from './sections/life-cycle/render';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Render />
      </div>
    );
  }
}

export default App;
