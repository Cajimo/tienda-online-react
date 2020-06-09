import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

/**
 * Middleware are pretty much just functions that receive actions
 * in and then do something with them and then pass them out into
 * the root reducer.
 */
/**
 * So the middlewares that the store is expecting from redux is going
 * to be an array and that array we can set ourselves as this thing
 * called middleware.
 */
const middlewares = [logger];

/**
 * what this will do is this will spread in all of the methods or all
 * of the values in this array into this function call as individual
 * arguments.
 */
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
