// src/Calculator.js
import React from "react";

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <input
          type="text"
          value={this.props.displayValue}
          readOnly
          className="Value"
        />
        <div className="buttons">
          <button onClick={() => this.props.onClick("1")}>1</button>
          <button onClick={() => this.props.onClick("2")}>2</button>
          <button onClick={() => this.props.onClick("3")}>3</button>
          <button onClick={() => this.props.onClick("C")}>C</button>
          <button onClick={() => this.props.onClick("4")}>4</button>
          <button onClick={() => this.props.onClick("5")}>5</button>
          <button onClick={() => this.props.onClick("6")}>6</button>
          <button onClick={() => this.props.onClick("+")}>+</button>
          <button onClick={() => this.props.onClick("7")}>7</button>
          <button onClick={() => this.props.onClick("8")}>8</button>
          <button onClick={() => this.props.onClick("9")}>9</button>
          <button onClick={() => this.props.onClick("-")}>-</button>
          <button onClick={() => this.props.onClick("0")} className="small">
            0
          </button>
          <button onClick={() => this.props.onClick(".")} className="small">
            .
          </button>
          <button onClick={() => this.props.onClick("*")} className="small">
            *
          </button>
          <button onClick={() => this.props.onClick("/")} className="small">
            /
          </button>
          <button onClick={() => this.props.onClick("=")} className="small">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
