import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FormControl from "react-bootstrap/FormControl";

class App extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      userInput: "",
      list: [],
    };
  }

  // Set a user input value
  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }


  render() {

    // In render method
    <FormControl
      placeholder="add item . . . "
      size="lg"
      value={this.state.userInput}
      onChange={(item) => this.updateInput(item.target.value)}
      aria-label="add something"
      aria-describedby="basic-addon2"
    />

    return (
      <FormControl
        placeholder="add item . . . "
        size="lg"
        value={this.state.userInput}
        onChange={(item) => this.updateInput(item.target.value)}
        aria-label="add something"
        aria-describedby="basic-addon2"
      />
    );
  }
}

export default App;