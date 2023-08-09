import LoginInput from '../Common/LoginInput/LoginInput'

interface SignUpProps {}

export default function SignUp({}: SignUpProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a
          href="#"
          className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="mr-2 h-8 w-8" alt="logo" />
        </a>
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              ثبت نام
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <LoginInput palceHolder="ایمیل" />
              <LoginInput palceHolder="رمز عبور" />
              <LoginInput palceHolder="تایید رمز عبور" />
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="terms"
                    aria-describedby="terms"
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
                className="w-full rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
              >
                ثبت نام
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                <a href="#" className="font-medium hover:underline">
                  ورود به اکانت
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
