import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { useMemo, useState } from 'react'
import classNames from 'classnames'

interface TextInputProps {
  palceHolder: string
  errors?: FieldErrors
  register?: UseFormRegister<FieldValues>
  type?: 'password' | 'email' | 'checkpassword' | 'text' | 'tel'
  required?: boolean
  formId?: string
  pattern?: RegExp
  initialValue?: string
  onClick?: () => void
  onChange?: () => void
  maxLength?: number
  inputSize?: number
}

export default function TextInput({
  palceHolder,
  type,
  register,
  required,
  formId,
  pattern,
  onClick,
  onChange,
  maxLength,
  inputSize,
}: TextInputProps) {
  const [borderBColor, setBorderBottomColor] = useState('rgb(156 163 175)')
  const [isValid, setIsValid] = useState(true)
  const registerValidator = useMemo(() => {
    if (register && formId) return register(formId, { required, pattern })
    return { register: 'no Register' }
  }, [register])

  const textValidation = e => {
    if (pattern == null) return
    const inputText = e.target.value
    if (pattern.test(inputText)) {
      setBorderBottomColor('#16a085')
      setIsValid(true)
    } else {
      setBorderBottomColor('red')
      setIsValid(false)
    }
  }

  return (
    <div
      className="relative h-11 w-full min-w-[200px]"
      style={{
        marginBottom: formId === 'password' && !isValid ? '50px' : '0',
      }}
      onChange={onChange}
    >
      <input
        onClick={onClick}
        style={{
          borderBottomColor: formId !== 'checkpassword' ? borderBColor : 'gray',
        }}
        type={type}
        className="peer relative h-full w-full border-b border-b-gray-400 bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-gray-200 focus:outline-0 "
        placeholder=" "
        {...registerValidator}
        onChange={textValidation}
        maxLength={maxLength}
      />
      {/* <div
        className={classNames(
          maxLength != null
            ? 'absolute top-3 w-6 text-center left-0 rounded-full text-gray-800'
            : 'hidden'
        )}
      >
        {maxLength - inputSize}
      </div> */}
      <label className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:after:scale-x-100 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
        {palceHolder}
      </label>
      <div
        style={{
          display: formId === 'password' && !isValid ? '' : 'none',
        }}
      >
        <p className="text-sm text-red-400">
          کلمه عبور شما باید حداقل ۸ کاراکتر باشد و حاوی حداقل یک حرف بزرگ، یک
          حرف کوچک و یک عدد باشد.
        </p>
      </div>
    </div>
  )
}
