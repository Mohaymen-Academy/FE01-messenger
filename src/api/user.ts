import { AxiosPromise } from 'axios'
import { apiUrl } from '@/utils/constants'
import axiosInstance from './axiosInstance'

export const login = (data: {
  email: string
  password: string
}): AxiosPromise<{ token: string }> =>
  axiosInstance.post(`${apiUrl}/user/login`, {
    ...data,
  })
export const register = (data: {
  email: string
  password: string
}): AxiosPromise<{ token: string }> =>
  axiosInstance.post(`${apiUrl}/user/signup`, {
    ...data,
  })

export const editProfile = (data: {
  username: string
  firstName: string
  lastName: string
  bio: string
  photo: null
}): AxiosPromise =>
  axiosInstance.put(`${apiUrl}/profile`, {
    ...data,
  })
