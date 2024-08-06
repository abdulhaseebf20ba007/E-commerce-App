import { createStore } from "redux";
import { Reducer } from "../actions/reducers";

export const mystore = createStore(Reducer);
