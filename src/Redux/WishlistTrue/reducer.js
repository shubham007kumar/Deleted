import { FAILURE_TRUEWISH, GET_TRUEWISH, SUCCESS_TRUEWISH } from "./actionTypes";
  
  const init = {
    dataList:[],
    isLoading: false,
    isError: false,
  };
  
  export const trueWishtreducer = (state = init, { type, payload }) => {
    switch (type) {
      case GET_TRUEWISH: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case SUCCESS_TRUEWISH: {
        return {
          ...state,
          isLoading: false,
          dataList: payload,
        };
      }
      case FAILURE_TRUEWISH: {
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
  