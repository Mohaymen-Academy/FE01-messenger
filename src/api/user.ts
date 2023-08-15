import { AxiosPromise } from 'axios'
import { apiUrl } from '@/utils/constants'
import axiosInstance from './axiosInstance'

export const login = (data: {
  email: string
  password: string
}): AxiosPromise =>
  axiosInstance.post(`${apiUrl}/user/login`, {
    ...data,
  })
export const register = (data: {
  email: string
  password: string
}): AxiosPromise =>
  axiosInstance.post(`${apiUrl}/user/signup`, {
    ...data,
  })
