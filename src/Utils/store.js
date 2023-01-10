import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { userReducer } from "../Utils/reducer";
import { initialState } from "./reducer";

// Store creation with state and reducer
export const store = createStore(
  userReducer,
  initialState,
  composeWithDevTools()
);
