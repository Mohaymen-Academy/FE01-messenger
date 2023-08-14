import List from 'react-virtualized/dist/commonjs/List'
import { AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized'
import { BsArrowDown } from 'react-icons/bs'
import { BiArrowToBottom } from 'react-icons/bi'
import { useState } from 'react'
import FabButton from '@/components/Common/FabButton/FabButton'
import Message from '../Message/Message'
import SystemMessage from '../SystemMessage/SystemMessage'

interface ConversationProps {}

const messageCount = 1000

export default function Conversation({}: ConversationProps) {
  const [scrollToIndex, setScrollToIndex] = useState(messageCount)
  console.log(scrollToIndex)
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
              className="no-scrollbar"
              width={width}
              height={height}
              rowHeight={cache.rowHeight}
              rowCount={1000}
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
                  {({ registerChild }) => (
                    <div
                      ref={registerChild}
                      className="rtl relative m-auto flex w-full flex-col px-3 py-1"
                      style={style}
                    >
                      <Message
                        message={'a'.repeat(index)}
                        mode="sent"
                        time={index.toString()}
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
      {scrollToIndex != messageCount && (
        <div
          className="absolute bottom-0 right-8"
          onClick={() => {
            console.log('test')
            setScrollToIndex(messageCount)
          }}
        >
          <FabButton icon={<BsArrowDown />} />
        </div>
      )}
    </div>
  )
}
