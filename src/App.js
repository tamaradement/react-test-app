import './App.css';
import React, { Component }  from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {header: 'Learning about eslint'};
  }

  render() {
    let someVar = this.state.header + ', a new edition'
    return (<h1>{someVar}</h1>);
  }
}

export default App;
