import { 
        ADD_POST, 
        UPDATE_POST, 
        GET_POST, 
        GET_ALL_POSTS, 
        DELETE_POST, 
        ADD_COMMENT, 
        DELETE_COMMENT 
      } from './actionTypes';

const INITIAL_STATE = {}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      // return {...state, cart: addToCart({...state.cart}, action.payload)};
    case GET_POST:
      // return {...state, cart: removeFromCart({...state.cart}, action.payload)};
    case ADD_POST:
      // return {...state, currentDiscountKey: action.payload }
    case UPDATE_POST:
      // return {...state, currentDiscountKey: null}
    case DELETE_POST:
    case ADD_COMMENT:
    case DELETE_COMMENT:
    default:
      console.warn("Unable to find action type: ", action.type);
      return state;
  }
}

export default rootReducer;