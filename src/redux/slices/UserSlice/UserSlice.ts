import { createSlice } from '@reduxjs/toolkit'

export interface UserSliceType {
  name: string
  userName: string
  image: string
  imageColor: string
  bio: string
  number: string
  theme: string
}
export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Hossein',
    userName: '@Hossein_Asd',
    image: '',
    imageColor: '',
    bio: 'Hello!!',
    number: '',
    theme: '',
  },
  reducers: {
    setName: (
      state: ActiveChatSliceType,
      action: { payload: { name: string } }
    ) => {
      const { name } = action.payload
      state.name = name
    },
    setUserName: (
      state: ActiveChatSliceType,
      action: { payload: { userName: string } }
    ) => {
      const { userName } = action.payload
      state.userName = userName
    },
    setBio: (
      state: ActiveChatSliceType,
      action: { payload: { bio: string } }
    ) => {
      const { bio } = action.payload
      state.bio = bio
    },
  },
})

export default UserSlice
