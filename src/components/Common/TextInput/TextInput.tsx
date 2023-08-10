import { Input } from '@material-tailwind/react'

interface TextInputProps {
  palceHolder: string
}

export default function TextInput({ palceHolder }: TextInputProps) {
  return (
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        className="peer h-full w-full border-b border-gray-200 bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-gray-50"
        placeholder=" "
      />
      <label className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:after:scale-x-100 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
        {palceHolder}
      </label>
    </div>
  )
}
