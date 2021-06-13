import axios from "axios";
import {
  FAILURE_WISHLIST,
  POST_WISHLIST,
  SUCCESS_WISHLIST,
} from "./actionTypes";

export const postWishlist = () => {
  return {
    type: POST_WISHLIST,
  };
};

export const successWishlist = (payload) => {
  return {
    type: SUCCESS_WISHLIST,
    payload,
  };
};

export const failureWishlist = () => {
  return {
    type: FAILURE_WISHLIST,
  };
};

export const sendWishlist = (payload) => (dispatch) => {
  const { id, Wishlist } = payload;
  dispatch(postWishlist());
  axios
    .patch(
      `https://mymock-server-shubham00.herokuapp.com/Product_detail/${id}`,
      {
        Wishlist: !Wishlist,
      }
    )
    .then((res) => {
      dispatch(successWishlist(res.data));
    })
    .catch((err) => {
      dispatch(failureWishlist());
    });
};
