import axios from 'axios';

export const FETCHING_MESSAGE_START = 'FETCHING_MESSAGE_START';
export const FETCHING_MESSAGE_SUCCESS = 'FETCHING_MESSAGE_SUCCESS';
export const FETCHING_MESSAGE_FAILURE = 'FETCHING_MESSAGE_FAILURE';


export const getUser = (user)  => {
    console.log('index.js',user)
    // dispatch({type: FETCHING_MESSAGE_START});
    axios
    .post('https://wunderlist2019.herokuapp.com/auth/register', user)
    .then(res =>{
       console.log(res)
    //   dispatch({type:FETCHING_MESSAGE_SUCCESS, payload: res.data.message})
    })
    .catch(err => {
      console.log(err.toString())
    //   dispatch({type: FETCHING_MESSAGE_FAILURE, payload: err.toString()})
    })
  } 