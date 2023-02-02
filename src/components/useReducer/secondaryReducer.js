import { useReducer } from "react";

const initialState = {
  counter: 0,
  counter_1: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, counter: state.counter + 1};

    case "decrement":
      return {...state, counter: state.counter - 1};;

    case "increment1":
      return {...state, counter_1: state.counter_1 + 1};;

    case "decrement1":
      return {...state, counter_1: state.counter_1 - 1};;

    default:
      return state;
  }
};

function SecondaryReducer() {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="custom">
        <h1>{counter.counter}</h1>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
      </div>
      <div className="custom">
        <h1>{counter.counter_1}</h1>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => dispatch({ type: "increment1" })}
        >
          Increment
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => dispatch({ type: "decrement1" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default SecondaryReducer;
