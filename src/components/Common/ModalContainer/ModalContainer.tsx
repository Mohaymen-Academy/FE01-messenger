import { Box, Modal } from '@mui/material'
import { ReactElement } from 'react'

interface ModalContainerProps {
  isOpen: boolean
  onClose: () => void
  children: ReactElement
}

export default function ModalContainer({
  isOpen,
  onClose,
  children,
}: ModalContainerProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="mt-32 flex items-center justify-center">{children}</Box>
    </Modal>
  )
}
