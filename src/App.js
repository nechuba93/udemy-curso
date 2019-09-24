import React, {Component} from 'react';
import './App.css';
import ComponentDidMount from './sections/life-cycle/componentDidMount';

class App extends Component {
  render () {
    return (
      <div className="App">
        <ComponentDidMount />
      </div>
    );
  }
}

export default App;
