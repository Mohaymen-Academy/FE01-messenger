import { AxiosPromise } from 'axios'
import { apiUrl } from '@/utils/constants'
import axiosInstance from './axiosInstance'

export const contactSearch = (data: { username: string }): AxiosPromise =>
  axiosInstance.get(`${apiUrl}/profile/search?username=${data.username}`)

export const messageSearch = (data: { username: string }): AxiosPromise =>
  axiosInstance.get(`${apiUrl}/profile/username`, {
    params: { search: data.username },
  })
