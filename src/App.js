import "./App.css";
import React, { Component } from "react";
import Calculator from "./components/calculator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
    };
  }
  handleClick = (value) => {
    let { displayValue } = this.state;

    if (value === "=") {
      try {
        displayValue = eval(displayValue);
      } catch (error) {
        displayValue = "Error";
      }
    } else if (value === "C") {
      displayValue = "0";
    } else {
      displayValue = displayValue === "0" ? value : displayValue + value;
    }

    this.setState({ displayValue });
  };
  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Calculator
          displayValue={this.state.displayValue}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
