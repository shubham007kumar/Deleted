import { FAILURE_CART, GET_CART, POST_CART, SUCCESS_CART } from "./actionTypes";
  
  const init = {
    data:'',
    dataList:[],
    isLoading: false,
    isError: false,
  };
  
  export const cartreducer = (state = init, { type, payload }) => {
    switch (type) {
      case GET_CART: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case SUCCESS_CART: {
        return {
          ...state,
          isLoading: false,
          data:payload
        };
      }
      case POST_CART: {
        return {
          ...state,
          isLoading: false,
          dataList:[...state.dataList,...payload]
        };
      }
      case FAILURE_CART: {
        return {
          ...state,
          isError: true,
          isLoading: false,
        };
      }
      default:
        return state;
    }
  };
  