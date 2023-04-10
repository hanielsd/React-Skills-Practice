import axios from 'axios'

const back4Api = axios.create({
  baseURL: 'https://parseapi.back4app.com',
  headers: {
    'Content-type': 'application/json',
    'X-Parse-Application-Id': '0jRdeTuApFFfLuMPtF4gS4XgfJ7E8yQ4K1NMruij',
    'X-Parse-REST-API-Key': '7DEvvfMvf0w8LcV7PMeOg7RKP53aX4V5962tiraR',
  },
})

export default function b4Http(config) {
  return back4Api.request(config)
}

export function getMovies() {
  return b4Http('classes/Movies')
}

export function addMovie(payload) {
  return b4Http({
    url: 'classes/Movies',
    method: 'post',
    data: payload,
  })
}
