import React from 'react';
import ReactJson from 'react-json-view';
import './Results.scss';

class Results extends React.Component {
  render() {
    console.log(this.props)
    return(
      <div id="resultsBox">
        <h3>results</h3>
        <p>COUNT: { this.props.count }</p>
        <ReactJson src={ this.props.results } />
        <ReactJson src={ this.props.headers } />
      </div>
    )
  }
}

export default Results;
