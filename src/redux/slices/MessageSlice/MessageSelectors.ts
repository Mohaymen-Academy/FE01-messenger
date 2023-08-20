import { createSelector } from '@reduxjs/toolkit'
import { storeStateTypes } from '@/types/types'
import store from '@/redux/store'
import { MessageSlice } from '.'

const MessageSelectors = {
  chatMessages: createSelector(
    (state: storeStateTypes) => state.message.chats,
    (state: storeStateTypes) => state.activeChat.id,
    (chats, id) => {
      let index = chats.findIndex(chat => chat.id === id)
      if (index === -1) {
        store.dispatch(
          MessageSlice.actions.setData({
            id,
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
      }
      return chats[index].messages
    }
  ),
}

export default MessageSelectors
