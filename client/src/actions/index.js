import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios'

export const FETCHING_MESSAGE_START = 'FETCHING_MESSAGE_START';
export const FETCHING_MESSAGE_SUCCESS = 'FETCHING_MESSAGE_SUCCESS';
export const FETCHING_MESSAGE_FAILURE = 'FETCHING_MESSAGE_FAILURE';
//This runs in Signup.js
export const getUser = (user) => dispatch => {
  console.log('actions: index.js: getUser',user)
    dispatch({type: FETCHING_MESSAGE_START});
      return axios
    .post('https://wunderlist2019.herokuapp.com/auth/register',user)
    .then(res =>{
       console.log('Actions: index.js', res)
      dispatch({type:FETCHING_MESSAGE_SUCCESS, payload: res.data.message})
    })
    .catch(err => {
      console.log(err.toString())
      dispatch({type: FETCHING_MESSAGE_FAILURE, payload: err.toString()})
    })
  } 



  export const updateTask = (item) => dispatch => {
    console.log(item[0])
      dispatch({type: FETCHING_MESSAGE_START});
      axiosWithAuth()
      .put(`https://wunderlist2019.herokuapp.com/tasks/update/${item[0].id}`,item[0])
      .then(res =>{
         console.log('Actions: index.js', res)
        dispatch({type:FETCHING_MESSAGE_SUCCESS, payload: res.data.message})
      })
      .catch(err => {
        console.log(err.toString())
        dispatch({type: FETCHING_MESSAGE_FAILURE, payload: err.toString()})
      })
    } 

    export const deleteTask = (item) => dispatch => {
      console.log(item[0])
        dispatch({type: FETCHING_MESSAGE_START});
        axiosWithAuth()
        .delete(`https://wunderlist2019.herokuapp.com/tasks/delete/${item[0].id}`)
        .then(res =>{
           console.log('Actions: index.js', res)
          dispatch({type:FETCHING_MESSAGE_SUCCESS, payload: res.data.message})
        })
        .catch(err => {
          console.log(err.toString())
          dispatch({type: FETCHING_MESSAGE_FAILURE, payload: err.toString()})
        })
      } 