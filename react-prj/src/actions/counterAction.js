import { INCREASE, DECREASE } from "../reducers/type";

function increase(num){
  return{
    type : INCREASE,
    payload : num
  }
}

function decrease(){
  return{
    type : DECREASE
  }
}
export {increase, decrease};