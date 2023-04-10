import axios from 'axios'

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-type': 'application/json',
  },
})

export default function request(config) {
  return http.request(config)
}
