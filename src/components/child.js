import React, { Component } from "react";

class ChildComponent extends Component {
  state = {
    count: 0
  };

  increment = () =>  {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    const { data } = this.props; //  onClick={this.state.props.onItemAdd}
    //console.log("Props ------------",this.props);
    //console.log("This ------------",this);
    return (
      <React.Fragment>
        <h1>This is child component</h1>
        <h1>{data.value}</h1>
        <button
          className="btn btn-primary"
          onClick={() => {this.increment();this.props.addItem(this.state.count)}}
        >
          Button---
          {data.value} <span>--------------</span>
          {data.id}
        </button>
        <button onClick={() => {this.props.resetVal()}}>Reset</button>
      </React.Fragment>
    );
  }
}

export default ChildComponent;
