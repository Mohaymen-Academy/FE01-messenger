import { IoArrowForward } from 'react-icons/io5'
import { useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@/components/Common/IconButton'
import TextInput from '@/components/Common/TextInput/TextInput'
import FabButton from '@/components/Common/FabButton/FabButton'
import { UserSlice } from '@/redux/slices/UserSlice'
import { storeStateTypes } from '@/types/types'
import { UISlice } from '@/redux/slices/UISlice'
import ProfileSettingsPhoto from '../ProfileSettingsPhoto/ProfileSettingsPhoto'

interface ProfileSettingsColumnProps {
  isActive: boolean
}

export default function ProfileSettingsColumn({
  isActive,
}: ProfileSettingsColumnProps) {
  const name = useSelector((state: storeStateTypes) => state.user.name)
  const userName = useSelector((state: storeStateTypes) => state.user.userName)
  const bio = useSelector((state: storeStateTypes) => state.user.bio)
  const [confirmButtonActive, setConfirmButtonActive] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      name,
      bio,
      userName,
    },
  })
  const dispatch = useDispatch()
  const onSubmit: SubmitHandler<FieldValues> = data => {
    dispatch(UserSlice.actions.setName(data.name as string))
    dispatch(UserSlice.actions.setBio(data.bio as string))
    dispatch(UserSlice.actions.setUserName(data.userName as string))
    dispatch(UISlice.actions.closeProfileSettings())
    setConfirmButtonActive(false)
  }

  const showConfirmButton = () => {
    if (!confirmButtonActive) {
      setConfirmButtonActive(true)
    }
  }

  const closeProfileSettings = () => {
    dispatch(UserSlice.actions.setName(name))
    dispatch(UserSlice.actions.setBio(bio))
    dispatch(UserSlice.actions.setUserName(userName))
    dispatch(UISlice.actions.closeProfileSettings())
    setConfirmButtonActive(false)
    setValue('bio', bio)
    setValue('name', name)
    setValue('userName', userName)
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
          formId="name"
          palceHolder="نام کاربری"
          type="text"
          register={register}
          errors={errors}
          onClick={() => setValue('name', name)}
          onChange={showConfirmButton}
        />

        <div>
          <TextInput
            formId="bio"
            palceHolder="بیوگرافی"
            type="text"
            register={register}
            errors={errors}
            initialValue={bio}
            onClick={() => setValue('bio', bio)}
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
          palceHolder="آیدی"
          type="text"
          register={register}
          errors={errors}
          onClick={() => setValue('userName', userName)}
          onChange={showConfirmButton}
        />
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
