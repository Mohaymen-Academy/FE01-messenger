import { subscribe } from 'diagnostics_channel'

interface InfoImageProps {
  img?: string
  onlineStatus?: boolean
  infoName?: string
  type?: 'PV' | 'CHANNEL' | 'GROUP'
  subscription?: number
}

export default function InfoImage({
  img,
  onlineStatus,
  infoName,
  type,
  subscription,
}: InfoImageProps) {
  // console.log(img.data)
  return (
    <div className="relative mb-4 flex w-full justify-center">
      <div className="block h-[370px] w-full content-center overflow-hidden text-center focus:outline-none">
        <div
          style={{ display: img ? 'none' : 'flex' }}
          className="h-[370px] w-full items-center justify-center bg-blue-500 text-7xl text-white"
        >
          <p>{infoName?.charAt(0)}</p>
        </div>
        <img
          style={{ display: img ? 'block' : 'none' }}
          className="absolute max-h-[370px] w-full content-center object-cover max-sm:object-contain"
          src={`data:image/png;base64,${img.data}`}
          // src={img}
        />
      </div>
      <div className="absolute bottom-0 right-0 z-10 w-full bg-gradient-to-t from-[#00000088] to-transparent pb-5 pr-5">
        <p className="text-lg font-semibold text-white">{infoName}</p>
        <p className="text-sm font-medium text-gray-400">
          {type === 'CHANNEL' || type === 'GROUP'
            ? `${subscription} مشترک`
            : onlineStatus
            ? 'آنلاین'
            : 'آخرین بازدید به تازگی'}
        </p>
      </div>
    </div>
  )
}
