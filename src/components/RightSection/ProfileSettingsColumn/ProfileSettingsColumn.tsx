import { IoArrowForward } from 'react-icons/io5'
import React, { useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import IconButton from '@/components/Common/IconButton'
import TextInput from '@/components/Common/TextInput/TextInput'
import FabButton from '@/components/Common/FabButton/FabButton'
import { storeStateTypes } from '@/types/types'
import { UISlice } from '@/redux/slices/UISlice'
import {
  initiateProfileService,
  usernameValidationService,
} from '@/services/dataService'
import { editProfileService } from '@/services/userService'
import { UserSlice } from '@/redux/slices/UserSlice'
import ProfileSettingsPhoto from '../ProfileSettingsPhoto/ProfileSettingsPhoto'

interface ProfileSettingsColumnProps {
  isActive: boolean
}

export default function ProfileSettingsColumn({
  isActive,
}: ProfileSettingsColumnProps) {
  const defaultFirstName = useSelector(
    (state: storeStateTypes) => state.user.firstName
  )
  const defaultLastName = useSelector(
    (state: storeStateTypes) => state.user.lastName
  )
  const defaultUserName = useSelector(
    (state: storeStateTypes) => state.user.userName
  )
  const defaultBio = useSelector((state: storeStateTypes) => state.user.bio)
  const [confirmButtonActive, setConfirmButtonActive] = useState(false)
  const userNameValidation = useSelector(
    (state: storeStateTypes) => state.UI.userNameValid
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      defaultFirstName,
      defaultLastName,
      defaultBio,
      defaultUserName,
    },
  })
  const dispatch = useDispatch()
  // const image = useSelector((state: storeStateTypes) => state.user.image)
  const onSubmit: SubmitHandler<FieldValues> = data => {
    // console.log(data)
    let { userName, firstName, lastName, bio } = data
    if (userName === '') {
      userName = defaultUserName
    }
    if (lastName === '') {
      lastName = defaultLastName
    }
    if (bio === '') {
      bio = defaultBio
    }
    if (firstName === '') {
      firstName = defaultFirstName
    }
    if (userNameValidation) {
      editProfileService(userName, firstName, lastName, bio)
    }
    dispatch(UISlice.actions.closeProfileSettings())
    setConfirmButtonActive(false)
  }

  const showConfirmButton = () => {
    if (!confirmButtonActive) {
      setConfirmButtonActive(true)
    }
  }

  const changeUserNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const myInput = e.target.value
    if (myInput !== defaultUserName) {
      usernameValidationService(myInput)
      showConfirmButton()
    }
  }

  const closeProfileSettings = () => {
    dispatch(UISlice.actions.closeProfileSettings())
    setConfirmButtonActive(false)
    setValue('bio', defaultBio)
    setValue('firstName', defaultFirstName)
    setValue('lastName', defaultLastName)
    setValue('userName', defaultUserName)
  }

  return (
    <div
      style={{ transform: isActive ? '' : 'translateX(100%)' }}
      className="absolute z-10 h-full w-full bg-primary/100 shadow-xl transition-all duration-500 ease-in-out max-sm:w-full"
    >
      {/* header */}
      <div className="relative w-full bg-primary shadow-xl max-sm:w-full">
        <div className="flex w-full items-center justify-between p-3">
          <IconButton
            onClick={closeProfileSettings}
            icon={
              <IoArrowForward className="h-6 w-6 fill-current text-gray-600" />
            }
          />
          <div className="ml-auto mr-4 text-lg font-medium">ویرایش پروفایل</div>
        </div>
      </div>
      {/* change photo */}
      <ProfileSettingsPhoto />
      {/* inputs */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-5 px-5 py-10"
      >
        <TextInput
          formId="firstName"
          palceHolder="نام"
          type="text"
          register={register}
          errors={errors}
          onClick={() => setValue('firstName', defaultFirstName)}
          onChange={showConfirmButton}
        />
        <TextInput
          formId="lastName"
          palceHolder=" نام خانوادگی"
          type="text"
          register={register}
          errors={errors}
          onClick={() => setValue('lastName', defaultLastName)}
          onChange={showConfirmButton}
        />
        <div>
          <TextInput
            formId="bio"
            palceHolder="بیوگرافی"
            type="text"
            register={register}
            errors={errors}
            initialValue={defaultBio}
            onClick={() => setValue('bio', defaultBio)}
            onChange={showConfirmButton}
            maxLength={100}
          />
          <p className="pt-1 text-sm text-gray-500">
            شما می‌توانید چند خط درباره خودتان اضافه کنید. هرکس که پروفایل شما
            را مشاهده کند این متن را خواهد دید.
          </p>
        </div>
        <TextInput
          formId="userName"
          palceHolder="نام کاربری"
          type="text"
          register={register}
          errors={errors}
          onClick={() => setValue('userName', defaultUserName)}
          onChange={changeUserNameHandler}
        />
        <p
          className={classNames(
            !userNameValidation ? 'mt-[-10px] text-sm text-red-400' : 'hidden'
          )}
        >
          این نام کاربری قبلا استفاده شده است
        </p>
        <button
          type="submit"
          style={{ bottom: confirmButtonActive ? '0' : '-100px' }}
          className="absolute bottom-0 left-0 transition-all duration-300 ease-in-out"
        >
          <FabButton
            primary={true}
            icon={<BsCheck2 className="h-8 w-8 fill-current text-white" />}
          />
        </button>
      </form>
    </div>
  )
}
