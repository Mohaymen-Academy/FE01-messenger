import { Alert, Snackbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { storeStateTypes } from '@/types/types'
import { UISlice } from '@/redux/slices/UISlice'

interface SnackProps {}

export default function Snack({}: SnackProps) {
  const snack = useSelector((state: storeStateTypes) => state.UI.snack)
  const dispatch = useDispatch()
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={!!snack}
      autoHideDuration={3000}
      onClose={() => dispatch(UISlice.actions.closeSnack())}
    >
      <Alert variant="outlined" severity={snack?.severity}>
        {snack?.text}
      </Alert>
    </Snackbar>
  )
}
