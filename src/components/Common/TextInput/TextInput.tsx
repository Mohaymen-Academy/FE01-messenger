import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { useMemo, useRef, useState } from 'react'

interface TextInputProps {
  palceHolder: string
  errors?: FieldErrors
  register?: UseFormRegister<FieldValues>
  type?: 'password' | 'email'
  required?: boolean
  formId?: string
  pattern?: RegExp
}

export default function TextInput({
  palceHolder,
  type,
  register,
  required,
  formId,
  pattern,
}: TextInputProps) {
  const [borderBColor, setBorderBottomColor] = useState('rgb(156 163 175)')

  const registerValidator = useMemo(() => {
    if (register && formId) return register(formId, { required, pattern })
    return { register: 'no Register' }
  }, [register])

  const textValidation = e => {
    const inputText = e.target.value
    if (pattern?.test(inputText)) {
      setBorderBottomColor('green')
    } else {
      setBorderBottomColor('red')
    }
  }

  return (
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        style={{ borderBottomColor: borderBColor }}
        type={type}
        className="peer h-full w-full border-b border-b-gray-400 bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-gray-200 focus:outline-0 "
        placeholder=" "
        {...registerValidator}
        onChange={textValidation}
      />
      <label className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:after:scale-x-100 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
        {palceHolder}
      </label>
      {/* <p
        className="text-sm text-gray-500"
        style={{ display: type === 'password' ? 'block' : 'none' }}
      >
        کلمه عبور شما باید حداقل ۸ کاراکتر باشد و حاوی حداقل یک حرف بزرگ، یک حرف
        کوچک و یک عدد باشد.
      </p> */}
    </div>
  )
}
