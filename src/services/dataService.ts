import { redirect, useNavigate } from 'react-router-dom'
import {
  chatListData,
  initiateProfile,
  myProfile,
  usernameValidation,
} from '@/api/data'
import { UISlice } from '@/redux/slices/UISlice'
import { UserSlice } from '@/redux/slices/UserSlice'
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
  bio: string,
  picture: null
) {
  initiateProfile({ username, firstName, lastName, bio, picture })
    .then(res => {
      if (res.status === 200) {
        localStorage.setItem('isInitialProfileCreated', 'true')
        store.dispatch(
          UISlice.actions.openSnack({
            text: 'Register success',
            severity: 'success',
          })
        )
        store.dispatch(UISlice.actions.isInitialProfileCreatedHandler())
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
      store.dispatch(UISlice.actions.userNameHandler(false))
    })
}
export function myProfileService() {
  myProfile()
    .then(res => {
      if (res.status === 200) {
        store.dispatch(UserSlice.actions.setUserName(res.data.username))
        store.dispatch(UserSlice.actions.setFirstName(res.data.firstName))
        store.dispatch(UserSlice.actions.setLastName(res.data.lastName))
        store.dispatch(UserSlice.actions.setBio(res.data.bio))
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
