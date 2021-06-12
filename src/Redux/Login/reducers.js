import { getData, savedata } from "../../utils/localstorage";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
const token=getData('Login')
const init = {
  Login: token ?true :false,
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
      savedata('Login',true)
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
