import React, { Component } from 'react';

class BotonQueLanzaError extends Component {
	state = { throwError: false };
	render() {
		if (this.state.throwError) {
			throw new Error('Error lanzado por el botón');
		}

		return (
			<button onClick={() => this.setState({ throwError: true })}>
				Lanzar Error
			</button>
		);
	}
}

class ComponentDidCatch extends Component {
	state = { hasError: false, errorMsg: '' };
	componentDidCatch(error, info) {
		console.log('componentDidCatch');
        console.log({ error, info });
        this.setState({hasError: true, errorMsg: error.toString()})
	}

	render() {
        if (this.state.hasError) {
            return (
                <div>
                    <p>Error en el componente: {this.state.errorMsg}</p>
                    <button onClick={() => {this.setState({hasError: false})}}>Recuperar</button>
                </div>
            )
        }

		return (
			<div>
				<h4>Ciclo de montaje: componentDidCatch</h4>
				<BotonQueLanzaError />
			</div>
		);
	}
}

export default ComponentDidCatch;
