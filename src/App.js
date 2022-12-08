import './App.css';
import React, { Component }  from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {header: 'Learning about eslint'};
  }

  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <h2>Some changes</h2>
      </div>
    
    );
  }
}

export default App;
