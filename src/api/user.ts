import { AxiosPromise } from 'axios'
import { apiUrl } from '@/utils/constants'
import axiosInstance from './axiosInstance'

const login = (data: { email: string; password: string }): AxiosPromise =>
  //   return new Promise<string>(resolve => {
  //     setTimeout(() => {
  //       resolve('test')
  //     }, 300)
  //   })
  axiosInstance.post(`${apiUrl}/login`, {
    data,
  })

export default login
