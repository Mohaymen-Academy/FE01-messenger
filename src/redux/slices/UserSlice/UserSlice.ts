import { createSlice } from '@reduxjs/toolkit'

export interface UserSliceType {
  name: string
  userName: string
  image: string
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
    bio: '',
    number: '',
    theme: '',
  },
  reducers: {},
})

export default UserSlice
