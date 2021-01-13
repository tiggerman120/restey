import React from 'react';
import ReactJson from 'react-json-view';

class Results extends React.Component {
  render() {
    return(
      <div id="resultsBox">
        <h3>results</h3>
        <p>COUNT: { this.props.count }</p>
        <ReactJson src={ this.props.results } />
        <p>HEADERS: {this.props.results.headers}</p>
      </div>
    )
  }
}

export default Results;
