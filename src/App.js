import React, {Component} from 'react';
import './App.css';

class Box extends Component {
  render () {
    return (
      <div style={{border: '1px solid #09f', margin: 5, padding: 5}}>
        {this.props.children}
      </div>
    )
  }
}

class App extends Component {

  render () {
    return (
      <div className="App">
        <h4>Children props</h4>
        <Box>Hola!</Box>
        <Box>Adio!</Box>
      </div>
    );
  }
}

export default App;
