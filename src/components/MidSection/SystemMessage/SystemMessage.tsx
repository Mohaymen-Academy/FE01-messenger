interface SystemMessageProps {
  text: string
}

export default function SystemMessage({ text }: SystemMessageProps) {
  return (
    <div className="mx-0 my-1 self-center rounded-full border border-gray-200 bg-chatBg px-2 py-1 text-sm text-primary shadow">
      {text}
    </div>
  )
}
