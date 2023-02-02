import React from "react";

function TextArea({ custom }, ref) {
  return (
    <div className={custom}>
      <div className="input-group">
        <span className="input-group-text">With textarea</span>
        <textarea
          ref={ref}
          className="form-control"
          aria-label="With textarea"
        ></textarea>
      </div>
    </div>
  );
}
const forwardedInput = React.forwardRef(TextArea);

export default forwardedInput;
