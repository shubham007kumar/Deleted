import axios from "axios";
import { FAILURE_TRUEWISH, GET_TRUEWISH, SUCCESS_TRUEWISH } from "./actionTypes";

export const getTruewish = () => {
  return {
    type: GET_TRUEWISH,
  };
};

export const successTruewish = (payload) => {
  return {
    type: SUCCESS_TRUEWISH,
    payload,
  };
};

export const failureTruewish = () => {
  return {
    type: FAILURE_TRUEWISH,
  };
};

export const getTruewishlist = (payload) => (dispatch) => {
  dispatch(getTruewish());
  axios(
      `https://mymock-server-shubham00.herokuapp.com/Product_detail?Wishlist=${true}`)
    .then((res) => {
      dispatch(successTruewish(res.data));
    })
    .catch((err) => {
      dispatch(failureTruewish());  
    });
};
