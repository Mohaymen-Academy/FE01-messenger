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
    name: '',
    userName: '',
    image: '',
    imageColor: '',
    bio: '',
    number: '',
    theme: '',
  },
  reducers: {},
})

export default UserSlice
