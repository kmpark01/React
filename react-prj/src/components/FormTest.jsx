import React, { useState } from 'react';

const FormTest = () => {

  const[user, setUser] = useState({
    name : '',
    age : '',
    email : '',
    gender : '남자',
    addr : '강남'
  });
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUser({
      ...user,
      [name] : value
    });
  }

  const handleSubmit = () => {
    console.log(user.name, user.age, user.email, user.gender, user.addr);
  }

  const resetButton = (e) => {
    setUser({
      name : '',
      age : '',
      email : '',
      gender : '남자',
      addr : '강남'
    })
  }

  return (
    <div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>이름</td>
            </tr>
            <tr>
              <td><input type='text' onChange={handleInputChange} value={user.name} name='name'/></td>
            </tr>
            <tr>
              <td>나이</td>
            </tr>
            <tr>
              <td><input type='text' onChange={handleInputChange} value={user.age} name='age'/></td>
            </tr>
            <tr>
              <td>이메일</td>
            </tr>
            <tr>
              <td><input type='text' onChange={handleInputChange} value={user.email} name='email'/></td>
            </tr>
            <tr>
              <td>
                <input type='radio' onChange={handleInputChange} value='남자' name='gender' defaultChecked/>남자
                <input type='radio' onChange={handleInputChange} value='여자' name='gender'/>여자
              </td>
            </tr>
            <tr>
              <td>
                <select onChange={handleInputChange} name="addr">
                  <option value='강남'>강남</option>
                  <option value='강북'>강북</option>
                  <option value='강동'>강동</option>
                  <option value='강서'>강서</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <button type='button' onClick={handleSubmit}>Click!</button>
                <button type='button' onClick={resetButton}>초기화</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
export default FormTest;