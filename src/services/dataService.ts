import axios from 'axios'
import {
  chatListData,
  createChat,
  getMessages,
  initiateProfile,
  myProfile,
  sendMessage,
  usernameValidation,
} from '@/api/data'
import { UISlice } from '@/redux/slices/UISlice'
import { UserSlice } from '@/redux/slices/UserSlice'
import store from '@/redux/store'
import { apiUrl } from '@/utils/constants'
import { MessageSlice } from '@/redux/slices/MessageSlice'
import axiosInstance from '@/api/axiosInstance'
import { ActiveChatSlice } from '@/redux/slices/ActiveChatSlice'
import { ChatListSlice } from '@/redux/slices/ChatListSlice'

export function ChatListDataService() {
  chatListData()
    .then(res => {
      console.log('test Interval')
      if (res.status === 200) {
        store.dispatch(ChatListSlice.actions.setChatBox(res.data))
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
  console.log('type', type)
  if (type === 'PV') {
    // store.dispatch(ActiveChatSlice.actions.setActiveChat({ id: chatId }))
    // get chat messages
    getMessages({ chatId })
      .then(res => {
        console.log(res)
        if (res.status == 200) {
          store.dispatch(
            MessageSlice.actions.setData({
              id: chatId,
              messages: res.data,
            })
          )
          console.log('inside status 200', res.data.id, res.data.chat)
          store.dispatch(
            ActiveChatSlice.actions.setActiveChat({
              id: parseInt(chatId, 10),
              type: 'PV',
            })
          )
        } else {
          store.dispatch(
            UISlice.actions.openSnack({
              text: 'دریافت پیام ها با خطا مواجه شد',
              severity: 'error',
            })
          )
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

export function sendMessageService(
  message: string,
  chatId: string,
  type: string
) {
  sendMessage({ message, chatId, type })
    .then(res => {
      if (res.status == 200) {
        store.dispatch(MessageSlice.actions.sendMessage({ message, chatId }))
      }
    })
    .catch(err => {
      store.dispatch(
        UISlice.actions.openSnack({
          text: `sending message failed:${err}`,
          severity: 'error',
        })
      )
    })
}
export function createChatService(profileId: string) {
  createChat({ profileId })
    .then(res => {
      if (res.status == 200) {
        console.log(res)
        store.dispatch(
          ActiveChatSlice.actions.setActiveChat({
            id: res.data.chatId,
            type: 'PV',
          })
        )
      }
    })
    .catch(err => {
      store.dispatch(
        UISlice.actions.openSnack({
          text: `creating chat failed:${err}`,
          severity: 'error',
        })
      )
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
      if (res?.status === 200) {
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
