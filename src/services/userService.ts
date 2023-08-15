import login from '@/api/user'
import { UISlice } from '@/redux/slices/UISlice'
import { UserSlice } from '@/redux/slices/UserSlice'
import store from '@/redux/store'

export function loginService(email, password) {
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
export function registerService() {}
