import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./components/child";
import ParentComponent from "./components/parent";
import ParentComp from "./components/composition/parent";
import ChildComp from "./components/composition/child";
import BMW from "./components/hoc/bmw";
import RangeRover from "./components/hoc/rangeRover";
import CarComp from "./components/render-props/car";
import PartsComp from "./components/render-props/PartsComp";
import Elephant from "./components/context-api/elephant";
import Zebra from "./components/context-api/zebra";
import Ant from "./components/context-api/ant";
import ThemeContext from "./components/context-api/context-all";
import AppFunc from "./components/useState/task";
import TaskObj from "./components/useState/taskObj";
import TaskObj_1 from "./components/useState/taskObj_1";
import UseEffect from "./useEffect/use-effect";
import Main from "./UseCallbackUseMemory/main";
import InputField from "./components/UseRefUseForwardRef/InputField";
import MainComp from "./components/UseRefUseForwardRef/main";
import PrimaryReducer from "./components/useReducer/primaryReducer";
import SecondaryReducer from "./components/useReducer/secondaryReducer";
import ComplexReducer from "./components/useReducer/complexReducer";
import WindowResizer from "./components/customHook/windowResizer";


class App extends Component {
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
    CardTitle: "This is Card Title",
    CardFooter: "This is Card Footer",
    theme: "dark-light",
  };

  constructor() {
    super();
    console.log("CONSTRUCTOR PHASE.....................");
  }

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
    let tempCounter = [...this.state.counter];
    tempCounter = tempCounter.map((x) => {
      x.value = x.value + ".....RESET";
      console.log("1");
      return x;
    });
    this.setState({ counter: tempCounter });
  };
  render() {
    const { theme } = this.state;
    console.log("RENDER PHASE.....................");
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>

        <div className="row">
          <div className="col-md-12">
            <ParentComponent
              data={this.state.counter}
              addItem={this.btnClicked}
              resetVal={this.reset}
              CardTitle={this.state.CardTitle}
              CardFooter={this.state.CardFooter}
            ></ParentComponent>
          </div>
        </div>
        <ParentComp>
          {(prop1, prop2) => (
            <div>
              <ChildComp prop1={prop1} prop2={prop2}></ChildComp>
              <ChildComp prop1={prop1} prop2={prop2}></ChildComp>
            </div>
          )}
        </ParentComp>
        <BMW></BMW>
        <RangeRover></RangeRover>

        <CarComp>
          {(name, handleClickEvents) => (
            <PartsComp
              name={name}
              handleClickEvents={handleClickEvents}
            ></PartsComp>
          )}
        </CarComp>
        <ThemeContext.Provider value={{ theme }}>
          <Elephant>
            <Zebra>
              <Ant></Ant>
            </Zebra>
          </Elephant>
        </ThemeContext.Provider>
        <AppFunc></AppFunc>
        <TaskObj></TaskObj>
        <TaskObj_1></TaskObj_1>
        <Main></Main>
        <InputField></InputField>
        <MainComp></MainComp>
        <PrimaryReducer></PrimaryReducer>
        <SecondaryReducer></SecondaryReducer>
        <ComplexReducer></ComplexReducer>
        <WindowResizer></WindowResizer>
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log("COMPONENT DID MOUNT PHASE.....................");
  }
  componentWillUnmount() {
    console.log("COMPONENT WILL UNMOUNT PHASE.....................");
  }
}

export default App;
