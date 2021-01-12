import React from 'react';
import header from './Header';
import footer from './Footer';
import './App.scss';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: 'nothing to see here',
    }
  }

  handleWords = e => {
    let newWords = e.target.value;
    this.setState({ words: newWords });
  }

  handleClick = e => {
    e.preventDefault();
    let newWords = this.state.words.split('').reverse().join('');
    this.setState({  words: newWords });
  }
  
  render() {
    return (
      <>
        <header />
        <h3>{this.state.words}</h3>
        <input onChange={this.handleWords} />
        <button onClick={this.handleClick}>Click Me</button>
        <footer />
      </>
    )
  }
}

export default App;