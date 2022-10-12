import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers";
const initState = {};
const middleWeare = [thunk];

const store = createStore(
  RootReducer,
  initState,
  applyMiddleware(...middleWeare)
  //   compose(
  //     applyMiddleware(...middleWeare),
  //     window.__Redux_DevTools_EXTENSION__ && window.__Redux_DevTools_EXTENSION__()
  //   )
);

export default store;
