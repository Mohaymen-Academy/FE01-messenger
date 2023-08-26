import { createSlice } from '@reduxjs/toolkit'

type SnackType = null | {
  text: string
  severity: 'error' | 'warning' | 'info' | 'success'
}
type chatListType = null | {
  chatList: 'all' | 'PV' | 'GROUP' | 'CHANNEL' | 'SELF'
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
  contactSearchBar: boolean
  chatColumnActive: boolean
  isInitialProfileCreated: boolean
  chatListCat: chatListType
  addMemberModal: boolean
  channelImageId: number
  activeChatRow: number
  replying: undefined | { messageId: string; name: string }
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
    contactSearchBar: false,
    chatColumnActive: true,
    isInitialProfileCreated: false,
    chatListCat: null,
    addMemberModal: false,
    channelImageId: 0,
    activeChatRow: -1,
    replying: undefined,
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
      if (state.isInitialProfileCreated === true && action.payload) {
        state.initiateProfile = false
      } else {
        console.log(123)
        state.initiateProfile = action.payload
      }
    },
    initialProfileCreatedHandler: (
      state: UISliceType,
      action: { payload: boolean }
    ) => {
      state.isInitialProfileCreated = action.payload
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
    contactSearchbarHandler: (
      state: UISliceType,
      action: { payload: boolean }
    ) => {
      state.contactSearchBar = action.payload
    },
    chatColumnHandler: (state: UISliceType, action: { payload: boolean }) => {
      state.chatColumnActive = action.payload
    },
    chatListHandler: (
      state: UISliceType,
      action: { payload: chatListType }
    ) => {
      state.chatListCat = action.payload
    },
    addMemberHandler: (state: UISliceType, action: { payload: boolean }) => {
      state.addMemberModal = action.payload
    },
    setChannelImageId: (state: UISliceType, action: { payload: number }) => {
      state.channelImageId = action.payload
    },
    setActiveChatRow: (state: UISliceType, action: { payload: number }) => {
      state.activeChatRow = action.payload
    },
    resetActiveChatRow: (state: UISliceType) => {
      state.activeChatRow = -1
    },
    setReplying: (
      state: UISliceType,
      action: { payload: { messageId: string; name: string } }
    ) => {
      state.replying = action.payload
    },
    resetReplying: (state: UISliceType) => {
      state.replying = undefined
    },
  },
})

export default UISlice
