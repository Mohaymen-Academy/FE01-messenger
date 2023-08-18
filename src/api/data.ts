import { AxiosPromise } from 'axios'
import { apiUrl } from '@/utils/constants'
import axiosInstance from './axiosInstance'

export const chatListData = (data: { profileId: string }): AxiosPromise =>
  axiosInstance.get(`${apiUrl}/chat/get`)

export const initiateProfile = (data: {
  username: string
  firstName: string
  lastName: string
  bio: string
  picture: null
}): AxiosPromise =>
  axiosInstance.post(`${apiUrl}/profile`, {
    ...data,
  })

export const usernameValidation = (data: { username: string }): AxiosPromise =>
  axiosInstance.get(`${apiUrl}/profile/username`, {
    params: { search: data.username },
  })
