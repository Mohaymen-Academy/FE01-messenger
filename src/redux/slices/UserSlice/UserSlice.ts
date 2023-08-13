import { createSlice } from '@reduxjs/toolkit'

export interface UserSliceType {
  name: string
  userName: string
  image: object
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
    bio: 'سلام دوستان!!!',
    number: '',
    theme: '',
  },
  reducers: {
    setName: (state: UserSliceType, action: { payload: { name: string } }) => {
      const name = action.payload
      state.name = name
    },
    setUserName: (
      state: UserSliceType,
      action: { payload: { userName: string } }
    ) => {
      const userName = action.payload
      state.userName = userName
    },
    setBio: (state: UserSliceType, action: { payload: { bio: string } }) => {
      const bio = action.payload
      state.bio = bio
    },
    setImage: (
      state: UserSliceType,
      action: { payload: { image: object } }
    ) => {
      const image = action.payload
      state.image = image
    },
  },
})

export default UserSlice
