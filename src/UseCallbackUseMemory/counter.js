import React from "react";

function Counter({ count }) {
  console.log("Counter Component Rendered");
  return <h1>Rendering Count Component {count}</h1>;
}

export default React.memo(Counter);
//export default Counter;