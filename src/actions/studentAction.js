// setting: folder (actions[studentACtions], components[studentLists], reducers[rootReducer, studentReducer], store.js, index.js), 
//npm install redux react-redux redux-thunk --save

//defind: type
export const FETCH_STUDENT_BEGIN   = 'FETCH_STUDENT_BEGIN';
export const FETCH_STUDENT_SUCCESS = 'FETCH_STUDENT_SUCCESS';
export const FETCH_STUDENT_FAILURE = 'FETCH_STUDENT_FAILURE';


export const fetchStudentBegin = () => ({
  type: FETCH_STUDENT_BEGIN
});

export const fetchStudentSuccess = (data) => ({
  type: FETCH_STUDENT_SUCCESS,
  payload: data 
});

export const fetchStudentFailure = (error) => ({
  type: FETCH_STUDENT_FAILURE,
  payload: error 
});


//export fetchStudent cho studentlist (mapDispatchToProps)
//fetch API -> json.data là: req.body.data (nodeJs)
export const fetchStudent = () => {
    return dispatch => {
      dispatch(fetchStudentBegin());
      return fetch("http://localhost:4500/api/students")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchStudentSuccess(json.data));
          console.log('josn.data', json)
          return json.data;
        })
        .catch(error => dispatch(fetchStudentFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }