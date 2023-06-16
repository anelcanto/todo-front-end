import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


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

  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        // Add a random id which is used to delete
        id: Math.random(),

        // Add a user value to list
        value: this.state.userInput,
      };

      // Update list
      const list = [...this.state.list];
      list.push(userInput);

      // reset state
      this.setState({
        list,
        userInput: "",
      });
    }
  }


  render() {
    return (
      <>
        <FormControl
          placeholder="add item . . . "
          size="lg"
          value={this.state.userInput}
          onChange={(item) => this.updateInput(item.target.value)}
          aria-label="add something"
          aria-describedby="basic-addon2"
        />
        <Button variant="dark" className="mt-2" onClick={() => this.addItem()}>ADD</Button>
      </>
    );
  }
}

export default App;