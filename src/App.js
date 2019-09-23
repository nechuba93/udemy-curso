import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Definir como function
// function Hello (props) {
//   return <h2>{props.title}</h2>
// }

// Definir como arrow function
// const Hello = (props) => <h2>{props.title}</h2>
class Title extends Component {
  render () {
    return <h1>{this.props.text}</h1>
  }
}

Title.defaultProps = {
  text: 'Default'
}

function App() {
  return (
    <div className="App">
      <Title text='no' />
    </div>
  );
}

export default App;
