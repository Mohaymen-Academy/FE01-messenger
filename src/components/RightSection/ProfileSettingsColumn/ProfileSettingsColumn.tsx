import { IoArrowForward } from 'react-icons/io5'
import IconButton from '@/components/Common/IconButton'
import TextInput from '@/components/Common/TextInput/TextInput'
import img from '@/assets/download.jpeg'
import camera from '@/assets/camera-add.svg'

interface ProfileSettingsColumnProps {
  isActive: boolean
  onClick?: () => void
}

export default function ProfileSettingsColumn({
  isActive,
  onClick,
}: ProfileSettingsColumnProps) {
  return (
    <div
      style={{ transform: isActive ? '' : 'translateX(100%)' }}
      className="absolute z-10 h-full w-full overflow-x-hidden bg-primary/100 shadow-xl transition-all duration-500 ease-in-out max-sm:w-full"
    >
      <div className="relative w-full bg-primary shadow-xl max-sm:w-full">
        <div className="flex w-full items-center justify-between p-3">
          <IconButton
            onClick={onClick}
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
          <div className="relative">
            <img
              className="h-full w-full content-center rounded-full border-2 border-gray-200 object-cover"
              src={img}
            />
            <div className="absolute right-7 top-7 transition-all duration-500 ease-in-out hover:right-5 hover:top-5">
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
        <TextInput palceHolder="نام کاربری" />
        <TextInput palceHolder="شماره همراه" />
        <div>
          <TextInput palceHolder="بیوگرافی" />
          <p className="pt-1 text-sm text-gray-500">
            شما می‌توانید چند خط درباره خودتان اضافه کنید. هرکس که پروفایل شما
            را مشاهده کند این متن را خواهد دید.
          </p>
        </div>
        <TextInput palceHolder="آیدی" />
      </div>
    </div>
  )
}
