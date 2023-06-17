import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";


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

      console.log(userInput)

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

  // Function to delete item from list use id to delete
  deleteItem(key) {
    const list = [...this.state.list];

    // Filter values and leave value which we need to delete
    const updateList = list.filter((item) => item.id !== key);

    // Update list in state
    this.setState({
      list: updateList,
    });
  }


  render() {
    return (
      <>
        <FormControl
          placeholder="add item . . . "
          size="lg"
          value={this.state.userInput}
          onChange={
            (item) => this.updateInput(item.target.value)
          }
          aria-label="add something"
          aria-describedby="basic-addon2"
        />
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup>
            <InputGroup>

              <Button variant="dark" className="mt-2" onClick={() => this.addItem()}>ADD</Button>
            </InputGroup>
          </InputGroup>
        </Col>
      </>
    );
  }
}

export default App;