import { Menu, MenuItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import classNames from 'classnames'
import { storeStateTypes } from '@/types/types'
import img from '@/assets/download.jpeg'
import { UISlice } from '@/redux/slices/UISlice'
import { UserSlice } from '@/redux/slices/UserSlice'
import camera from '@/assets/camera-add.svg'
import ModalContainer from '@/components/Common/ModalContainer/ModalContainer'
import ImageInput from '../ImageInput'

export default function ProfileSettingsPhoto() {
  const dispatch = useDispatch()

  // cropper image
  const defaultSrc = img
  const [imageCropperActive, setImageCropperActive] = useState(false)
  const [image, setImage] = useState(defaultSrc)
  const openModal = useSelector(
    (state: storeStateTypes) => state.UI.cropperModal
  )
  const [openImageModal, setOpenImageModal] = useState(false)

  const profileImage = useSelector((state: storeStateTypes) => state.user.image)
  const cropImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    let files
    if (e.target) {
      files = e.target.files
    }
    const reader = new FileReader()
    reader.onload = () => {
      setImage(reader.result as string)
    }
    if (files != null) {
      reader.readAsDataURL(files[0])
    }
    setImageCropperActive(true)
    dispatch(UISlice.actions.openCropperModal())
  }

  // profile image menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const profileImageMenu = Boolean(anchorEl)
  const handleOpenProfileMenu = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }
  const handleCloseProfileMenu = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    setAnchorEl(null)
  }

  const handleDeleteProfileImage = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(UserSlice.actions.deleteImage())
  }

  // show Image Modal
  const showProfileModal = () => {
    setOpenImageModal(true)
  }
  const closeProfileModal = () => {
    setOpenImageModal(false)
  }

  const handleClose = () => {
    dispatch(UISlice.actions.closeCropperModal())
  }
  return (
    <div className="relative mb-2 mt-4 flex w-full justify-center ">
      <label
        role="button"
        className={classNames(
          'h-32 w-32 content-center overflow-hidden rounded-full  text-center focus:outline-none ',
          profileImage ? '' : 'bg-black dark:bg-gray-700'
        )}
      >
        <div onClick={showProfileModal}>
          <img
            style={{ display: profileImage ? '' : 'none' }}
            className="h-full w-full content-center rounded-full  bg-black  object-cover group-hover:blur-none "
            src={profileImage}
          />
          <div className="absolute right-32 top-[86px] transition-all duration-500 ease-in-out">
            <img
              id="basic-button"
              aria-controls={profileImageMenu ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={profileImageMenu ? 'true' : undefined}
              onClick={handleOpenProfileMenu}
              className="z-10 h-12 w-12 content-center rounded-full border-2 border-white bg-gray-400 object-cover transition-all duration-500 ease-in-out dark:bg-gray-700 "
              src={camera}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={profileImageMenu}
              onClose={handleCloseProfileMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              slotProps={{
                paper: {
                  style: {
                    backgroundColor: 'rgb(var(--background-color-100))',
                    color: 'rgb(var(--background-color-500))',
                  },
                },
              }}
            >
              <MenuItem
                className="bg-gray-200"
                onClick={handleDeleteProfileImage}
              >
                حذف
              </MenuItem>
              <MenuItem onClick={e => e.stopPropagation()}>
                <label>
                  {' '}
                  انتخاب عکس جدید
                  <input
                    className="hidden h-full w-full bg-red-500"
                    onChange={cropImage}
                    type="file"
                    accept="image/png , image/jpeg"
                  />
                </label>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </label>
      <ModalContainer
        children={<ImageInput isActive={imageCropperActive} image={image} />}
        isOpen={openModal}
        onClose={handleClose}
      />
      <ModalContainer
        children={<img src={profileImage} />}
        isOpen={openImageModal}
        onClose={closeProfileModal}
      />
    </div>
  )
}
