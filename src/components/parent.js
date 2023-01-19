import React, { Component } from "react";
import ChildComponent from "./child";
import LatestInfo from "./state_func";

class ParentComponent extends Component {
  render() {
    const { data, addItem, resetVal,CardTitle,CardFooter } = this.props;
    return (
      <React.Fragment>
        <h1>This is parent component</h1>
        {data.map((item) => (
          <ChildComponent
            key={item.id}
            data={item}
            addItem={addItem}
            resetVal={resetVal}
          ></ChildComponent>
        ))}
        <LatestInfo
          CardTitle={CardTitle}
          CardFooter={CardFooter}
        ></LatestInfo>
      </React.Fragment>
    );
  }
}

export default ParentComponent;
