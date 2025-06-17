import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BoardWrite = () => {

  const [inputs, setInputs] = useState({
    title : '',
    writer : '',
    content : '',
  });

  const handleInputChange = (e) => {
    const{name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }

  const navigate = useNavigate();

  const registerBoard = async () => {

    // 1. 빈 값 검증 방법 - 1
    const {title, writer, content} = inputs;
    if(!title || !writer || !content){
      alert('모든 내용을 입력해주세요.');
      return;
    }

    // 2. 빈 값 검증 방법 -2 
    const inputArr = Object.values(inputs);
    const isEmpty = inputArr.some(value => value === '');
    if(isEmpty){
      alert('모든 내용을 입력해주세요.');
      return;
    }

    const resp = await axios.post('/board', inputs);
    if(resp.status === 200){
      alert('게시글 등록 성공');
      navigate('/board');
    }else{
      new Error('데이터 실패...');
    }
    console.log(inputs);
  }

  const resetInputs = (e) => {
    setInputs({
      title : '',
      writer : '',
      content : ''
    });
  }

  const moveToBoardList = () => {
    navigate('/board');
  }
  return (
    <div>
      <div>
        <label>제목</label>
        <input type="text" onChange={handleInputChange} value={inputs.title} name='title' />
      </div>
      <div>
        <label>작성자</label>
        <input type="text" onChange={handleInputChange} value={inputs.writer} name='writer' />
      </div>
      <div>
        <label>내용</label>
        <textarea onChange={handleInputChange} value={inputs.content} name='content' cols='30' rows='10'></textarea>
      </div>
      <div>
        <button onClick={registerBoard}>등록</button>
        <button onClick={resetInputs}>다시 입력</button>
        <button onClick={moveToBoardList}>목록으로 이동</button>
      </div>

    </div>
  );
};

export default BoardWrite;