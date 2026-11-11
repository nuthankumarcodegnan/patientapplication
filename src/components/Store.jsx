import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

let initialState={
    doctorData:[]
}

function doctorReducer(state=initialState,action){
    if(action.type==="add"){
        return {...state,doctorData:action.payload}
    }else{
        return state;
    }
}

let store=createStore(doctorReducer,applyMiddleware(thunk))

export default store;