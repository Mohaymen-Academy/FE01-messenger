import { createSelector } from '@reduxjs/toolkit'
import { storeStateTypes } from '@/types/types'
import store from '@/redux/store'
import { MessageSlice } from '.'

const MessageSelectors = {
  chatMessages: createSelector(
    (state: storeStateTypes) => state.message.chats,
    (state: storeStateTypes) => state.activeChat.id,
    (chats, id) => {
      console.group('chatid', id, chats)
      let index = chats.findIndex(chat => chat.id == id?.toString())
      console.group('chatid', id, chats, index)
      if (index == -1) {
        console.log('chatid Not Found', id)
        store.dispatch(
          MessageSlice.actions.setData({
            id: id?.toString(),
            messages: [
              {
                id: '1',
                sender: '1',
                type: 'text',
                text: 'Hello',
              },
            ],
          })
        )
        index = chats.length - 1
      } else {
        console.log('chatid found', id, chats[index].messages, index)
      }
      console.groupEnd()
      return chats[index].messages
    }
  ),
}

export default MessageSelectors
