import { Box, Modal } from '@mui/material'
import { ReactElement } from 'react'

interface ModalContainerProps {
  isOpen: boolean
  onClose: () => void
  child: ReactElement
}

export default function ModalContainer({
  isOpen,
  onClose,
  child,
}: ModalContainerProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="mt-32 flex items-center justify-center">{child}</Box>
    </Modal>
  )
}
