import { createSlice } from '@reduxjs/toolkit'

export interface UISliceType {
  infoColumn: boolean
  midColumn: boolean
  cropperModal: boolean
}

export const UISlice = createSlice({
  name: 'UI',
  initialState: {
    infoColumn: false,
    midColumn: false,
    cropperModal: false,
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
    openCropperModal: (state: UISliceType) => {
      state.cropperModal = true
    },
    closeCropperModal: (state: UISliceType) => {
      state.cropperModal = false
    },
  },
})

export default UISlice
