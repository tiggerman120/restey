import React from 'react';
import List from '../list/list';

class History extends React.Component {
  render() {
    return (
      <div id="historyBox">
        <h3>history</h3>
        <List>
          {this.props.results}
        </List>
      </div>
    )
  }


}

export default History;
