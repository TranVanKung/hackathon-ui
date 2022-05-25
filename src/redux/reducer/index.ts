import { combineReducers } from "redux";
import Layout from "./layout";

const rootReducer = combineReducers({
  Layout,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
