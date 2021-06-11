import { FAILURE_REQUEST, GET_REQUEST, SUCCESS_REQUEST } from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  productList: [],
};

export const Productreducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SUCCESS_REQUEST: {
      return {
        isLoading: false,
        productList: payload,
      };
    }
    case FAILURE_REQUEST: {
      return {
        isError: true,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
