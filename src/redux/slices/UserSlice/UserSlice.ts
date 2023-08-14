import { createSlice } from '@reduxjs/toolkit'
import { login } from '@/api/Login'

export interface UserSliceType {
  name: string
  userName: string
  image: string
  imageColor: string
  bio: string
  number: string
  theme: string
  jwt: string
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
    jwt: localStorage.getItem('jwt') ?? '',
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
      action: { payload: { image: string } }
    ) => {
      const image = action.payload
      state.image = image
    },
    login: (state: UserSliceType, action: { payload: { jwt: string } }) => {
      console.log('first')
      const { jwt } = action.payload
      state.jwt = jwt
    },
  },
})

export default UserSlice
