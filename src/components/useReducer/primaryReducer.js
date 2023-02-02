import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
function PrimaryReducer() {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="custom">
      <h1>{counter}</h1>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => dispatch("increment")}
      >
        Increment{" "}
      </button>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => dispatch("decrement")}
      >
        Decrement{" "}
      </button>
    </div>
  );
}

export default PrimaryReducer;
