import { login, register } from '@/api/user'
import { UISlice } from '@/redux/slices/UISlice'
import { UserSlice } from '@/redux/slices/UserSlice'
import store from '@/redux/store'

export function loginService(email: string, password: string) {
  login({ email, password })
    .then(res => {
      if (res.status === 200) {
        store.dispatch(UserSlice.actions.login({ token: res.data.token }))
        store.dispatch(
          UISlice.actions.openSnack({
            text: 'Login success',
            severity: 'success',
          })
        )
        store.dispatch(UISlice.actions.initiateProfileHandler(true))
        store.dispatch(UISlice.actions.loginHandler(false))
      } else {
        store.dispatch(
          UISlice.actions.openSnack({ text: 'Login failed', severity: 'error' })
        )
      }
    })
    .catch(err => {
      store.dispatch(
        UISlice.actions.openSnack({
          text: `Login failed:${err}`,
          severity: 'error',
        })
      )
    })
}
export function registerService(email: string, password: string) {
  register({ email, password })
    .then(res => {
      if (res.status === 200) {
        store.dispatch(UserSlice.actions.login({ token: res.data.token }))
        store.dispatch(
          UISlice.actions.openSnack({
            text: 'Register success',
            severity: 'success',
          })
        )
        store.dispatch(UISlice.actions.initiateProfileHandler(true))
        store.dispatch(UISlice.actions.signUpHandler(false))
      } else {
        store.dispatch(
          UISlice.actions.openSnack({
            text: 'Register failed',
            severity: 'error',
          })
        )
      }
    })
    .catch(err => {
      store.dispatch(
        UISlice.actions.openSnack({
          text: `Login failed:${err}`,
          severity: 'error',
        })
      )
    })
}
