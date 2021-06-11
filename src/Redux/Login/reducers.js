import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const init = {
  Login: false,
  isLoading: false,
  isErrow: false,
  Loginmessage: "",
};

export const Loginreducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isErrow: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        Login: true,
        isLoading: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isErrow: true,
        isLoading: false,
        Loginmessage: payload,
      };
    }
    default:
      return state;
  }
};
