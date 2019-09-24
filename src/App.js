import React, {Component} from 'react';
import './App.css';
import CicloDeActualizacion from './sections/life-cycle/ciclodeActualizacion';

class App extends Component {
  render () {
    return (
      <div className="App">
        <CicloDeActualizacion />
      </div>
    );
  }
}

export default App;
