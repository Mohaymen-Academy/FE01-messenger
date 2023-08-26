import { AxiosError } from 'axios'
import {
  chatListData,
  createChat,
  deletePhoto,
  editFile,
  getChannelChat,
  getChat,
  getFile,
  getLeftProfile,
  getMembers,
  initiateProfile,
  myProfile,
  uploadFile,
  usernameValidation,
} from '@/api/data'
import { UISlice } from '@/redux/slices/UISlice'
import { UserSlice } from '@/redux/slices/UserSlice'
import store from '@/redux/store'
import { MessageSlice } from '@/redux/slices/MessageSlice'
import { ActiveChatSlice } from '@/redux/slices/ActiveChatSlice'
import { ChatListSlice } from '@/redux/slices/ChatListSlice'
import LeftSection from '@/components/LeftSection/LeftSection'
import { LeftSectionSlice } from '@/redux/slices/LeftSectionSlice'
import { getMessages, sendMessage } from '@/api/message'
import setActiveChatService from './activeService'

export function ChatListDataService() {
  chatListData()
    .then(res => {
      // console.log('THIS', res)
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
  // console.log('type', type)
  if (type === 'PV' || type === 'SELF') {
    // store.dispatch(ActiveChatSlice.actions.setActiveChat({ id: chatId }))
    // get chat messages
    return setInterval(() => {
      getMessages({ chatId })
        .then(res => {
          // console.log(res)
          if (res.status == 200) {
            // store.dispatch(
            //   ActiveChatSlice.actions.setActiveChat({
            //     id: parseInt(chatId, 10),
            //     type: 'PV',
            //   })
            // )
            store.dispatch(
              MessageSlice.actions.setData({
                id: chatId,
                messages: res.data.messages.reverse(),
                pin: res.data.pinned,
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
    }, 150)
  }
}

export function sendFileService(file: string, chatId: string, type: string) {
  const fd = new FormData()
  fd.append('file', file)
  // uploadFile({ file: fd }).then(res => {
}

export function createChatService(profileId: string) {
  createChat({ profileId })
    .then(async res => {
      if (res.status == 200) {
        console.log('cheat created', res)
        await chatListData()
          .then(innerRes => {
            // console.log('THIS', res)
            if (innerRes.status === 200) {
              store.dispatch(ChatListSlice.actions.setChatBox(innerRes.data))
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
    })
    .then(() => {
      console.log('chat list data service finished')
      const prof = store
        .getState()
        .chatList.chatBoxes.find(ele => ele.profileId == profileId)
      console.log('prof', prof, 'profile id', profileId)
      setActiveChatService(
        prof?.id as number,
        prof?.type as string,
        prof as chatBoxType
      )
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
  photoId: number
) {
  initiateProfile({ username, firstName, lastName, bio, photoId })
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
      // store.dispatch(
      //   UISlice.actions.openSnack({
      //     text: `u:${err}`,
      //     severity: 'error',
      //   })
      // )
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
        // store.dispatch(UserSlice.actions.setImage(res.data.photo))
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
      console.log(err)
      if (err.response?.status == 403) {
        console.log('inside if')
        store.dispatch(UserSlice.actions.deleteToken())
      }
    })
}
export function uploadProfilePhotoService(file: FormData) {
  uploadFile({ file })
    .then(res => {
      console.log(res.data.id)
      localStorage.setItem('imageId', String(res.data.id))
      store.dispatch(UserSlice.actions.setImageId(res.data.id))
    })
    .catch(err => {})
}

export function deleteProfilePhotoService() {
  deletePhoto()
    .then(res => {
      console.log(1)
    })
    .catch(err => {})
}
export function uploadChannelPhotoService(file: FormData) {
  uploadFile({ file })
    .then(res => {
      console.log(res.data.id)
      store.dispatch(UISlice.actions.setChannelImageId(res.data.id))
    })
    .catch(err => {})
}

export function editProfilePhotoService(photoId: number) {
  console.log(photoId)
  editFile({ photoId })
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {})
}

export function getProfilePhotoService(photoId: number) {
  getFile({ photoId })
    .then(res => {
      console.log(res.data)
      store.dispatch(UserSlice.actions.setImage(res.data))
    })
    .catch(err => {})
}

export function channelLeftSectionService(chatId: number) {
  getChannelChat({ chatId })
    .then(res => {
      store.dispatch(
        LeftSectionSlice.actions.setDescription(res.data.description)
      )
      store.dispatch(LeftSectionSlice.actions.setName(res.data.fullName))
      store.dispatch(LeftSectionSlice.actions.setImage(res.data.photo))
    })
    .catch(err => {})
}
export function channelMemberService(chatId: number) {
  getMembers({ chatId })
    .then(res => {
      console.log(res.data)
      store.dispatch(LeftSectionSlice.actions.setMembers(res.data))
    })
    .catch(err => {})
}

export function getLeftProfileService(profileId: number) {
  getLeftProfile({ profileId })
    .then(res => {
      store.dispatch(LeftSectionSlice.actions.setBio(res.data.bio))
      store.dispatch(LeftSectionSlice.actions.setName(res.data.fullName))
      store.dispatch(LeftSectionSlice.actions.setImage(res.data.photo))
      store.dispatch(LeftSectionSlice.actions.setUserName(res.data.username))
    })
    .catch(err => {})
}
