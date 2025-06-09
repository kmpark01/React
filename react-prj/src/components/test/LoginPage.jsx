import React, { useState } from 'react';

const LoginPage = () => {
  const [ck, setCk] = useState(false);
  const[user, setUser] = useState({
    id : '',
    password : ''
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUser({
      ...user,
      [name] : value
    });
  }

  const login = () => {
    if(user.id === authInfo.id && user.password === authInfo.password){
      setCk(true);
    }
    else{
      alert("유저 정보가 일치하지 않습니다");
    }
  }

  const logout = () => {
    setCk(false);
    setUser({
      id : '',
      password : ''
    });
  }

  const authInfo = {
    id : 'admin',
    password : '1234'
  }

  return (
    <div>
      <h2>로그인 / 로그아웃</h2>
      {
        ck ?
        <div>
          <h4>안녕하세요. {user.id}님</h4>
          <button onClick={logout}>로그아웃</button>
        </div> :
        <div>
          아이디 : <input type="text" onChange={handleInputChange} name='id' value={user.id}/>
          <br />
          비밀번호 : <input type="text" onChange={handleInputChange} name='password' value={user.password}/>
          <button onClick={login}>로그인</button>
        </div>
      }    
    </div>
  );
};

export default LoginPage;