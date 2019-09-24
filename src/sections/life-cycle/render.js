import React, {Component} from 'react';

const HelloRender = (props) => <h1>Hola render</h1>

class Render extends Component {
  constructor (props) {
    console.log('constructor');
    super (props)
    // Inicializamos el state
    this.state = { mensaje: 'mensaje inicial' }

  }

  componentWillMount () {
      console.log('componentWillMount');
  }

  render () {
      console.log('render');
    //   return (
    //       <div>
    //           <h4>Hello</h4>
    //           <HelloRender />
    //           {this.state.mensaje === 'mensaje inicial' ? 'HOLA': 'ADIO'} 
    //       </div>
    //   )
        return [
            <h1 key='a'>Primer elemento</h1>,
            <HelloRender />
        ]
  }
  
}

export default Render;
