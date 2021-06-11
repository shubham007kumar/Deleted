import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Loginreducer } from "./Login/reducers";
import { Productreducer } from "./Product/reducer";
import { Signupreducer } from "./Signup/reducer";

const rootReducer = combineReducers({
  Signup: Signupreducer,
  Login: Loginreducer,
  Product: Productreducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
