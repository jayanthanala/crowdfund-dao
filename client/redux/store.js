import { createStore, applyMiddleware, compose } from "redux"
const thunk = require('redux-thunk').thunk;
import { createWrapper } from "next-redux-wrapper"
import rootReducer from "./reducers"

const middleware = [thunk]

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));


const makeStore = () => createStore(rootReducer, enhancer)

export const wrapper = createWrapper(makeStore)