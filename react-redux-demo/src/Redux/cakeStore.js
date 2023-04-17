import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
// import {createSagaMiddleware} from 'redux-saga'
import createSagaMiddleware from "redux-saga";
import { watchFetchUsersRequest } from "./Sagas/userSaga";
import createSagaMiddleWare from "redux-saga"
import { helo } from "./Sagas/userSaga";

// const sagaMiddleware = createSagaMiddleWare()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// sagaMiddleware.run(helo())

export default store