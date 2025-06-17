import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BoardDetail = () => {

  /**
   1. idx 라는 param을 통해서 해당 컴포넌트로 이동
   2. 전달 받은 idx 파라미터를 통해 api에 데이터 요청
   3. 요청 받은 데이터 콘솔에 출력
  */

  const [boardDetail, setBoardDetail] = useState(null);
  const { idx } = useParams();
  const navigate = useNavigate();

  const getBoardListByIdx = async () => {
    const resp = await axios.get(`/board/${idx}`);
    if(resp.status === 200){
      const data = resp.data;
      setBoardDetail(data);
      console.log(boardDetail);
      
    }else{
      new Error('데이터 실패...');
    }
  }

  useEffect(() => {
    getBoardListByIdx();
  }, [idx])

  const handleEdit = () => {
    navigate(`/update/${idx}`);
  }

  const handleDelete = async () => {
    const resp = await axios.delete(`/board/${idx}`)
    if(resp.status === 200){
      alert('게시글이 삭제되었습니다.');
      navigate('/board');
    }else{
      new Error('삭제 실패...');
    }
  }

  const moveToBoardList = () => {
    navigate('/board');
  }
 
  if (!boardDetail) return <div>로딩 중...</div>; // 데이터 로딩 처리

  return (
    <div>
      <ul>
        <li>작성자 : {boardDetail.writer}</li>
        <li>제목 : {boardDetail.title}</li>
        <li>내용 : {boardDetail.content}</li>
        <li>작성일 : {boardDetail.regdate}</li>
      </ul>
      <div>
        <button onClick={handleEdit}>수정</button>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={moveToBoardList}>목록으로 이동</button>
      </div>
    </div>
  );
};

export default BoardDetail;