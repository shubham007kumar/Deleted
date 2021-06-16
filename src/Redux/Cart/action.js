import axios from "axios";
import { FAILURE_CART, GET_CART, POST_CART, SUCCESS_CART } from "./actionTypes";

export const getcart = () => {
  return {
    type: GET_CART,
  };
};

export const postcart = (payload) => {
  return {
    type: POST_CART,
    payload,
  };
};

export const successcart = (payload) => {
  return {
    type: SUCCESS_CART,
    payload,
  };
};

export const failurecart = () => {
  return {
    type: FAILURE_CART,
  };
};

export const getcartdata = () => (dispatch) => {
  dispatch(getcart());
  axios
    .get(
      `https://mymock-server-shubham00.herokuapp.com/Product_detail?cart=${true}`
    )
    .then((res) => {
      dispatch(postcart(res.data));
    })
    .catch((err) => {
      dispatch(failurecart());
    });
};

export const cart = (payload) => (dispatch) => {
  const { id, cart } = payload;
  dispatch(getcart());
  axios
    .patch(
      `https://mymock-server-shubham00.herokuapp.com/Product_detail/${id}`,
      {
        cart: !cart,
      }
    )
    .then((res) => {
      dispatch(successcart(res.data));
    })
    .catch((err) => {
      dispatch(failurecart());
    });
};
