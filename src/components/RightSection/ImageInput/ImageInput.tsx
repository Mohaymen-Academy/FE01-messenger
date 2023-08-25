import { useRef } from 'react'
import 'cropperjs/dist/cropper.css'
import { Cropper, ReactCropperElement } from 'react-cropper'
import { useDispatch, useSelector } from 'react-redux'
import { UserSlice } from '@/redux/slices/UserSlice'
import { UISlice } from '@/redux/slices/UISlice'
import {
  editProfilePhotoService,
  uploadProfilePhotoService,
} from '@/services/dataService'
import { uploadProfilePhoto } from '@/api/data'
import { storeStateTypes } from '@/types/types'

interface ImageInputProps {
  isActive: boolean
  image: string
  mode?: 'initiate' | 'profileEditor' | 'newChannel'
  fileName?: string
}

export default function ImageInput({
  isActive,
  image,
  mode,
  fileName,
}: ImageInputProps) {
  const cropperRef = useRef<ReactCropperElement>(null)
  const photoId = localStorage.getItem('imageId')
  const dispatch = useDispatch()

  const confirmCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      const dataurl = cropperRef.current?.cropper.getCroppedCanvas().toDataURL()
      const arr = dataurl.split(',')
      const bstr = atob(arr[arr.length - 1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)
      while (n > 0) {
        u8arr[n] = bstr.charCodeAt(n)
        n -= 1
      }
      const file = new File([u8arr], fileName)
      const fd = new FormData()
      fd.append('file', file)
      if (mode === 'initiate') {
        uploadProfilePhotoService(fd)
        dispatch(
          UserSlice.actions.setImage(
            cropperRef.current?.cropper.getCroppedCanvas().toDataURL()
          )
        )
        dispatch(UISlice.actions.initialProfileImageCropperHandler(false))
      } else if (mode === 'profileEditor') {
        editProfilePhotoService(fd, Number(photoId))
      } else if (mode === 'newChannel') {
      }
      dispatch(UISlice.actions.closeCropperModal())
    }
  }

  return (
    <div style={{ display: isActive ? '' : 'none' }}>
      <Cropper
        style={{ height: 400, width: '100%' }}
        initialAspectRatio={1}
        preview=".img-preview"
        src={image}
        ref={cropperRef}
        viewMode={1}
        guides={true}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        checkOrientation={false}
      />
      <div
        onClick={confirmCropData}
        className="flex w-full items-center justify-center"
      >
        <div className="mt-3 flex w-auto cursor-pointer items-center justify-center rounded-lg bg-blue-500 p-3 text-white hover:bg-blue-800">
          <p>Crop Image</p>
        </div>
      </div>
    </div>
  )
}
