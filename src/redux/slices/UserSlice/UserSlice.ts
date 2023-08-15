import { createSlice } from '@reduxjs/toolkit'

export interface UserSliceType {
  name: string
  userName: string
  image: string
  imageColor: string
  bio: string
  number: string
  theme: string
  token: string
}
export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Hossein',
    userName: 'Hossein_Asd',
    image: '',
    imageColor: '',
    bio: 'سلام دوستان',
    number: '',
    theme: '',
    token: localStorage.getItem('token') ?? '',
  },
  reducers: {
    setName: (state: UserSliceType, action: { payload: string }) => {
      state.name = action.payload
    },
    setUserName: (state: UserSliceType, action: { payload: string }) => {
      state.userName = action.payload
    },
    setBio: (state: UserSliceType, action: { payload: string }) => {
      state.bio = action.payload
    },
    setImage: (state: UserSliceType, action: { payload: string }) => {
      state.image = action.payload
    },
    login: (state: UserSliceType, action: { payload: { token: string } }) => {
      const { token } = action.payload
      localStorage.setItem('token', token)
      state.token = token
    },
    deleteImage: (state: UserSliceType) => {
      state.image = ''
    },
  },
})

export default UserSlice
