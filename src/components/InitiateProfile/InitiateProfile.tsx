import classNames from 'classnames'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import camera from '@/assets/camera-add.svg'
import { storeStateTypes } from '@/types/types'
import { UISlice } from '@/redux/slices/UISlice'
import {
  initiateProfileService,
  uploadProfilePhotoService,
  usernameValidationService,
} from '@/services/dataService'
import TextInput from '../Common/TextInput'
import ImageInput from '../RightSection/ImageInput'
import ModalContainer from '../Common/ModalContainer/ModalContainer'

interface InitiateProfileProps {
  active: boolean
}

export default function InitiateProfile({ active }: InitiateProfileProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: '',
      userName: '',
      lastName: '',
      bio: '',
      image: '',
    },
  })
  const [fileName, setFileName] = useState('')
  const userNameValidation = useSelector(
    (state: storeStateTypes) => state.UI.userNameValid
  )
  const [image, setImage] = useState('')
  const dispatch = useDispatch()
  // const img = useSelector((state: storeStateTypes) => state.user.image)
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
      setFileName(files[0].name)
    }
    dispatch(UISlice.actions.initialProfileImageCropperHandler(true))
  }
  const photoId = localStorage.getItem('imageId')
  const onSubmit: SubmitHandler<FieldValues> = data => {
    const { userName, firstName, lastName, bio } = data
    if (userNameValidation) {
      initiateProfileService(
        userName,
        firstName,
        lastName,
        bio,
        Number(photoId)
      )
    }
  }
  const uniqueUserNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const myInput = e.target.value
    usernameValidationService(myInput)
  }
  let openModal = useSelector(
    (state: storeStateTypes) => state.UI.initialProfileImageCropper
  )
  const handleClose = () => {
    openModal = false
  }
  return (
    <div
      className={classNames(
        'absolute mt-12 right-[8%] top-0 flex w-[80%] items-center justify-center rounded-lg bg-white shadow transition-all duration-700 ease-in sm:right-[15%] sm:max-w-md md:right-[25%] xl:right-[34%]',
        active ? 'flex' : 'hidden'
      )}
    >
      <div className="w-full space-y-4 px-4 pb-6 pt-4 sm:px-6 md:space-y-6">
        <div className="flex flex-col">
          <h1 className="text-center text-xl font-bold text-gray-900  md:text-2xl">
            ثبت اطلاعات
          </h1>
        </div>
        <div className="relative mb-2 mt-4 flex w-full justify-center">
          <label className="h-32 w-32 content-center overflow-hidden rounded-full bg-black text-center focus:outline-none">
            <img
              style={{ display: image ? '' : 'none' }}
              className="h-full w-full content-center overflow-hidden rounded-full bg-black text-center focus:outline-none"
              src={image}
            />
            <div className="mr-6 mt-6 transition-all duration-500 ease-in-out">
              <img
                className="z-10 h-20 w-20 content-center object-cover transition-all duration-500 ease-in-out "
                src={camera}
              />
            </div>

            <input
              className="hidden h-full w-full"
              onChange={cropImage}
              type="file"
              accept="image/png , image/jpeg"
            />
          </label>
          <ModalContainer
            child={
              <ImageInput
                isActive={true}
                image={image}
                mode="initiate"
                fileName={fileName}
              />
            }
            isOpen={openModal}
            onClose={handleClose}
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 overflow-hidden pt-1"
        >
          <TextInput
            formId="firstName"
            palceHolder="نام"
            type="text"
            register={register}
            errors={errors}
            required
          />
          <TextInput
            formId="lastName"
            palceHolder="نام خانوادگی"
            type="text"
            register={register}
            errors={errors}
          />
          <TextInput
            formId="userName"
            palceHolder=" نام کاربری"
            type="text"
            register={register}
            errors={errors}
            onChange={uniqueUserNameHandler}
            required
          />
          <p
            className={classNames(
              !userNameValidation ? 'mt-[-10px] text-sm text-red-400' : 'hidden'
            )}
          >
            این نام کاربری قبلا استفاده شده است
          </p>
          <TextInput
            formId="bio"
            palceHolder="بیوگرافی"
            type="text"
            register={register}
            errors={errors}
          />
          <button
            type="submit"
            className={classNames(
              'mb-4 w-full rounded-lg px-5 bg-[#16a085] py-2.5 text-sm font-medium shadow-md hover:shadow-lg text-white transition-all duration-500 focus:outline-none focus:ring-4 hover:shadow-[#16a085]/40'
            )}
          >
            ثبت
          </button>
        </form>
      </div>
    </div>
  )
}
