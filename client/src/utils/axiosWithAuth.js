// axios call with included authorization token
import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  console.log('axiosWithAuth.js: auth token: ', token)

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`
    }
  })
}