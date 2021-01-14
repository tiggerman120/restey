import React from 'react';
import Header from '../header/Header';
import Form from '../form/Form';
import Footer from '../footer/Footer';
import Results from '../Results/Results'
import './App.scss';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: {},
    }
  }

  saveHeaders = (headers) => {
    this.setState({ headers })
    console.log(this.state.headers);
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
  getResults = (results, count) => {
    console.log(results)
    this.setState({ results })
    this.setState({ count })
    
  }
  render() {
    return (
      <>
        <Header 
        headers={this.state.headers}
        />
        <Form 
        url={"https://pokeapi.co/api/v2/pokemon"}
        giveAppResults = {this.getResults}
        saveHeaders = {this.saveHeaders}
        createAppResults = {this.postResults}
        />
        <Results 
        results = {this.state.results}
        count = {this.state.count}
        headers = {this.state.saveHeaders}
        />
        <Footer />
      </>
    )
  }
}



export default App;