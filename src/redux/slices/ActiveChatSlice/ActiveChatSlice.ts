import { createSlice } from '@reduxjs/toolkit'

export interface ActiveChatSliceType {
  id: string
}
export const ActiveChatSlice = createSlice({
  name: 'activeChat',
  initialState: {
    id: '',
  },
  reducers: {
    setActiveChat: (
      state: ActiveChatSliceType,
      action: { payload: { id: string } }
    ) => {
      const { id } = action.payload
      state.id = id
    },
  },
})

export default ActiveChatSlice
