import { createSlice } from '@reduxjs/toolkit'

export interface chatBoxType {
  name: string
  type: string
  image: string
  id: string
}

export interface SearchSliceType {
  chatBoxes: chatBoxType[]
}

export const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    chatBoxes: [],
  },
  reducers: {
    setResult: (state: SearchSliceType, action: { payload: chatBoxType[] }) => {
      console.log(action.payload)
      state.chatBoxes = action.payload
      console.log(state.chatBoxes.concat(action.payload))
      // action.payload.map(item => state.chatBoxes.concat(item))
      // console.log(state.chatBoxes.length)
      // state.chatBoxes.map(item => console.log(item))
    },
  },
})

export default SearchSlice
