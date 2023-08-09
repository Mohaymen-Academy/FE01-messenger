import LoginInput from '../Common/LoginInput/LoginInput'

interface LoginProps {}

export default function Login({}: LoginProps) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a className="mb-6 flex items-center text-2xl font-semibold text-gray-900 ">
          <img className="mr-2 h-8 w-8" alt="logo" />
        </a>
        <div className="w-full rounded-lg bg-white shadow   sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900  md:text-2xl">
              پیامرسان حامی
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <LoginInput palceHolder="ایمیل" />
              <LoginInput palceHolder="رمز عبور" />
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="h-4 w-4 rounded border border-gray-300 bg-gray-50"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500">مرا به خاطر بسپار</label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white "
              >
                ورود
              </button>
              <p className="text-sm font-light text-gray-500">
                <a href="#" className="font-medium hover:underline">
                  ثبت نام
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
