import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../actions/counterAction';
import { addItem, deleteItem } from '../actions/cartAction';

const Product = () => {
  
  // store에 접근해서 state 가져오기
  const counter = useSelector(state => state.counter.count);
  

  // 1. cart state 가져오고 찍어보기
  const cart = useSelector(state => state.cart);
  const items = cart.map((item, index) => (
      <li key={item.id}>{item.productName} - {item.price}원</li>
    ));

  // dispatch를 사용하기 위한 준비
  const dispatch = useDispatch();

  // state를 변경하는 함수들
  const handleIncrease = () => {
    dispatch(increase(1));
  }

  const handleDecrease = () => {
    dispatch(decrease());
  }

  const handleAddItem = () => {
    dispatch(addItem());
  }

  const handleDeleteItem = () => {
    dispatch(deleteItem());
  }

  return (
    <div>
      <h1>Hello Redux</h1>
      <p>{counter}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button><br /><hr />

      <ul>{items}</ul>
      <button onClick={handleAddItem}>아이템 추가</button>
      <button onClick={handleDeleteItem}>아이템 삭제</button>
    </div>
  );
};

export default Product;