import React, { Component, useCallback, useMemo, useState } from "react";
import Button from "./Button";
import Counter from "./counter";
import Title from "./title";

function Main() {
  const [counter, setCounter] = useState(0);
  const [counter_1, setCounter_1] = useState(0);

  const increamentCounter = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  const increamentCounter_1 = useCallback(() => {
    setCounter_1((prevState) => prevState + 1);
  }, []);
  const heavyDuty = useMemo(() => {
    let i = 0;
    for (let index = 0; index < 1000000000; index++) {
      i += index;
    }
    return counter % 2 == 0;
  }, [counter]);

  const my = useMemo(() => {
    return 8;
  }, [counter]);

  return (
    <div>
      <Title></Title>
      <h1>{heavyDuty ? "Odd" : "Even"}</h1>
      <Counter count={counter}></Counter>
      <Button handleClick={increamentCounter}>Increment Counter</Button>

      <Counter count={counter_1}></Counter>
      <Button handleClick={increamentCounter_1}>Increment Counter 1</Button>
    </div>
  );
}

export default Main;
