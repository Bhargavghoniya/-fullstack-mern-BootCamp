import React, { useState, useMemo } from 'react';

function UseMemo() {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(100);
  const [text, setText] = useState("");

  const doubleIncrement = useMemo(() => {
    console.log("Calculating double of increment");
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return increment * 2;
  }, [increment]);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px', fontFamily: 'Arial' }}>
      <h2 style={{ color: 'blue' }}>useMemo</h2>
      <p>Double of Increment Count: <strong>{doubleIncrement}</strong></p>
      <p>Decrement Count: <strong>{decrement}</strong></p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
        <button
          onClick={() => setIncrement(increment + 1)}
          style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none' }}
        >
          Increment {increment}
        </button>

        <button
          onClick={() => setDecrement(decrement - 1)}
          style={{ backgroundColor: 'crimson', color: 'white', padding: '10px 20px', border: 'none' }}
        >
          Decrement {decrement}
        </button>
      </div>

      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '8px 10px', width: '200px' }}
      />
    </div>
  );
}

export default UseMemo;
