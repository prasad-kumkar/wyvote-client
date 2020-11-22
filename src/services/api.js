import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://wyvote-server.herokuapp.com`
  })
}