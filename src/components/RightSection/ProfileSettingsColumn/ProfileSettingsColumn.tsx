import { IoArrowForward } from 'react-icons/io5'
import { useContext } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@/components/Common/IconButton'
import TextInput from '@/components/Common/TextInput/TextInput'
import img from '@/assets/download.jpeg'
import camera from '@/assets/camera-add.svg'
import FabButton from '@/components/Common/FabButton/FabButton'
import { UserSlice } from '@/redux/slices/UserSlice'
import { storeStateTypes } from '@/types/types'
import { Context } from '../context/Context'

interface ProfileSettingsColumnProps {
  isActive: boolean
}

export default function ProfileSettingsColumn({
  isActive,
}: ProfileSettingsColumnProps) {
  const value = useContext(Context)
  const name = useSelector((state: storeStateTypes) => state.user.name)
  const userName = useSelector((state: storeStateTypes) => state.user.userName)
  const bio = useSelector((state: storeStateTypes) => state.user.bio)
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
    dispatch(UserSlice.actions.setName(data.name))
    dispatch(UserSlice.actions.setBio(data.bio))
    dispatch(UserSlice.actions.setUserName(data.userName))
  }

  return (
    <form
      style={{ transform: isActive ? '' : 'translateX(100%)' }}
      onSubmit={handleSubmit(onSubmit)}
      className="absolute z-10 h-full w-full overflow-x-hidden bg-primary/100 shadow-xl transition-all duration-500 ease-in-out max-sm:w-full"
    >
      <div className="relative w-full bg-primary shadow-xl max-sm:w-full">
        <div className="flex w-full items-center justify-between p-3">
          <IconButton
            onClick={value}
            icon={
              <IoArrowForward className="h-6 w-6 fill-current text-gray-600" />
            }
          />
          <div className="ml-auto mr-4 text-lg font-medium">ویرایش پروفایل</div>
        </div>
      </div>
      <div className="mb-2 mt-4 flex justify-center">
        <label
          role="button"
          className="h-32 w-32 content-center overflow-hidden rounded-full p-1 text-center focus:outline-none"
        >
          <div className="group relative">
            <img
              className="h-full w-full content-center rounded-full border-2 border-gray-200 object-cover blur-[2px] group-hover:blur-none"
              src={img}
            />
            <div className="absolute right-7 top-7 transition-all duration-500 ease-in-out hover:right-5 hover:top-5 ">
              <img
                className="z-10 h-16 w-16 content-center object-cover transition-all duration-500 ease-in-out hover:h-20 hover:w-20"
                src={camera}
              />
            </div>
          </div>

          <input
            type="file"
            accept="image/png , image/jpeg"
            className="hidden"
          />
        </label>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 px-5 py-10">
        <TextInput
          formId="name"
          palceHolder="نام کاربری"
          type="text"
          register={register}
          errors={errors}
          onClick={() => setValue('name', '')}
        />
        {/* <TextInput
          formId="phoneNumber"
          palceHolder="شماره همراه"
          type="tel"
          register={register}
          errors={errors}
        /> */}
        <div>
          <TextInput
            formId="bio"
            palceHolder="بیوگرافی"
            type="text"
            register={register}
            errors={errors}
            initialValue={bio}
            onClick={() => setValue('bio', '')}
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
          onClick={() => setValue('userName', '')}
        />
        <button type="submit" className="absolute bottom-0 left-0">
          <FabButton
            primary={true}
            icon={<BsCheck2 className="h-8 w-8 fill-current text-white" />}
          />
        </button>
      </div>
    </form>
  )
}
