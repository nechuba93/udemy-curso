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
    const { 
      arrayOfNumbers, 
      multiply,
      title 
    } = this.props
    const mappedNumbers = arrayOfNumbers.map(multiply)
    return (
      <div>
        {title}
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
          multiply={(number) => number*4}
          title={<h1>TITULO</h1>} 
          text='Text en string' 
        />
      </header>
    </div>
  );
}

export default App;
