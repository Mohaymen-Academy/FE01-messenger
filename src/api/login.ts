import axios from 'axios'
import { useDispatch } from 'react-redux'

const login = data => {
  const promise = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('test')
    }, 300)
  })
  return promise
}
//   axios
//     .post('/login', {
//       username,
//       password,
//     })
//     .then(res => res.jwt)

export default login
