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
  // 동일 상품 중복 확인
  const dupleCheck = productList.some(item => {
    const name1 = item.name.replace(/\s*/g, '').toLowerCase();
    const name2 = product.name.replace(/\s*/g, '').toLowerCase();
    return name1 === name2;
  });

  if (dupleCheck) {
    alert('기존에 동일한 상품이 존재합니다.');
    return;
  }

  const updatedProductList = [...productList, product];
  setProductList(updatedProductList);
  setProduct({ name: '', amount: '' }); // 입력창 초기화
};

  const remove = (indexToRemove) => {
    const removeProductList = productList.filter((_, index) => index !== indexToRemove);
    setProductList(removeProductList);
  }

  const handleChangeQuantityOfProduct = (indexToUpdate, newAmount) => {
  const newProductList = productList.map((product, i) => {
    if (i === indexToUpdate) {
      return { ...product, amount: newAmount };
    }
    return product;
  });
  setProductList(newProductList);
};

  return (
    <div>
      <input type="text" placeholder='상품 이름' onChange={handleInputChange} name='name' value={product.name} />
      <input type="text" placeholder='수량' onChange={handleInputChange} name='amount' value={product.amount}/>
      <button onClick={add}>추가</button>
      <ul>
        {productList.map((product, index) => {
          return <li key={index}>{product.name} - <input type="number" 
                                                          value={product.amount} 
                                                          onChange={(e) => handleChangeQuantityOfProduct(index, e.target.value)} 
                                                          /> 
                                                          <button onClick={() => remove(index)}>삭제</button>
                                                          </li>
                                                        })}
      </ul>
    </div>
  );
};

export default ShoppingList;