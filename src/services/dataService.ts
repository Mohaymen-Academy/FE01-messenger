import axios from 'axios'
import {
  chatListData,
  getMessages,
  initiateProfile,
  usernameValidation,
} from '@/api/data'
import { UISlice } from '@/redux/slices/UISlice'
import store from '@/redux/store'
import { apiUrl } from '@/utils/constants'
import MessageSlice from '@/redux/slices/MessageSlice/MessageSlice'
import axiosInstance from '@/api/axiosInstance'
import { ActiveChatSlice } from '@/redux/slices/ActiveChatSlice'

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
      store.dispatch(
        UISlice.actions.openSnack({
          text: `Login failed:${err}`,
          severity: 'error',
        })
      )
    })
}
export function getMessagesService(chatId: string, type: string) {
  if (type === 'chat') {
    store.dispatch(ActiveChatSlice.actions.setActiveChat({ id: chatId }))
    // get chat messages
    getMessages({ chatId })
      .then(res => {
        if (res.status === 200) {
          store.dispatch(
            MessageSlice.actions.setData({
              id: res.data.id,
              messages: res.data.chat,
            })
          )
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
        store.dispatch(
          UISlice.actions.openSnack({
            text: `fetching messages failed:${err}`,
            severity: 'error',
          })
        )
      })
  }
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
        return true
      }
      return false
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
