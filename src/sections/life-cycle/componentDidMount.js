import React, {Component} from 'react';

class ComponentDidMount extends Component {
  constructor (props) {
    console.log('constructor');
    super (props)
    // Inicializamos el state
    this.state = {scroll: 0}
  }

  componentWillMount () {
      console.log('ComponentWillMount');
  }

  componentDidMount () {
      console.log('ComponentDidMount');
      document.addEventListener('scroll', () => {
        this.setState({scroll: window.scrollY})
      })
  }
  
  render () {
    console.log('render');
    return (
        <div>
            <h4>Ciclo de montaje: componentDidMount</h4>
            <h3>Scroll: {this.state.scroll}</h3>
            <p>componentDidMount<br/>
              componentDidMount<br/>
            componentDidMount<br/>
            componentDidMount<br/>
            componentDidMount<br/>
            componentDidMount<br/>
            componentDidMount<br/>
            componentDidMount<br/>
            componentDidMount<br/>
            componentDidMount<br/>
            componentDidMount<br/>
            componentDidMount<br/>
            componentDidMount<br/>
            componentDidMount<br/>
            componentDidMount</p>
        </div>
    );
  }
}

export default ComponentDidMount;
