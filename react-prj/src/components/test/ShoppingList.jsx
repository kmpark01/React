import React, { useState } from 'react';

const ShoppingList = () => {
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState({
    name : '',
    amount : ''
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setProduct({
      ...product,
      [name] : value
    });
  }

  const add = () => {
    const updateProductList = [...productList, product];
    setProductList(updateProductList);
  }

  const remove = (indexToRemove) => {
    const removeProductList = productList.filter((_, index) => index !== indexToRemove);
    setProductList(removeProductList);
  }

  return (
    <div>
      <input type="text" placeholder='상품 이름' onChange={handleInputChange} name='name' value={product.name} />
      <input type="text" placeholder='수량' onChange={handleInputChange} name='amount' value={product.amount}/>
      <button onClick={add}>추가</button>
      <ul>
        {productList.map((product, index) => {
          return <li key={index}>{product.name} - <input type="number" value={product.amount} /> <button onClick={() => remove(index)}>삭제</button></li>
        })}
      </ul>
    </div>
  );
};

export default ShoppingList;