import { FaPen } from 'react-icons/fa'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import { MdGroup } from 'react-icons/md'
import { HiSpeakerphone } from 'react-icons/hi'
import { Box, Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import FabButton from '@/components/Common/FabButton'
import Modal from '@/components/MidSection/MessageBox/FloatingTextFormatToolbarPlugin/utils/commentPlugin/ui/Modal'
import NewChat from '@/components/Common/NewChat/NewChat'
import { UISlice } from '@/redux/slices/UISlice'
import { storeStateTypes } from '@/types/types'
import ModalContainer from '@/components/Common/ModalContainer/ModalContainer'

interface NewChatCreatorProps {}

export default function NewChatCreator({}: NewChatCreatorProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)
  const dispatch = useDispatch()
  const channelModalActive = useSelector(
    (state: storeStateTypes) => state.UI.createChannel
  )
  const groupModalActive = useSelector(
    (state: storeStateTypes) => state.UI.createGroup
  )
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const createChannel = () => {
    dispatch(UISlice.actions.createChannelHandler(true))
  }

  const createGroup = () => {
    dispatch(UISlice.actions.createGroupHandler(true))
  }

  return (
    <div className="sticky bottom-3 left-5 z-40 mb-6 ml-4 flex flex-row justify-end">
      <FabButton
        primary={true}
        icon={<FaPen className="h-5 w-5 fill-current text-white" />}
        // id="basic-button"
        // aria-controls={open ? 'basic-menu' : undefined}
        // aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        slotProps={{
          paper: {
            style: {
              position: 'absolute',
              backgroundColor: 'rgb(var(--background-color-100))',
              color: 'rgb(var(--background-color-500))',
              width: '150px',
              top: '10px',
            },
          },
        }}
      >
        <MenuItem>
          <div
            onClick={createGroup}
            className="flex items-center justify-center gap-2"
          >
            <MdGroup className="h-6 w-6" />
            <p>ساخت گروه</p>
            <ModalContainer
              isOpen={groupModalActive}
              onClose={e => {
                e.stopPropagation()
                dispatch(UISlice.actions.createGroupHandler(false))
              }}
              child={<NewChat type="group" />}
            />
          </div>
        </MenuItem>
        <MenuItem>
          <div
            onClick={createChannel}
            className="flex items-center justify-center gap-2"
          >
            <HiSpeakerphone className="h-6 w-6" />
            <p>ساخت کانال</p>
          </div>
          <ModalContainer
            isOpen={channelModalActive}
            onClose={e => {
              e.stopPropagation()
              dispatch(UISlice.actions.createChannelHandler(false))
            }}
            child={<NewChat type="channel" />}
          />
        </MenuItem>
      </Menu>
    </div>
  )
}
