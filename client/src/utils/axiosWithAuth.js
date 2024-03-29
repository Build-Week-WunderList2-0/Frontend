// axios call with included authorization token
import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  const id = localStorage.getItem('userID')
  console.log('axiosWithAuth.js: auth token: ', token)

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
      user_id: id
    }
  })
}