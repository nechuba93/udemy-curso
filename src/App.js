import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor () {
    super() 
    this.state = {
      inputName: '',
      inputTwitter: '@',
      inputTerms: true
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
  }

  handleChange = (e) => {
    console.log(e.target.checked);
    this.setState({inputTerms: e.target.checked})
  }

  render () {
    return (
      <div className="App">
        <h4>Formularios</h4>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor='name'>Nombre: </label>
            <input
              id='name'
              name='username'
              onChange={e => this.setState({inputName: e.target.value})}
              placeholder='Introduce el nombre'
              ref={inputElement => this.inputName = inputElement}
              value={this.state.inputName}>
            </input>
          </p>
          <p>
            <label htmlFor='twitter'>Twitter: </label>
            <input
              id='twitter'
              name='twitterAccount'
              onChange={e => this.setState({inputTwitter: e.target.value})}
              placeholder='Introduce el nombre'
              value={this.state.inputTwitter}>
            </input>
          </p>
          <p>
            <label htmlFor='twitter'>
            <input 
              checked={this.state.inputTerms}
              type='checkbox' onChange={this.handleChange}></input>
            Aceptar términos </label>
          </p>
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}

export default App;
