import { FaPen } from 'react-icons/fa'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import { MdGroup } from 'react-icons/md'
import { HiSpeakerphone } from 'react-icons/hi'
import { Box, Paper } from '@mui/material'
import FabButton from '@/components/Common/FabButton'

interface NewChatCreatorProps {}

export default function NewChatCreator({}: NewChatCreatorProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
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
        // className="bg-blue-500"
        slotProps={{
          paper: {
            style: {
              position: 'absolute',
              backgroundColor: 'white',
              width: '150px',
              top: '10px',
            },
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <div className="flex items-center justify-center gap-2">
            <MdGroup className="h-6 w-6" />
            <p>ساخت گروه</p>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="flex items-center justify-center gap-2">
            <HiSpeakerphone className="h-6 w-6" />
            <p>ساخت کانال</p>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
