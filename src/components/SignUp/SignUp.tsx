import { BiArrowBack } from 'react-icons/bi'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useRef, useState } from 'react'
import classNames from 'classnames'
import LoginInput from '../Common/TextInput/TextInput'

interface SignUpProps {
  active: boolean
  onClick: () => void
}

export default function SignUp({ active, onClick }: SignUpProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
    },
  })
  const [passwordCheckValidate, setPasswordCheckValidate] = useState(true)
  const onSubmit: SubmitHandler<FieldValues> = data => {
    if (data.password !== data.passwordCheck) {
      setPasswordCheckValidate(false)
    } else {
      setPasswordCheckValidate(true)
    }
  }
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const btnRef = useRef(null)
  const checkBoxRef = useRef(null)

  const [btnActive, setBtnActive] = useState(false)
  const checkBoxChangeHandler = () => {
    if (btnRef.current != null && checkBoxRef.current != null) {
      btnRef.current.disabled = !checkBoxRef.current.checked
      if (btnRef.current.disabled) {
        btnRef.current.style.backgroundColor = 'red'
        setBtnActive(false)
      } else {
        btnRef.current.style.backgroundColor = '#16a085'
        setBtnActive(true)
      }
    }
  }
  return (
    <div
      style={{ display: active ? 'flex' : 'none' }}
      className="absolute right-[8%] top-0 flex w-[80%] items-center justify-center rounded-lg bg-white shadow transition-all duration-700 ease-in sm:right-[15%] sm:max-w-md md:right-[25%] xl:right-[34%]"
    >
      <div className="w-full space-y-4 px-4 pb-6 pt-4 sm:px-6 md:space-y-6">
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-6"
        >
          <div
            className={classNames(
              'w-full text-sm text-red-500',
              passwordCheckValidate ? 'hidden' : 'flex'
            )}
          >
            نام کاربری یا رمز عبور اشتباه است.
          </div>
          <LoginInput
            formId="email"
            palceHolder="ایمیل"
            type="email"
            register={register}
            errors={errors}
            required
            pattern={emailRegExp}
          />
          <LoginInput
            formId="password"
            type="password"
            palceHolder="رمز عبور"
            register={register}
            errors={errors}
            pattern={passwordRegex}
            required
          />
          <LoginInput
            formId="checkpassword"
            type="password"
            palceHolder="تایید رمز عبور"
            register={register}
            errors={errors}
            required
          />
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                ref={checkBoxRef}
                type="checkbox"
                className="w-4 rounded border border-gray-300 bg-gray-50 accent-[#16a085] dark:h-4 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                onChange={checkBoxChangeHandler}
              />
            </div>
            <div className="ml-3 text-sm">
              <label className="font-light text-gray-500 dark:text-gray-300">
                <a className="mr-1 font-medium hover:underline" href="#">
                  شرایط و قوانین{' '}
                </a>
                پیامرسان حامی را می پذیرم
              </label>
            </div>
          </div>
          <button
            ref={btnRef}
            type="submit"
            className={classNames(
              'mb-4 w-full bg-red-500 rounded-lg px-5 py-2.5 text-sm font-medium shadow-md hover:shadow-lg text-white transition-all duration-500 focus:outline-none focus:ring-4',
              btnActive
                ? 'hover:shadow-[#16a085]/40'
                : 'hover:shadow-red-500/40'
            )}
          >
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  )
}
