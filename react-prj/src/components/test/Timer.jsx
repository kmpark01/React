// import React, { useEffect, useState } from 'react';

// const Timer = () => {

//   const [timer, setTimer] = useState(null);
//   const [second, setSecond] = useState(0);

//   const start = () => {
//     const interval = setInterval(() => {
//       setSecond(prev => prev + 1);
//     }, 1000);
//     setTimer(interval);
//   }
//   const stop = () => {
//     clearInterval(timer);
//   }

//   const reset = () => {
//     setSecond(0);
//     clearInterval(timer);
//   }

//   return (
//     <div>
//       <h2>Timer</h2>
//       <p>경과 시간 : {second}초</p>
//       <button onClick={start}>시작</button>
//       <button onClick={stop}>정지</button>
//       <button onClick={reset}>초기화</button>
//     </div>
//   );
// };

// export default Timer;

import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let intervalId;
    if(isRunning){
      intervalId = setInterval(() => {
        setSecond(prev => prev + 1);
      }, 1000);
    }else{
      setIsRunning(false);
    }
    return () => {
      clearInterval(intervalId);
    }
  }, [isRunning])

  const start = () => {
    setIsRunning(true);
  }

  const stop = () => {
    setIsRunning(false);
  }

  const reset = () => {

  }

  return (
    <div>
      <h2>Timer</h2>
       <p>경과 시간 : {second}초</p>
       <button onClick={start}>시작</button>
       <button onClick={stop}>정지</button>
       <button onClick={reset}>초기화</button>
    </div>
  );
};

export default Timer;