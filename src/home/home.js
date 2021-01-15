import React from 'react';
import List from '../list/list';

class Home extends React.Component {
  render() {
    return (
      <div id="homeBox">
      <h3 i am home></h3>
      <List>
        <ul>
            results={this.state.results}
        </ul>
      </List>
      </div>
    )
  }
}

export default Home;