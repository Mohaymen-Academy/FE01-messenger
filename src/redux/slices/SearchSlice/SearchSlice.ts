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
    setResult: (
      state: SearchSliceType,
      action: { payload: { data: chatBoxType[] } }
    ) => {
      console.log(123)  
      state.chatBoxes = action.payload
    },
  },
})

export default SearchSlice
