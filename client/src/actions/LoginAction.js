import axios from 'axios';

export const FETCHING_MESSAGE_START = 'FETCHING_MESSAGE_START';
export const FETCHING_MESSAGE_SUCCESS = 'FETCHING_MESSAGE_SUCCESS';
export const FETCHING_MESSAGE_FAILURE = 'FETCHING_MESSAGE_FAILURE';
//This runs in Login.js
export const getLogin = (user) => dispatch => {
  console.log('LoginAction.js',user)
    dispatch({type: FETCHING_MESSAGE_START});
    
   return axios
    .post('https://wunderlist2019.herokuapp.com/auth/login', user)
    .then(res =>{
       console.log('Actions: loginAction.js', res)
       localStorage.setItem('token', res.data.token)
       localStorage.setItem('userID', res.data.user_id)
      dispatch({type:FETCHING_MESSAGE_SUCCESS, payload: res.data.message})
    })
    .catch(err => {
      console.log(err.toString())
      dispatch({type: FETCHING_MESSAGE_FAILURE, payload: err.toString()})
    })
  } 