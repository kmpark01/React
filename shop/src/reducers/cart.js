import { ADD_ITEM, DELETE_ITEM, INCREASE_ITEM, DECREASE_ITEM } from "./type";

const initialState=[];

const cart=(state=initialState, action)=>{
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter(item=>item.id!==action.payload);
    case INCREASE_ITEM:
      return state.map(item => item.id === action.payload ? { ...item, count: item.count + 1 } : item);
    case DECREASE_ITEM:
      return state.map(item => item.id === action.payload ? { ...item, count: item.count - 1 } : item);
    default:
      return state;
  }
}

export default cart;