import { chatListData, initiateProfile, usernameValidation } from '@/api/data'

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
        return true
      }
      return false
    })
    .catch(err => {
      // store.dispatch(
      //   UISlice.actions.openSnack({
      //     text: `Login failed:${err}`,
      //     severity: 'error',
      //   })
      // )
    })
}
