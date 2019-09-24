import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props) //COnstructor de Component
    // Inicializamos el state
    this.state = { mensajeInicial: 'mensaje inicial' }

  }

  handleClick = () => {
    this.setState({mensajeInicial: 'cambiado'})
  }

  render () {
    console.log('render');
    return (
      <div className="App">
        <h4>Children props</h4>
        {this.state.mensajeInicial} 
        <button onClick={this.handleClick}>
          Cambiar Mensaje
        </button>
      </div>
    );
  }
}

export default App;
