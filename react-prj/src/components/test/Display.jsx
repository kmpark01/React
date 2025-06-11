import React, { useState } from 'react';

const Display = (props) => {
  const [currentNum, setCurrnetNum] = useState(0);
  
  const increase = () => {
    if(currentNum < props.maxNum){
      setCurrnetNum(prev => prev + 1);
    }
  }

  const decrease = () => {
    if(currentNum > 0){
      setCurrnetNum(prev => prev - 1);
    }
  }
  return (
    <div>
      <h2>총 {currentNum}/{props.maxNum}명</h2>
      <button onClick={increase}>증가</button>
      <button onClick={decrease} disabled={currentNum === 0}>감소</button>
    </div>
  );
};

export default Display;