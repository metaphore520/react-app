import React, { Component } from "react";

function withCar(NewComponent) {
  return class CustomComponent extends Component {
    state = {
      prop1: "Nabil",
      prop2: "Sarwar",
      counter: 0,
    };

    constructor(props) {
      super(props);
    }

    driveTheCar = () => {
      this.setState({ counter: this.state.counter + 1, prop1: this.state.prop1 + this.state.counter });      
    };

    render() {
      const { prop1, prop2, counter } = this.state;
      return (
        <NewComponent
          drivingProcess={() => this.driveTheCar()}
          parts={prop1}
        ></NewComponent>
      );
    }
  };
}

export default withCar;
