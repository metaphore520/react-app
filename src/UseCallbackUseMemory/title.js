import React from "react";

const Title = () => {
  console.log("Title Component Rendered");
  return <h1>This is the Paragraph Title</h1>;
};

export default React.memo(Title);
//export default Title;