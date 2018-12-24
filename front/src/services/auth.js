import axios from "axios"
const host = "http://localhost:3000/auth"

export const signup = (user) => {
  return axios.post(host + "/signup", user, {})
    .then(response => response.data)
    .catch(err => err.response)
}