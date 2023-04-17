import { combineReducers } from "redux";
import cakeReducer from "./Cake/cakeReducers";
import iceCreamReducer from "./IceCream/IceCreamReducers";
import userReducer from "./user/userReducers";
import {reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
    form: formReducer
})

export default rootReducer