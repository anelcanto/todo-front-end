import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './custom.css';
import TodoList from "./components/TodoList";


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
