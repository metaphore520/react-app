import React, { useState } from "react";
import { ReactDOM } from "react";

function AppFunc() {
  // state
  const [task, setTask] = useState("");
  const [warning, setWarning] = useState("Good Choice");

  // event handling
  const handleInput = (e) => {
    let inputText = e.target.value;
    let warningTemp = inputText.includes(".js")
      ? "Please Learn Javascript First"
      : "Good Choice";

    setTask(inputText);
    setWarning(warningTemp);
  };
  // returned html
  return (
    <div>
      <textarea value={task} onChange={handleInput}></textarea>
      <h1>{warning}</h1>
    </div>
  );
}

export default AppFunc;
