import React, { Component } from "react";
import ChildComponent from "./child";

class ParentComponent extends Component {
  state = {
    counter: [
      {
        id: 1,
        value: "Rahim",
      },
      {
        id: 2,
        value: "Kahim",
      },
      {
        id: 3,
        value: "Mahim",
      },
    ],
  };
  //   constructor() {
  //     super();
  //   }
  btnClicked = (childVal) => {
    let tempCounter = [...this.state.counter];
    //tempCounter = tempCounter.map((x) => x.value + " -- " + childVal);
    tempCounter.push({
      id: Math.floor(Math.random() * 100),
      value: "Mahim" + childVal,
    });
    this.setState({ counter: tempCounter });
  };

  reset = () => {
    console.log("Reset Complete...............");
    let tempCounter = [...this.state.counter];
    //console.log(tempCounter);
    tempCounter = tempCounter.map((x) => {
      x.value = x.value + ".....RESET";
      console.log("1");
      return x;
    });
    console.log(tempCounter);
    this.setState({ counter: tempCounter });
  };
  render() {
    return (
      <React.Fragment>
        <h1>This is parent component</h1>
        {this.state.counter.map((item) => (
          <ChildComponent
            key={item.id}
            data={item}
            addItem={this.btnClicked}
            resetVal={this.reset}
          ></ChildComponent>
        ))}
      </React.Fragment>
    );
  }
}

export default ParentComponent;
