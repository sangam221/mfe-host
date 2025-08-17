import {  createStore } from 'redux';

const initialState = {
  user: { name: 'Guest' },   
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: { name: action.payload }
      };
    default:
      return state;
  }
}
const store = createStore(rootReducer);
export default store;