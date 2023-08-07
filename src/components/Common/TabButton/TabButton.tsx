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
        className="w-full px-1 mt-1 text-center rounded-t-lg hover:bg-gray-200"
      >
        <div
          style={{ borderBottomColor: active ? 'blue' : '' }}
          className="flex items-center justify-center py-2 text-xs font-semibold  border-b-2"
        >
          {text}
        </div>
      </div>
    </>
  )
}
