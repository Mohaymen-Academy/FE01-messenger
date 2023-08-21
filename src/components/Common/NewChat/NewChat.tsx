import { FieldValues, useForm } from 'react-hook-form'
import classNames from 'classnames'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import camera from '@/assets/camera-add.svg'
import { storeStateTypes } from '@/types/types'
import ImageInput from '@/components/RightSection/ImageInput'
import { UISlice } from '@/redux/slices/UISlice'
import { newChannelService, newGroupService } from '@/services/newChatService'
import ModalContainer from '../ModalContainer'
import TextInput from '../TextInput'

interface NewChatProps {
  type: 'channel' | 'group'
}

export default function NewChat({ type }: NewChatProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      description: '',
    },
  })
  const [image, setImage] = useState('')
  const dispatch = useDispatch()
  const img = useSelector((state: storeStateTypes) => state.user.image)
  let openModal = useSelector(
    (state: storeStateTypes) => state.UI.initialProfileImageCropper
  )
  const handleClose = () => {
    openModal = false
  }
  const cropImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    let files
    if (e.target) {
      console.log(e.target.files)
      files = e.target.files
    }
    const reader = new FileReader()
    reader.onload = () => {
      setImage(reader.result as string)
      console.log(1)
      console.log(image)
    }
    if (files != null) {
      reader.readAsDataURL(files[0])
    }
    dispatch(UISlice.actions.openInitialProfileImageCropper())
  }
  const onSubmit: SubmitHandler<FieldValues> = data => {
    if (type === 'group') {
      newGroupService(data.name, null, [])
      dispatch(UISlice.actions.createGroupHandler(false))
    } else if (type === 'channel') {
      newChannelService(data.name, null, data.description, [])
      dispatch(UISlice.actions.createChannelHandler(false))
    }
  }
  return (
    <div className="flex w-1/2 flex-col items-center justify-center gap-3 overflow-hidden rounded-lg bg-primary py-3">
      <div className="text-xl font-semibold text-primary">
        <p>ساخت {type === 'group' ? 'گروه' : 'کانال'} جدید</p>
      </div>
      <div className="relative mb-2 mt-4 flex w-full justify-center">
        <label className="h-32 w-32 content-center overflow-hidden rounded-full bg-black text-center focus:outline-none dark:bg-gray-500">
          <img
            style={{ display: img ? '' : 'none' }}
            className="h-full w-full content-center overflow-hidden rounded-full bg-primary text-center focus:outline-none"
            src={img}
          />
          <div className="mr-6 mt-5 transition-all duration-500 ease-in-out">
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
          child={<ImageInput isActive={true} image={image} mode="initiate" />}
          isOpen={openModal}
          onClose={handleClose}
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[80%] space-y-6 overflow-hidden pt-2"
      >
        <TextInput
          formId="name"
          palceHolder={`نام ${type === 'channel' ? 'کانال' : 'گروه'}`}
          type="text"
          register={register}
          errors={errors}
          required
        />
        <TextInput
          formId="description"
          palceHolder="توضیحات"
          type="text"
          register={register}
          errors={errors}
        />

        <button
          type="submit"
          className={classNames(
            'mb-4 w-full rounded-lg px-5 bg-secondary hover:bg-[rgb(74,147,84)] hover:dark:bg-[#394079] py-2.5 text-sm font-medium shadow-md hover:shadow-lg text-white transition-all duration-500 focus:outline-none focus:ring-4 hover:shadow-[#16a085]/40'
          )}
        >
          <p>ساخت {type === 'group' ? 'گروه' : 'کانال'} </p>
        </button>
      </form>
    </div>
  )
}
