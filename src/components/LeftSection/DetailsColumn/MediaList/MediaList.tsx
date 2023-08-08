import MediaNav from "../MediaNav";

interface MediaListProps {
}

export default function MediaList({}: MediaListProps) {

  return (
    <div className="mt-2 h-[calc(50vh_-_60px)]">
      <MediaNav />
      <div className="flex justify-center bg-gray-100 pt-3 ">
        <h3 className="text-slate-600">در اینجا چیزی وجود ندارد</h3>
      </div>
    </div>
  )
}

