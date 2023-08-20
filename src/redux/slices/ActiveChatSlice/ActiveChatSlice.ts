import { createSlice } from '@reduxjs/toolkit'

export interface ActiveChatSliceType {
  id: number
  type: string
}
export const ActiveChatSlice = createSlice({
  name: 'activeChat',
  initialState: {
    id: 0,
    type: 'PV',
  },
  reducers: {
    setActiveChat: (
      state: ActiveChatSliceType,
      action: { payload: { id: number; type: string } }
    ) => {
      const { id, type } = action.payload
      state.id = id
      state.type = type
    },
  },
})

export default ActiveChatSlice
