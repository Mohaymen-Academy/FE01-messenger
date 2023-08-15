import { createSelector } from '@reduxjs/toolkit'
import { storeStateTypes } from '@/types/types'

const userSelectors = {
  isLoggedIn: createSelector(
    (state: storeStateTypes) => state.user.token, // the first argument accesses relevant data from global state
    token => !!token // the second parameter conducts the transformation
  ),
}

export default userSelectors
