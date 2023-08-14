import { BiArrowBack } from 'react-icons/bi'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import LoginInput from '../Common/TextInput/TextInput'

interface LoginProps {
  active: boolean
  onClick: () => void
}

export default function Login({ active, onClick }: LoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const onSubmit: SubmitHandler<FieldValues> = data => {
    console.log(1)
  }
  return (
    <div
      style={{ display: active ? '' : 'none' }}
      className="absolute right-[8%] top-0 mt-8 w-[80%] rounded-lg bg-white shadow transition-all duration-700 ease-in sm:right-[15%] sm:max-w-md md:right-[25%] xl:right-[34%]"
    >
      <div className="w-full space-y-4 px-4 pb-6 pt-3 sm:px-8 md:space-y-6">
        <div className="flex flex-col">
          <button
            onClick={onClick}
            className="flex w-full justify-end text-sm font-light text-gray-500"
          >
            <BiArrowBack className="h-6 w-10" />
          </button>
          <h1 className="text-center text-xl font-bold text-gray-900  md:text-2xl">
            پیامرسان هرمس
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-6"
          action="#"
        >
          <LoginInput
            formId="email"
            type="email"
            palceHolder="ایمیل"
            register={register}
            errors={errors}
            required
          />
          <LoginInput
            formId="password"
            type="password"
            register={register}
            errors={errors}
            required
            palceHolder="رمز عبور"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border border-gray-300 bg-gray-50 accent-[#16a085]"
                />
              </div>
              <div className="mr-2 text-sm">
                <label className="text-gray-500">مرا به خاطر بسپار</label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-[#16a085] px-5 py-2.5 text-center text-sm font-medium text-white shadow-md  hover:shadow-lg hover:shadow-[#16a085]/40"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  )
}
