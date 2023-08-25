import { createSlice } from '@reduxjs/toolkit'

export interface LeftSectionSliceType {
  name: string
  username: string
  image: string
  bio: string
  description: string
  subscribeCount: number
}

export const LeftSectionSlice = createSlice({
  name: 'leftSection',
  initialState: {
    name: '',
    username: '',
    image: '',
    bio: '',
    description: '',
    subscribeCount: 0,
  },
  reducers: {
    setName: (state: LeftSectionSliceType, action: { payload: string }) => {
      state.name = action.payload
    },
    setUserName: (state: LeftSectionSliceType, action: { payload: string }) => {
      state.username = action.payload
    },
    setImage: (state: LeftSectionSliceType, action: { payload: string }) => {
      state.image = action.payload
    },
    setBio: (state: LeftSectionSliceType, action: { payload: string }) => {
      state.bio = action.payload
    },
    setDescription: (
      state: LeftSectionSliceType,
      action: { payload: string }
    ) => {
      state.description = action.payload
    },
    setSubscribeCount: (
      state: LeftSectionSliceType,
      action: { payload: number }
    ) => {
      state.subscribeCount = action.payload
    },
  },
})

export default LeftSectionSlice
