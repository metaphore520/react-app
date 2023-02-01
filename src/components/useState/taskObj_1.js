import { useState } from "react";

function TaskObj_1() {
  let [data, setData] = useState(0);

  const handleClick = () => {
    setData(data + 1);
  };

  const handleClick_5t = () => {
    setData(data + 5);
    for (let index = 0; index < 5; index++) {
      setData((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <h1>
        Count ====== <span>{data}</span>
      </h1>
      <button className="btn btn-primary" onClick={handleClick_5t}>
        {" "}
        Increase Counter
      </button>
    </div>
  );
}

export default TaskObj_1;
