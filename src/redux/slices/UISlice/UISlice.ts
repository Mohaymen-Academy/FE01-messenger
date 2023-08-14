import { createSlice } from '@reduxjs/toolkit'

export interface UISliceType {
  infoColumn: boolean
  midColumn: boolean
  cropperModal: boolean
  profileSettings: boolean
}

export const UISlice = createSlice({
  name: 'UI',
  initialState: {
    infoColumn: false,
    midColumn: false,
    cropperModal: false,
    profileSettings: false,
  },
  reducers: {
    openInfoColumn: (state: UISliceType) => {
      state.infoColumn = true
    },
    closeInfoColumn: (state: UISliceType) => {
      state.infoColumn = false
    },
    openMidColumn: (state: UISliceType) => {
      state.midColumn = true
    },
    closeMidColumn: (state: UISliceType) => {
      state.midColumn = false
    },
    openCropperModal: (state: UISliceType) => {
      state.cropperModal = true
    },
    closeCropperModal: (state: UISliceType) => {
      state.cropperModal = false
    },
    closeProfileSettings: (state: UISliceType) => {
      state.profileSettings = false
    },
    openProfileSettings: (state: UISliceType) => {
      state.profileSettings = true
    },
  },
})

export default UISlice
