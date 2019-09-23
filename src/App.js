import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Definir como function
// function Hello (props) {
//   return <h2>{props.title}</h2>
// }

// Definir como arrow function
// const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render () {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render () {
    const textoSegunBool = this.props.boolean ? 'Cierto' : 'Falso'
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n*2)
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p>
        <p>{this.props.arrayOfNumbers.join(', ')}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{this.props.objectWithInfo.key}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='test'/>
        <Text 
          arrayOfNumbers={[2,3,10]}
          objectWithInfo={{key: 'First value', key2: 'othervalue'}}
          boolean
          number={2} 
          text='Text en string' 
        />
      </header>
    </div>
  );
}

export default App;
