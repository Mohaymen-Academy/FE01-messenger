import { BiArrowBack } from 'react-icons/bi'
import logo from '@/assets/Telegram_logo.svg.webp'
import LoginInput from '../Common/TextInput/TextInput'

interface SignUpProps {
  active: boolean
  onClick: () => void
}

export default function SignUp({ active, onClick }: SignUpProps) {
  return (
    <div
      style={{ display: active ? 'flex' : 'none' }}
      className="absolute right-[8%] top-0 flex w-[80%] items-center justify-center rounded-lg bg-white shadow transition-all duration-700 ease-in sm:right-[15%] sm:max-w-md md:right-[25%] lg:right-[34%]"
    >
      <div className="w-full space-y-4 px-4 pb-6 pt-3 sm:px-6 md:space-y-6">
        <div className="flex flex-col">
          <button
            onClick={onClick}
            className="flex w-full justify-end text-sm font-light text-gray-500"
          >
            <BiArrowBack className="h-6 w-10" />
          </button>
          <h1 className="text-center text-xl font-bold text-gray-900  md:text-2xl">
            ثبت نام
          </h1>
        </div>
        <form className="space-y-4 md:space-y-6" action="#">
          <LoginInput palceHolder="ایمیل" />
          <LoginInput palceHolder="رمز عبور" />
          <LoginInput palceHolder="تایید رمز عبور" />
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                type="checkbox"
                className="w-4 rounded border border-gray-300 bg-gray-50 dark:h-4 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label className="font-light text-gray-500 dark:text-gray-300">
                <a className="font-medium hover:underline" href="#">
                  شرایط و قوانین{' '}
                </a>
                پیامرسان حامی را می پذیرم
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mb-4 w-full rounded-lg bg-blue-500 px-5 py-2.5  text-sm font-medium text-white focus:outline-none focus:ring-4"
          >
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  )
}
