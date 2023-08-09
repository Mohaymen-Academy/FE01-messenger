interface InfoImageProps {
  img: string
  onlineStatus: 'آنلاین' | 'آخرین بازدید به تازگی'
  infoName: string
}

export default function InfoImage({
  img,
  onlineStatus,
  infoName,
}: InfoImageProps) {
  return (
    <div className="relative mb-4 flex justify-center">
      <div className="block h-[370px] w-full content-center overflow-hidden text-center focus:outline-none">
        <div className="hidden h-[370px] w-full items-center justify-center bg-blue-500 text-7xl text-white">
          <p>{infoName.charAt(0)}</p>
        </div>
        <img
          className="absolute max-h-[370px] w-full content-center object-cover blur-md max-sm:object-cover"
          src={img}
        />
        <img
          className="absolute z-10 max-h-[370px] w-full content-center object-cover max-sm:object-contain"
          src={img}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-[#00000088] to-transparent pb-5 pr-5">
        <p className="text-lg font-semibold text-white">{infoName}</p>
        <p className="text-sm font-medium text-gray-400">{onlineStatus}</p>
      </div>
    </div>
  )
}
