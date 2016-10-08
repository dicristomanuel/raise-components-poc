import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello worlds!
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));
