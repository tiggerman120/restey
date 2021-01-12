import React from 'react';
import Header from './Header';
import Footer from './Footer';
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
  
  handleGet = e => {
    e.preventDefault();
    let theWordGet = this.state.words.prepend();
    this.setState({ words: theWordGet})
  }
  render() {
    return (
      <>
        <Header />
        <h3>{this.state.words}</h3>
        <input onChange={this.handleWords} />
        <button onClick={this.handleClick}>Click Me</button>
        <button onClick={this.handleGet}>GET</button>
        <button onClick={this.handlePost}>POST</button>
        <button onClick={this.handlePut}>PUT</button>
        <button onClick={this.handleDelete}>DELETE</button>
        <p>{this.state.url}</p>
        <Footer />
      </>
    )
  }
}



export default App;