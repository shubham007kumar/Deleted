import {
  FAILURE_WISHLIST,
  POST_WISHLIST,
  SUCCESS_WISHLIST,
} from "./actionTypes";

const init = {
  data: null,
  isLoading: false,
  isError: true,
};

export const Wishlistreducer = (state = init, { type, payload }) => {
  switch (type) {
    case POST_WISHLIST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SUCCESS_WISHLIST: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case FAILURE_WISHLIST: {
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
