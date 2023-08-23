import { Alert, Slide, SlideProps, Snackbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { storeStateTypes } from '@/types/types'
import { UISlice } from '@/redux/slices/UISlice'

export default function Snack() {
  const snack = useSelector((state: storeStateTypes) => state.UI.snack)
  const dispatch = useDispatch()
  const transition = (props: SlideProps) => (
    <Slide {...props} direction="left" />
  )
  return (
    <Snackbar
      TransitionComponent={transition}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={!!snack}
      autoHideDuration={30000}
      onClose={() => dispatch(UISlice.actions.closeSnack())}
    >
      <Alert
        variant="filled"
        className="gap-2 !font-custom"
        severity={snack?.severity}
      >
        {snack?.text}
      </Alert>
    </Snackbar>
  )
}
