import { createSlice } from '@reduxjs/toolkit'

type SnackType = null | {
  text: string
  severity: 'error' | 'warning' | 'info' | 'success'
}
export interface UISliceType {
  infoColumn: boolean
  midColumn: boolean
  cropperModal: boolean
  profileSettings: boolean
  snack: SnackType
  initiateProfile: boolean
  initialProfileImageCropper: boolean
  createChannel: boolean
  createGroup: boolean
  signUp: boolean
  login: boolean
  userNameValid: boolean
  isInitialProfileCreated: boolean
  contactSearchBar: boolean
  chatColumnActive: boolean
}

export const UISlice = createSlice({
  name: 'UI',
  initialState: {
    infoColumn: false,
    midColumn: false,
    cropperModal: false,
    profileSettings: false,
    snack: null,
    initiateProfile: false,
    initialProfileImageCropper: false,
    createChannel: false,
    createGroup: false,
    signUp: false,
    login: false,
    userNameValid: true,
    isInitialProfileCreated: false,
    contactSearchBar: false,
    chatColumnActive: true,
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
    openSnack: (
      state: UISliceType,
      action: { type: string; payload: SnackType }
    ) => {
      state.snack = action.payload
    },
    closeSnack: (state: UISliceType) => {
      state.snack = null
    },
    initiateProfileHandler: (
      state: UISliceType,
      action: { payload: boolean }
    ) => {
      if (state.isInitialProfileCreated && action.payload) {
        state.initiateProfile = false
      } else {
        state.initiateProfile = action.payload
      }
      // console.log(state.initiateProfile)
    },
    initialProfileImageCropperHandler: (
      state: UISliceType,
      action: { payload: boolean }
    ) => {
      state.initialProfileImageCropper = action.payload
    },

    createChannelHandler: (
      state: UISliceType,
      action: { payload: boolean }
    ) => {
      state.createChannel = action.payload
    },
    createGroupHandler: (state: UISliceType, action: { payload: boolean }) => {
      state.createGroup = action.payload
    },
    signUpHandler: (state: UISliceType, action: { payload: boolean }) => {
      state.signUp = action.payload
    },
    loginHandler: (state: UISliceType, action: { payload: boolean }) => {
      state.login = action.payload
    },
    userNameHandler: (state: UISliceType, action: { payload: boolean }) => {
      state.userNameValid = action.payload
    },
    initialProfileCreatedHandler: (state: UISliceType) => {
      state.isInitialProfileCreated = true
    },
    contactSearchbarHandler: (
      state: UISliceType,
      action: { payload: boolean }
    ) => {
      state.contactSearchBar = action.payload
    },chatColumnHandler: (
      state: UISliceType,
      action: { payload: boolean }
    ) => {
      state.chatColumnActive = action.payload
    },
  },
})

export default UISlice
