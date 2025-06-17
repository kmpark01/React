import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BoardUpdate = () => {
  
  const {idx} = useParams();
  const [boardDetail, setBoardDetail] = useState(null);
  const [inputs, setInputs] = useState({
    idx : idx,
    title : '',
    writer : '',
    content : '',
  });

  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    const{name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }

  const getBoardListByIdx = async () => {
    const resp = await axios.get(`/board/${idx}`);
    if(resp.status === 200){
      const data = resp.data;
      setBoardDetail(data);
      setInputs({
        idx: data.idx,
        title: data.title,
        writer: data.writer,
        content: data.content
      });
    }
  }

  useEffect(() => {
      getBoardListByIdx();
    }, [idx])


  const updateBoard = async () => {
    const resp = await axios.put('/board', inputs);
    if(resp.status === 200){
      alert('게시글 수정 성공');
      navigate(`/board/${idx}`);
    }else{
      new Error('게시글 수정 실패...');
    }
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

  if (!boardDetail) return <div>로딩 중...</div>;

  return (
    <div>
      <h4>{idx}번 게시물 수정</h4>
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
        <button onClick={updateBoard}>수정하기</button>
        <button onClick={resetInputs}>다시 입력</button>
        <button onClick={moveToBoardList}>목록으로 이동</button>
      </div>
    </div>
  );
};

export default BoardUpdate;