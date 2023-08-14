import logo from '@/assets/logo.jpeg'

interface LoginLandingProps {
  onClick: (e) => void
  active: boolean
}

export default function LoginLanding({ onClick, active }: LoginLandingProps) {
  return (
    <div
      style={{ top: active ? '0' : '-440px' }}
      className="relative right-[2%] top-0 z-10 w-[90%] overflow-hidden rounded-lg bg-white shadow transition-all duration-300 ease-out sm:right-[13%] sm:w-[80%] sm:max-w-md md:right-[23.5%] xl:right-[33.5%]"
    >
      <div className="my-6 flex items-center justify-center text-2xl font-semibold text-gray-900">
        <img src={logo} className="mt-4 h-36 w-36" alt="logo" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="py-4 text-center text-4xl font-bold">
          <p> هرمس</p>
        </div>
        <div className="text-center text-gray-500">
          <p>عصر جدیدی در پیامرسانی</p>
        </div>
        <div className="flex items-center justify-center gap-6 py-6">
          <button
            onClick={onClick}
            className="rounded-lg bg-blue-500 px-6 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 "
          >
            ورود
          </button>
          <button
            onClick={onClick}
            className="rounded-lg bg-blue-500 px-6 py-3 text-xs font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 "
          >
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  )
}
