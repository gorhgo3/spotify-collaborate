import axios from 'axios'

export function ShadowLogin () {
  return window.location.href = '/api/v1/server-master/login'
}

export function testShadowAccount () {
  return axios.get('/api/v1/server-master/session/test')
}