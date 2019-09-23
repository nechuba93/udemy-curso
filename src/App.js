import React, {Component} from 'react';
import './App.css';

class App extends Component {

  handleCLick (e) {
    console.log(e);
    alert('hola')
  }

  render () {
    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleCLick}>Hola</button>
      </div>
    );
  }
}

export default App;
