const InputCount = ({maxNum, setMaxNum, setShowDisplay}) => {

  const handleInputChange = (e) => {
    setMaxNum(e.target.value);
  }

  const display = () => {
    if(maxNum !== 0){
      setShowDisplay(true);
    }
  }

  return (
    <div>
      <h2>최대 인원을 정하시오.</h2>
      <input type="text" onChange={handleInputChange} value={maxNum} />
      <button onClick={display}>확인</button>
    </div>
  );
};

export default InputCount;