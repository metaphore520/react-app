import { useState } from "react";

function TaskObj() {
  const [data, setData] = useState({ theme: 'dark', style: 'sass' });

  const handleChange = (event) => {
    setData({ ...data, theme: event.target.value });
  };

  const { theme, style } = data;
  return (
    <div>
      <input name="data" type="text" onChange={handleChange} value={theme} />
       <h1>Data.theme : {theme}</h1> 
    </div>
  );
}

export default TaskObj;
