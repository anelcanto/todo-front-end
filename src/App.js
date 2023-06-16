import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";



class App extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      userInput: "",
      list: [],
    };
  }

  render() {
    return (<div>Task</div>);
  }
}

export default App;