import React, { useState } from 'react';

const Counter = () => {
  
  let [count, setCount] = useState(0);
  const handleCounting = () => {
    console.log('increase btn clicked');
    setCount(prev => prev + 1);
    setCount(prev => prev + 2);
    setCount(prev => prev + 3);
  }
  return (
    <div>
      <p>{count}번 클릭!</p>
      <button onClick={handleCounting}>Click!</button>
    </div>
  );
};

export default Counter;