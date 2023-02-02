import React, { Component, useEffect, useRef } from "react";

function InputField() {
  const inputField = useRef(null);
  useEffect(() => {
    inputField.current.focus();
  });
  return (
    <div className="custom">
      <input
        type="text"
        className="form-control"
        placeholder="Please Enter Some Text.."
        ref={inputField}
      />
    </div>
  );
}

export default InputField;
