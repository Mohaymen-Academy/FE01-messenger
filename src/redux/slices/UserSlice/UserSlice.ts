import { createSlice } from '@reduxjs/toolkit'

export interface UserSliceType {
  firstName: string
  lastName: string
  userName: string
  image: string
  imageColor: string
  bio: string
  number: string
  theme: string
  token: string
  isInitialProfileCreated: boolean
}
export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    userName: '',
    image: '',
    imageColor: '',
    bio: '',
    number: '',
    theme: '',
    token: localStorage.getItem('token') ?? '',
    isInitialProfileCreated: false,
  },
  reducers: {
    setFirstName: (state: UserSliceType, action: { payload: string }) => {
      state.firstName = action.payload
    },
    setLastName: (state: UserSliceType, action: { payload: string }) => {
      state.lastName = action.payload
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
    deleteToken: (state: UserSliceType) => {
      state.token = ''
    },
    initialProfileCreatedHandler: (
      state: UserSliceType,
      action: { payload: boolean }
    ) => {
      state.isInitialProfileCreated = action.payload
    },
  },
})

export default UserSlice
