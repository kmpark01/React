import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const CartWrapper = styled.div`
  max-width : 80%;
  margin : auto;
  
  table{
    width : 100%;
  }
  
  td{
    text-align : center;
  }
`;


const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  const handleDeleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  }

  const handleItemIncrease = (id) => {
    dispatch({ type : 'INCREASE_ITEM', payload : id})
  }

   const handleItemDecrease = (id) => {
    dispatch({ type : 'DECREASE_ITEM', payload : id})
  }
  return (
    <CartWrapper>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품 이름</th>
            <th>수량</th>
            <th>가격</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map(product => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>
                    <button onClick={() => handleItemIncrease(product.id)}>+</button>
                    {product.count}
                    <button onClick={() => handleItemDecrease(product.id)} disabled={product.count === 1}>-</button>
                  </td>
                  <td>{product.price * product.count}</td>
                  <td><button onClick={() => handleDeleteItem(product.id)}>삭제</button></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </CartWrapper>
  );
};

export default Cart;