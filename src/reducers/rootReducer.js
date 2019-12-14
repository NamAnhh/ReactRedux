
import vidu1Reducer from './vidu1Reducer';
import { combineReducers } from 'redux';


const appReducer = combineReducers({
	vidu1Reducer,   // vidu1Reducer:vidu1Reducer
})

const rootReducer = (state, action) => {
	return appReducer(state, action)
}


export default rootReducer