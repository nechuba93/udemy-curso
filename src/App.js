import React, {Component} from 'react';
import './App.css';

class Contador extends Component {
  constructor () {
    super()
    this.state = { contador: 1}
  }

  render () {
    return <span>{this.state.contador}</span>
  }
}

function App() {
  return (
    <div className="App">
      <p>Primer componente con state</p>
      <Contador />
    </div>
  );
}

export default App;
