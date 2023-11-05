import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  config.headers['Access-Control-Allow-Origin'] = '*'
  config.headers['Access-Control-Allow-Credentials'] = 'true'
  return config
})

axiosInstance.interceptors.response.use(response => {
  // console.log('server response to', response.config.url, response)
  let p
  return response
})
export default axiosInstance
