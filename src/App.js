import React, {Component} from 'react';
import './App.css';
import ComponentWillMount from './sections/life-cycle/componentWillMount';

class App extends Component {
  render () {
    return (
      <div className="App">
        <ComponentWillMount />
      </div>
    );
  }
}

export default App;
