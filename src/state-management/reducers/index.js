import { combineReducers } from "redux";
import cartReducer from "./cart";
import collectionReducer from "./collection";
import directoryReducer from "./directory";

export default combineReducers({
  cart: cartReducer,
  directory: directoryReducer,
  collection: collectionReducer
});
