import React, { useState } from 'react';

const Calculator = () => {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(0);
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    if(name === 'number1'){
      setNumber1(value);
    }
    else{
      setNumber2(value);
    }
  }

  const handleCalculate = (e) => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    const {name} = e.target;
    if(name === 'add'){
      setResult(num1 + num2);
    }
    else if(name === 'minus'){
      setResult(num1 - num2);
    }
    else if(name === 'multiply'){
      setResult(num1 * num2);
    }
    else if(name === 'divide'){
      setResult(num1 / num2);
    }
  }

  return (
    <div>
      <input 
        type='number'
        name='number1'
        value={number1}
        onChange={handleInputChange}/>
      <input 
        type='number'
        name='number2'
        value={number2}
        onChange={handleInputChange}/>
      <br/>
      <button name='add' onClick={handleCalculate}>더하기</button>
      <button name='minus' onClick={handleCalculate}>빼기</button>
      <button name='multiply' onClick={handleCalculate}>곱하기</button>
      <button name='divide' onClick={handleCalculate}>나누기</button>
      <p>결과 : {result}</p>
    </div>
  );
};

export default Calculator;