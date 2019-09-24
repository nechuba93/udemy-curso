import React, {Component} from 'react';
import './App.css';
import FetchExample from './sections/life-cycle/fetch-example';

class App extends Component {
  render () {
    return (
      <div className="App">
        <FetchExample />
      </div>
    );
  }
}

export default App;
