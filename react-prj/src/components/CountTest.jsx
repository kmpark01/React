import React, { useEffect, useState } from 'react';

const CountTest = () => {

  let [count, setCount] = useState(0);
  let [number, setNumber] = useState(0);
  
  const handleCounting = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    if(count < 4 && count !== 0){
      setNumber(number + 1);
    }
  }, [count]);

  return (
    <div>
      <p>number : {number}</p>
      <p>count : {count}</p>
      <button onClick={handleCounting}>Click!!</button>
    </div>
  );
};

export default CountTest;