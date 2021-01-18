import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { IState, IAction, IDispatchType } from "./types";
import userReducer from "./user/reducer";
import articleReducer from "./article/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
});

export const store: Store<IState, IAction> & {
  dispatch: IDispatchType;
} = createStore(rootReducer, applyMiddleware(thunk, logger));
