import {
  forwardMessage,
  getMessages,
  pinMessage,
  sendMessage,
  sendReply,
} from '@/api/message'
import { ActiveChatSlice } from '@/redux/slices/ActiveChatSlice'
import { MessageSlice } from '@/redux/slices/MessageSlice'
import { UISlice } from '@/redux/slices/UISlice'
import store from '@/redux/store'

export function getMessagesService(chatId: string, type: string) {
  console.log('type', type)
  if (type === 'PV') {
    // store.dispatch(ActiveChatSlice.actions.setActiveChat({ id: chatId }))
    // get chat messages
    return setInterval(() => {
      getMessages({ chatId })
        .then(res => {
          // console.log(res)
          if (
            res.status == 200 &&
            store.getState().activeChat.id == parseInt(chatId, 10)
          ) {
            console.log(chatId)
            store.dispatch(
              MessageSlice.actions.setData({
                id: chatId,
                messages: res.data.messages.reverse(),
              })
            )
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
    }, 150)
  }
  return 0
}

export function sendReplyMessageService(
  message: string,
  messageId: string,
  type: string
) {
  sendReply({ message, messageId, type })
    .then(res => {
      if (res.status == 200) {
        // store.dispatch(MessageSlice.actions.sendMessage({ message, messageId }))
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

export function sendMessageService(
  message: string,
  chatId: string,
  type: string,
  fileId: string | null
) {
  store.dispatch(MessageSlice.actions.sendMessage({ message, chatId }))
  sendMessage({ message, chatId, type, fileId })
    .then(res => {
      if (res.status == 200) {
        // store.dispatch(MessageSlice.actions.sendMessage({ message, chatId }))
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

export function pinMessageService(messageId: string, chatId: string) {
  pinMessage({ messageId, chatId })
    .then(res => {
      if (res.status == 200) {
        store.dispatch(
          UISlice.actions.openSnack({
            text: 'پیام مورد نظر پین شد',
            severity: 'success',
          })
        )
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

export function forwardMessageService(messageId: string, chatId: string) {
  forwardMessage({ messageId, chatId })
    .then(res => {
      if (res.status == 200) {
        store.dispatch(
          UISlice.actions.openSnack({
            text: 'پیام مورد نظر فوروارد شد',
            severity: 'success',
          })
        )
      }
    })
    .catch(() => {
      store.dispatch(
        UISlice.actions.openSnack({
          text: `مشکلی در ارسال پیام پیش آمد`,
          severity: 'error',
        })
      )
    })
  console.log(messageId, chatId)
}
