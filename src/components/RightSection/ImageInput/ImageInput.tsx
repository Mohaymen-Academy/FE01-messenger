import React, { useState, useRef } from 'react'
import Cropper, { ReactCropperElement } from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import { useDispatch } from 'react-redux'
import { UserSlice } from '@/redux/slices/UserSlice'
import { UISlice } from '@/redux/slices/UISlice'

interface ImageInputProps {
  isActive: boolean
  image: string
}

export default function ImageInput({ isActive, image }: ImageInputProps) {
  const cropperRef = useRef<ReactCropperElement>(null)

  const dispatch = useDispatch()

  const confirmCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      dispatch(
        UserSlice.actions.setImage(
          cropperRef.current?.cropper.getCroppedCanvas().toDataURL()
        )
      )
      dispatch(UISlice.actions.closeCropperModal())
    }
  }

  return (
    <div style={{ display: isActive ? '' : 'none' }}>
      <div style={{ width: '100%' }}>
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
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
        />
      </div>
      <div
        onClick={confirmCropData}
        className="flex w-full items-center justify-center"
      >
        <div className="mt-3 flex w-auto items-center justify-center rounded-lg bg-blue-500 p-3 text-white hover:bg-blue-800">
          <p>Crop Image</p>
        </div>
      </div>
    </div>
  )
}
