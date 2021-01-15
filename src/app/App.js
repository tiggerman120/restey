import React from 'react';
import { BrowserRouter, MemoryRouter, HashRouter, Link } from 'react-router-dom';
import Header from '../header/Header';
import { Route, Switch } from 'react-router-dom';
import Main from '../main/main';
import Home from '../home/home';
import History from '../history/history';
import Form from '../form/Form';
import Footer from '../footer/Footer';
import Results from '../Results/Results'
import List from '../list/list';
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
    //console.log(this.state.headers);
  }

  handleWords = e => {
    let newWords = e.target.value;
    this.setState({ words: newWords });
  }

  handleClick = e => {
    e.preventDefault();
    let newWords = this.state.words.split('').reverse().join('');
    this.setState({ words: newWords });
  }

  getResults = (results, count) => {
    console.log(results)
    this.setState({ results })
    this.setState({ count })

  }

  postResults = (results, count) => {
    console.log(`postResults function`, results)
    this.setState({ results });
  }

  render() {
    return (


      <>
        <Header
          headers={this.state.headers}
        />
        <BrowserRouter>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/history">

            </Route>
            <Route path="/help">

            </Route>
          </Switch>
          <Main />
          <List>
            <History />
          </List>
          <Form
            giveAppResults={this.getResults}
            saveHeaders={this.saveHeaders}
            postAppResults={this.postResults}
          />
          <Results
            results={this.state.results}
            count={this.state.count}
            headers={this.state.headers}
          />

          <Footer />
        </BrowserRouter>
      </>

    )
  }
}



export default App;