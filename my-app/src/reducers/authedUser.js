import {LOG_OUT_USER, SET_AUTHED_USER} from "../actions/authedUser";

export default function authedUser (state=null,action) {
    switch(action.type){
        case SET_AUTHED_USER:
            return action.id;
        case LOG_OUT_USER:
            return state;
        default: return state;
    }
}