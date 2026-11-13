import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count:0
    };
  }

  handleIncrease = () =>{
    this.setState({count: this.state.count + 1});
  }

  handleDecrease = () => {
    this.setState({count: this.state.count - 1});
  }

  handleReset = () => {
    this.setState({count:0})
  }

  render() {
    return(
        <div>
            <h3>{this.state.count}</h3>
            <button onClick={this.handleIncrease}>Increase</button>
            <button onClick={this.handleDecrease}>Decrease</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>
    );
  }
}

export default Counter;
