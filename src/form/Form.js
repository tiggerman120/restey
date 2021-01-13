import { render } from '@testing-library/react';
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      display: false
    }
    if(this.state.method){this.setState({ display: true })}
  }

  handleSubmit = e => {
    e.preventDefault();
    const url = e.target.url.value;
    this.setState({ url })
    if(this.state.url){this.setState({ display: true })}
  }

handleClick = e => {
  const method = e.target.name
  console.log(e);
  this.setState({ method })
}

getResults = async (e) => {
  const url = this.props.url;

  const results = await fetch(url, {method: this.state.method, mode: 'cors'})
  .then(response => {
    console.log(response)
    for (var pair of response.headers.entries()) {
      if (pair[0] === 'x-total-count') {
        this.setState({
          total: pair[1]
        })
      }
    }
    if(response.status !== 200) return;
    console.log(response);
    return response.json();
  });
  this.props.giveAppResults(results)
}

  render() {
    return (
      <div id="form">
        <form onSubmit={this.handleSubmit}>
          <input name="url" placeholder="enter a url" type="text" />
          <button type="submit" onClick={this.getResults}>Submit</button>
        </form>
        <div>
          <button onClick={this.handleClick} name="get">GET</button>
          <button onClick={this.handleClick} name="put">PUT</button>
          <button onClick={this.handleClick} name="post">POST</button>
          <button onClick={this.handleClick} name="delete">DELETE</button>
        </div>

        {!this.state.display ? "" :
          <div>
            <h3>URL: {this.state.url}</h3>
            <h3>METHOD: {this.state.method}</h3>
          </div>
          }

      </div>
    )
  }
}

export default Form;