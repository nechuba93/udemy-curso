import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';

class Box extends Component {
  render () {
    return (
      <div style={{border: '1px solid #000', margin: 5, padding: 5}}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {

  static propTypes = {
    author: PropTypes.string.isRequired
  }

  render () {
    const {author, children, date, title } = this.props
    return (
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

class App extends Component {

  render () {
    return (
      <div className="App">
        <h4>Children props</h4>
        <Article
          author='Nacho'
          date={new Date().toLocaleDateString()}
          title='Articulo de props'
        >
          <p>Contenido contenido contenido contenido</p>
          <b>Pie pie pie pie</b>
        </Article>
      </div>
    );
  }
}

export default App;
