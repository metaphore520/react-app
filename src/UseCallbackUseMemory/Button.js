import React from "react";

function Button({ handleClick, children }) {
  console.log("Button Component Rendered");
  return <button className="btn btn-primary btn-sm" onClick={handleClick}>{children}</button>;
}

export default React.memo(Button);
//export default Button;