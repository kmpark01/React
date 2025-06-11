import { ADD_ITEM, DELETE_ITEM } from "../reducers/type";

function addItem(){
  return{
    type : ADD_ITEM,
    payload : {id : 2, productName : 'car', price : 3000}
  }
}

function deleteItem(){
  return{
    type : DELETE_ITEM,
    payload : 1
  }
}
export {addItem, deleteItem};