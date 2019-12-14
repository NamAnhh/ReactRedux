import * as types from './../constants/ActionTypes';

// khoi tao ko tham so
let initialState = [];

//truyen ko tham so
let myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_TASK:{
            console.log('FETCH_TASK Reducer',action)
            return {
                ...state,
                state : action
            }
        }
        case types.ADD_TASK:{
            console.log("ADD_TASK Reducer",action);
            return state;
        }
        default: return state; //state cua store
    }
}

export default myReducer;