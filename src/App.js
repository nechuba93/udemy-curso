import React, {Component} from 'react';
import './App.css';

class App extends Component {

  handleClick = (e) => {
    e.preventDefault()
    const name = this.inputName.value
    const email = document.getElementById('twitter').value
    console.log({name, email});
  }

  render () {
    return (
      <div className="App">
        <h4>Formularios</h4>
        <form>
          <p>
            <label htmlFor='name'>Nombre: </label>
            <input
              id='name'
              name='username'
              placeholder='Introduce el nombre'
              ref={inputElement => this.inputName = inputElement}>
            </input>
          </p>
          <p>
            <label htmlFor='twitter'>Twitter: </label>
            <input
              id='twitter'
              name='twitterAccount'
              placeholder='Introduce el nombre'>
            </input>
          </p>
          <button onClick={this.handleClick}>Enviar</button>
        </form>
      </div>
    );
  }
}

export default App;
