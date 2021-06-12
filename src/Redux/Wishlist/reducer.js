import { FAILURE_WISHLIST, POST_WISHLIST, SUCCESS_WISHLIST } from "./actionTypes";

const init = {
  data:null,
  isLoading:false,
  isError:true,
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
        isLoading: false,
        data:payload,
      };
    }
    case FAILURE_WISHLIST: {
      return {
        isError: true,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
