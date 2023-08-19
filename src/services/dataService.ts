import { Router, redirect, useNavigate } from 'react-router-dom'
import {
  chatListData,
  initiateProfile,
  myProfile,
  usernameValidation,
} from '@/api/data'
import { UISlice } from '@/redux/slices/UISlice'
import { UserSlice } from '@/redux/slices/UserSlice'
import store from '@/redux/store'
import { ChatListSlice } from '@/redux/slices/ChatListSlice'

export function ChatListDataService(profileId: number) {
  // const data1 = [
  //   {
  //     chatId: 2,
  //     name: 'ali',
  //     type: 'text',
  //     bio: 'hello',
  //     description: 'skmsm',
  //     photo: '',
  //   },
  // ]
  // store.dispatch(ChatListSlice.actions.setChatBox(data1))

  chatListData({ profileId })
    .then(res => {
      if (res.status === 200) {
        store.dispatch(ChatListSlice.actions.setChatBox(res.data.chat))
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
        store.dispatch(
          UISlice.actions.openSnack({
            text: 'Register success',
            severity: 'success',
          })
        )
        store.dispatch(UISlice.actions.initialProfileCreatedHandler(true))
        store.dispatch(UISlice.actions.chatColumnHandler(true))
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
