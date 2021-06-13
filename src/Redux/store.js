import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartreducer } from "./Cart/reducer";
import { Loginreducer } from "./Login/reducers";
import { Productreducer } from "./Product/reducer";
import { Signupreducer } from "./Signup/reducer";
import { Wishlistreducer } from "./Wishlist/reducer";
import { trueWishtreducer } from "./WishlistTrue/reducer";

const rootReducer = combineReducers({
  Signup: Signupreducer,
  Login: Loginreducer,
  Product: Productreducer,
  Wishlist:Wishlistreducer,
  TrueWishList:trueWishtreducer,
  Cart:cartreducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
