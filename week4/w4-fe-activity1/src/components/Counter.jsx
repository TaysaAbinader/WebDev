import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  function changeTheme() {
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
      <h1>Theme</h1>
      <button onClick={changeTheme}>Press to Change Theme</button>
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
