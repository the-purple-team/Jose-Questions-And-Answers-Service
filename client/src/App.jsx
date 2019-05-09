import React from 'react';
import ReactDOM from 'react-dom';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'What are you doing here?'
    }
  }


  render() {
    return (
      <div>
        <h1>Questions will go here</h1>
        <div>{this.state.test}</div>
      </div>
    )
  }
}

ReactDOM.render(<Questions />, document.getElementById('App'));