import { createSlice } from '@reduxjs/toolkit'

export interface ActiveChatSliceType {
  id: number
}
export const ActiveChatSlice = createSlice({
  name: 'activeChat',
  initialState: {
    id: 0,
  },
  reducers: {
    setActiveChat: (
      state: ActiveChatSliceType,
      action: { payload: { id: number } }
    ) => {
      const { id } = action.payload
      state.id = id
    },
  },
})

export default ActiveChatSlice
