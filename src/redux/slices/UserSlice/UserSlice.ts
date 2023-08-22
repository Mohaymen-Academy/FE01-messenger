import { createSlice } from '@reduxjs/toolkit'

export interface UserSliceType {
  firstName: string
  lastName: string
  userName: string
  image: string
  imageId: number
  bio: string
  number: string
  theme: string
  token: string
}

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    userName: '',
    image: '',
    imageId: 0,
    bio: '',
    number: '',
    theme: '',
    token: localStorage.getItem('token') ?? '',
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
      console.log('inside action')
      state.token = ''
      localStorage.setItem('token', '')
    },
    setProfileId: (state: UserSliceType, action: { payload: string }) => {
      state.profileId = action.payload
    },
    setImageId: (state: UserSliceType, action: { payload: number }) => {
      state.imageId = action.payload
    },
  },
})

export default UserSlice
