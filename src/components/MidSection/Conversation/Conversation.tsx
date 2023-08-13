import List from 'react-virtualized/dist/commonjs/List'
import { CellMeasurer, CellMeasurerCache } from 'react-virtualized'
import FabButton from '@/components/Common/FabButton/FabButton'
import Message from '../Message/Message'
import SystemMessage from '../SystemMessage/SystemMessage'

interface ConversationProps {}

export default function Conversation({}: ConversationProps) {
  const cache = new CellMeasurerCache({
    defaultHeight: 50,
    fixedWidth: true,
  })
  return (
    <div className="w-full max-w-xl flex-1 self-center">
      <div className="relative m-auto flex flex-col px-3 py-1">
        <List
          className="no-scrollbar"
          width={576}
          height={600}
          rowHeight={cache.rowHeight}
          rowCount={1000}
          onRowsRendered={data => console.log(data)}
          rowRenderer={({ index, key, parent, style }) => (
            <CellMeasurer
              cache={cache}
              columnIndex={0}
              key={key}
              parent={parent}
              rowIndex={index}
            >
              {({ registerChild }) => (
                // 'style' attribute required to position cell (within parent List)
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
        {/* <SystemMessage text="۲۳ مرداد" />
        <Message message="سلام" mode="seen" self time="14:25" />

        <Message
          message="
            به به"
          mode="loading"
          time="14:26"
        /> */}
        {/* <FabButton /> */}
      </div>
    </div>
  )
}
