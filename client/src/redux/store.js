/*
REDUX TOOLKIT API PROVIEDES THE FOLLOWING BENEFITS:
It combined productReducer and cartReducer into the root reducer function, which will handle a root state that looks like {product, cart}
It created a Redux store using that root reducer
It automatically added the thunk middleware
It automatically added more middleware to check for common mistakes like accidentally mutating the state
It automatically set up the Redux DevTools Extension connection
*/
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import rootReducer from "./index";

const reducers = combineReducers(rootReducer);
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({ reducer: persistedReducer });
