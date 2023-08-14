import { Middleware } from '@reduxjs/toolkit'

const loginMiddleware: Middleware =
  store => next => (action: { type: string }) => {
    const result = next(action) as element
    if (action.type == 'login') localStorage.setItem('jwt', action.jwt)
    return result
  }
export default loginMiddleware
