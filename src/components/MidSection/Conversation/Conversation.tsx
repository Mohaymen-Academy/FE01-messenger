import List from 'react-virtualized/dist/commonjs/List'
import { AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized'
import { BsArrowDown } from 'react-icons/bs'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import FabButton from '@/components/Common/FabButton/FabButton'
import MessageSelectors from '@/redux/slices/MessageSlice/MessageSelectors'
import { pinMessageService } from '@/services/messageService'
import { activeChatSelectors } from '@/redux/slices/ActiveChatSlice'
import Message from '../Message/Message'

export default function Conversation() {
  const messages = useSelector(MessageSelectors.chatMessages)
  const activeChat = useSelector(activeChatSelectors.ActiveChat)
  const [scrollToIndex, setScrollToIndex] = useState(messages.length - 1)
  const ref = useRef<HTMLTableElement>(null)

  const cache = new CellMeasurerCache({
    defaultHeight: 50,
    fixedWidth: true,
  })

  return (
    <div className="relative h-0 w-full flex-1 grow self-center">
      <div className="relative m-auto flex h-full w-full max-w-xl flex-col px-3 py-1">
        <AutoSizer>
          {({ width, height }) => (
            <List
              className="no-scrollbar focus:outline-none"
              width={width}
              height={height}
              rowHeight={cache.rowHeight}
              rowCount={messages?.length ?? 0}
              // onRowsRendered={data => console.log(data)}
              scrollToIndex={scrollToIndex}
              scrollToRow={scrollToIndex}
              onScroll={() => {
                setScrollToIndex(-1)
              }}
              rowRenderer={({ index, key, parent, style }) => (
                <CellMeasurer
                  cache={cache}
                  columnIndex={0}
                  key={key}
                  parent={parent}
                  rowIndex={index}
                >
                  {() => (
                    <div
                      className="rtl relative m-auto flex w-full flex-col px-4 py-1"
                      style={style}
                    >
                      <Message
                        image={messages[index].file}
                        message={messages[index].text}
                        mode="sent"
                        time={messages[index].createdAt}
                        self={messages[index].self ?? false}
                        pinMessage={() => {
                          pinMessageService(
                            messages[index].id,
                            activeChat.id.toString()
                          )
                        }}
                      />
                    </div>
                  )}
                </CellMeasurer>
              )}
            />
          )}
        </AutoSizer>
        {/* <SystemMessage text="۲۳ مرداد" />
        <Message message="سلام" mode="seen" self time="14:25" />

        <Message
          message="
            به به"
          mode="loading"
          time="14:26"
        /> */}
      </div>
      {/* TODO move functionality to fab button instead of div */}
      {scrollToIndex != messages.length && (
        <div
          className="absolute bottom-0 right-8"
          onClick={() => {
            setScrollToIndex(messages.length)
            ref.forceUpdateGrid()
          }}
        >
          <FabButton icon={<BsArrowDown />} />
        </div>
      )}
    </div>
  )
}
