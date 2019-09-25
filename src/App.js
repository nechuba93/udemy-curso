import React, {Component} from 'react';
import './App.css';
import StatelessWithPropTypes from './sections/stateless-proptypes';

class App extends Component {
  render () {
    return (
      <div className="App">
        <StatelessWithPropTypes />
      </div>
    );
  }
}

export default App;
