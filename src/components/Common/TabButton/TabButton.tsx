interface TabButtonProps {
  text: string
  active: boolean
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

export default function TabButton({ text, active, onClick }: TabButtonProps) {
  return (
    <>
      <div
        onClick={onClick}
        className="mt-1 w-full rounded-t-lg px-1 text-center hover:bg-gray-200"
      >
        <div
          style={{ borderBottomColor: active ? 'blue' : '' }}
          className="flex items-center justify-center border-b-2 py-2 text-xs  font-semibold"
        >
          {text}
        </div>
      </div>
    </>
  )
}
