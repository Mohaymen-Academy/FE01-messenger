import { AxiosError } from 'axios'
import { getProfile } from '@/api/data'
import { editProfile, login, register } from '@/api/user'
import { UISlice } from '@/redux/slices/UISlice'
import { UserSlice } from '@/redux/slices/UserSlice'
import store from '@/redux/store'
import { createChatService } from './dataService'
import setActiveChatService from './activeService'

export function loginService(email: string, password: string) {
  login({ email, password })
    .then(res => {
      if (res.status === 200) {
        console.log('test login')
        store.dispatch(UserSlice.actions.login({ token: res?.data.token }))
        store.dispatch(
          UISlice.actions.initialProfileCreatedHandler(res.data.hasProfile)
        )
        store.dispatch(
          UISlice.actions.openSnack({
            text: 'با موفقیت وارد شدید',
            severity: 'success',
          })
        )
        store.dispatch(UISlice.actions.loginHandler(false))
        store.dispatch(UISlice.actions.chatColumnHandler(true))
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
        store.dispatch(UserSlice.actions.login({ token: res?.data.token }))
        store.dispatch(UISlice.actions.initiateProfileHandler(true))
        store.dispatch(
          UISlice.actions.openSnack({
            text: 'Register success',
            severity: 'success',
          })
        )
        // store.dispatch(UISlice.actions.initiateProfileHandler(true))
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
    .catch((err: AxiosError) => {
      if (err.response?.status === 409) {
        store.dispatch(
          UISlice.actions.openSnack({
            text: `این ایمیل قبلا ثبت نام کرده است`,
            severity: 'error',
          })
        )
      }
    })
}

export function startChatService(id: string) {
  getProfile(id)
    .then(res => {
      console.log(res.data)
      const prevChat = store
        .getState()
        .chatList.chatBoxes.find(ele => ele.profileId == id)
      console.log('prevChat', prevChat)
      if (prevChat != undefined) {
        setActiveChatService(prevChat.id, prevChat.type, prevChat)
      } else if (res.status == 200) {
        createChatService(id)
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
export function editProfileService(
  username: string,
  firstName: string,
  lastName: string,
  bio: string
) {
  editProfile({ username, firstName, lastName, bio })
    .then(res => {
      if (res.status === 200) {
        store.dispatch(
          UISlice.actions.openSnack({
            text: 'Register success',
            severity: 'success',
          })
        )
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
