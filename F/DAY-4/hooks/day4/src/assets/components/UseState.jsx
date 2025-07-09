import React, { useState } from 'react';
// import React from 'react';


function UseState() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
    console.log("count is: " + count);
  };

  const addpevious = () => {
    setCount(pev => pev+1);
    console.log("count is: " + count);
  };

  const subValue = () => {
    setCount(count - 1);
    console.log("count is: " + count);
  };


  const setBackground = (color) => {
    document.body.style.background = color;
  };
 
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter: {count}</h2>

      <button type="button" onClick={addValue}>Increase</button>
      <button type="button" onClick={addpevious}>previous</button>
      <button type="button" onClick={subValue}>Decrease</button>
      <button type="button" onClick={() => setCount(0)}>Reset</button>


      <h1>BG Color App</h1>

      <button type="button" onClick={() => setBackground("red")}>RED</button>
      <button type="button" onClick={() => setBackground("green")}>GREEN</button>
      <button type="button" onClick={() => setBackground("blue")}>BLUE</button>

      
    </>
  );
}

export default UseState;
