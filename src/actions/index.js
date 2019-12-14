import * as types from './../constants/ActionTypes';
import callApi from '../Services/callAPI';

// call API get task list
export const fetchTask = (task) => {
    return {
        type: types.FETCH_TASK,
        task
    }
}

// ung dung redux-thunk sau khi call API thi get du lieu
export const fetchTaskRequest = () => {
    return dispatch => {
        return callApi('todos', 'GET', null, null).then(res => {
            dispatch(fetchTask(res.data))
        })

    }
}

// truyen ham co tham so
export const postTask = (data1) => {
    return {
        type: types.COTHAMSO,
        //data1:data1
        data1
    }
}

