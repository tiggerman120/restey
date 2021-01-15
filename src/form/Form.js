import { render } from '@testing-library/react';
import './Form'
import React from 'react';
import superagent from 'superagent';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: '',
      content: '',
      display: false,
      imageUrl: '',
      method: '',
      title: '',
      url: {},
      userId: '',
    }
    if (this.state.method) { this.setState({ display: true }) }
  }

  handleSubmit = e => {
    e.preventDefault();
    const url = e.target.url.value;
    this.setState({ url })
    if (this.state.url) { this.setState({ display: true }) }
  }

  handleClick = e => {
    const method = e.target.name
    //console.log(e);
    this.setState({ method })
  }

  getResults = async (e) => {
    if (this.state.method === 'post') {
      console.log(`i am in the post if statement`)
      this.postResults()
    } else {
    console.log(this.state)
    const url = this.state.url;
    const headers = {};
    const results = await fetch(url, { method: this.state.method, mode: 'cors' })
      .then(response => {
        if (response.status !== 200) return;
        for (var pair of response.headers.entries()) {
          headers[pair[0]] = pair[1]

          this.props.saveHeaders(headers);
          // if (pair[0] === 'x-total-count') {
          //     this.setState({
          //         total: pair[1]
          //       })
          //     }
        }
        var savedResult = JSON.stringify(response);
        localStorage.setItem('savedMethod', savedResult);
        return response.json();
      });
    this.props.giveAppResults(results)
    }
  }

  postResults = async (e) => {
    const url = this.state.url;
    let obj = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-requested-with": "XMLHttpRequest"
      },
      body: JSON.stringify({
          title: this.state.title,
          content: this.state.content,
          userId: this.state.userId,
          categoryId: this.state.categoryId,
          imageUrl: this.state.imageUrl,
      })
    }
    let results
    
      results = await fetch(url, obj)
        .then(response => {
          return response.json();
        })
        console.log(results);
    this.props.postAppResults(results)
  }

  onTitleChange = e => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  onContentChange = e => {
    e.preventDefault();
    this.setState({ content: e.target.value });
  }

  onUserIdChange = e => {
    e.preventDefault();
    this.setState({ userId: e.target.value });
  }

  onCategoryIdChange = e => {
    e.preventDefault();
    this.setState({ categoryId: e.target.value });
  }

  onImageUrlChange = e => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value })
  }

  render() {
    return (
      <div id="form">
        <form onSubmit={this.handleSubmit}>
          <input name="url" placeholder="enter a url" type="text" />
          <button type="submit" onClick={this.getResults}>Submit</button>

          {(this.state.method === 'post' ? '' : '')}
        </form>
        <div>
          <button onClick={this.handleClick} name="get">GET</button>
          <button onClick={this.handleClick} name="put">PUT</button>
          <button onClick={this.handleClick} name="post">POST</button>
          <button onClick={this.handleClick} name="delete">DELETE</button>

          {(this.state.method === 'post' || this.state.method === 'put') ?
            (<fieldset>
              <legend>REQBODY</legend>
              <label>
                title:
              <input onChange={this.onTitleChange} type="text" name="title" />
              </label>
              <label>
                content:
              <input onChange={this.onContentChange} type="text" name="content" />
              </label>
              <label>
                userId:
              <input onChange={this.onUserIdChange} type="text" name="userId" />
              </label>
              <label>
                categoryId:
              <input onChange={this.onCategoryIdChange} type="text" name="categoryId" />
              </label>
              <label>
                imageUrl:
              <input onChange={this.onImageUrlChange} type="text" name="imageUrl" />
              </label>
            </fieldset>)
            : ''
          }
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