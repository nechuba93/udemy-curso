import React, {Component} from 'react';
import './App.css';

/* Botón con Herencia */
class HButton extends Component {
  constructor (props) {
    super(props)
    this.borderColor = '#09f'
  }
  render() { 
    return ( 
      <button style={{borderColor: this.borderColor, display: 'block'}}>
        {this.props.label}
      </button>
     );
  }
}

class HButtonDanger extends HButton {
  constructor (props) {
    super(props)
    this.borderColor = 'red'
  }
}

class HButtonWithLegend extends HButton {
  render () {
    return (
      <div>
        {super.render()}
        <small>{this.props.legend}</small>
      </div>
    )
  }
}

/************************************************************************************* */

/* Botón con Composición */

class CButton extends Component {
  render() { 
    return ( 
      <button style={{borderColor: this.props.borderColor, display: 'block'}}>
        {this.props.label}
      </button>
     );
  }
}

CButton.defaultProps = {
  borderColor: '#09f'
}

class CButtonDanger extends Component {
  render() { 
    return <CButton borderColor='red' label={this.props.label} />
  }
}

class CButtonWithLegend extends Component {
  render() {
    return (
      <div>
       <CButton label={this.props.label} borderColor={this.props.borderColor}/>
       <small>{this.props.legend}</small>
      </div>
    );
  }
}
 

class App extends Component {
  render () {
    return (
      <div className="App">
        <h4>Composición vs. Herencia</h4>
        <hr/>
        <h3>Herencia</h3>
        <HButton label='Click aquí'/>
        <br />
        <HButtonDanger label='Cuidado!'/>
        <br />
        <HButtonWithLegend label='Boton con patata' legend='leyenda leyenda' />
        <hr />
        <h3>Composición</h3>
        <CButton label='Click aquí (composición)'/>
        <br />
        <CButtonDanger label='Cuidado! (composición)'/>
        <br />
        <CButtonWithLegend label='Boton con patata (composición)' legend='leyenda leyenda' />
      </div>
    );
  }
}

export default App;
