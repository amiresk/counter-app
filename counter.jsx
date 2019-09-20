import React, { Component } from "react";
// import { throwStatement } from "@babel/types";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = product => {
    console.log("product", product);
    // this.state.count++;
    this.setState({ count: this.state.count + 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;

// constructor() {
//   super();
//   //console.log("constuctor", this);
//   this.handleIncrement = this.handleIncrement.bind(this);
// }

// handleIncrement() {
//   console.log("increment clicked", this.state.count);
// }
