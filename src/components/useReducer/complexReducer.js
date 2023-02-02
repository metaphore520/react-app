import { useEffect, useReducer } from "react";

const initialState = {
  post: {},
  error: "",
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        post: action.data,
        error: "No Error.  Data Fetched successfully",
        loading: false,
      };
    case "ERROR":
      return {
        post: {},
        error: "Data fetching Error",
        loading: false,
      };
    default:
      return state;
  }
};

function ComplexReducer() {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => dispatch({ type: "SUCCESS",data:json.title }))
      .catch((error) => dispatch({ type: "ERROR" }));
  });

  return (
    <div className="custom">
      <h1> {data.loading ? "Loading data" : data.post}</h1>
      <h1> {data.error}</h1>
    </div>
  );
}
export default ComplexReducer;