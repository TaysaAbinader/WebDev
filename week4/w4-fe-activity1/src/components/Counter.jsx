import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  function changeTheme(e) {
    const id = e.target.id;
    if (id === 'dark') {
      setTheme('dark');
    } else if (id === 'light'){
      setTheme('light');
    }
    else if (id === 'toggle')
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  function handleIncrement() {
    setCount(c => c + 1);
  };
  function handleDecrement(){
    setCount(c => c - 1);
  };

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button id="dark" onClick={changeTheme}>Dark</button>
      <button id = "light" onClick={changeTheme}>Light</button>
      <button id="toggle" onClick={changeTheme}>Toggle</button>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
