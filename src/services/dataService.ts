import { chatListData, initiateProfile, usernameValidation } from '@/api/data'
import { UISlice } from '@/redux/slices/UISlice'
import store from '@/redux/store'

export function ChatListDataService(profileId: string) {
  chatListData({ profileId })
    .then(res => {
      if (res.status === 200) {
        // store.dispatch(UserSlice.actions.login({ token: res.data.token }))
        // store.dispatch(
        //   UISlice.actions.openSnack({
        //     text: 'Login success',
        //     severity: 'success',
        //   })
        // )
      } else {
        // store.dispatch(
        //   UISlice.actions.openSnack({ text: 'Login failed', severity: 'error' })
        // )
      }
    })
    .catch(err => {
      //   store.dispatch(
      //     UISlice.actions.openSnack({
      //       text: `Login failed:${err}`,
      //       severity: 'error',
      //     })
      //   )
    })
}
export function initiateProfileService(
  username: string,
  firstName: string,
  lastName: string,
  bio: string
) {
  initiateProfile({ username, firstName, lastName, bio })
    .then(res => {
      if (res.status === 200) {
        // store.dispatch(UserSlice.actions.login({ token: res.data.token }))
        // store.dispatch(
        //   UISlice.actions.openSnack({
        //     text: 'Register success',
        //     severity: 'success',
        //   })
        // )
      } else {
        // store.dispatch(
        //   UISlice.actions.openSnack({
        //     text: 'Register failed',
        //     severity: 'error',
        //   })
        // )
      }
    })
    .catch(err => {
      //   store.dispatch(
      //     UISlice.actions.openSnack({
      //       text: `Login failed:${err}`,
      //       severity: 'error',
      //     })
      //   )
    })
}
export function usernameValidationService(username: string) {
  usernameValidation({ username })
    .then(res => {
      if (res.status === 200) {
        store.dispatch(UISlice.actions.userNameHandler(true))
      } else {
        store.dispatch(UISlice.actions.userNameHandler(false))
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
