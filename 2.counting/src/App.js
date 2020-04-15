import React, { Component } from "react";

class App extends Component {
  state = {
    clicks: 0,
    show: true,
  };
  Increment = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  Decrement = () => {
    this.setState({ clicks: this.state.clics - 1 });
  };

  render() {
    return (
      <div>
        <h1>Let's do some counting</h1>
        <button onClick={this.Increment}> Click for + 1 </button>
        <button onClick={this.Decrement}> Click for - 1 </button>
        {this.state.show ? <h2>{this.state.clicks}</h2> : ""}
      </div>
    );
  }
}

export default App;
