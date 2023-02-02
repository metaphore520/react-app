import React, { Component, useEffect, useRef } from "react";
import TextArea from "./TextArea";

function MainComp() {
  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  }, []);
  return <TextArea custom='custom' ref={textInput}></TextArea>;
}

export default MainComp;
