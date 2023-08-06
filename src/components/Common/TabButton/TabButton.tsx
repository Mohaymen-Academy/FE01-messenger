interface TabButtonProps {
  text: string
  active: boolean
}

export default function TabButton({ text, active }: TabButtonProps) {
  return (
    <>
      <li className="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
        <a
          style={{ borderBottomColor: active ? 'blue' : 'none'}}
          className="flex items-center justify-center block py-2 text-xs font-semibold leading-normal tracking-wide border-b-2"
        >
          {text}
        </a>
      </li>
    </>
  )
}
