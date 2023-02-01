import { useEffect, useState } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState(new Date());

  // ComponentShouldUpdate,ComponentDidMount,ComponentDidUpdate,
  // ComponentWillUnMount

  // ComponentDidMount
  useEffect(() => {
    console.log("ComponentDidMount");
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("ComponentWillUnMount");
    };
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
    console.log("ComponentDidUpdate");
  });

  // ComponentDidUpdate Specific
  useEffect(() => {
    console.log("ComponentDidUpdate Specific");
  }, [counter, date]);

  //
  useEffect(() => {});

  return (
    <div>
      <h1>{counter}</h1>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default UseEffect;
