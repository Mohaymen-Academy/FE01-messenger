import { contactSearch, messageSearch } from '@/api/search'
import { UISlice } from '@/redux/slices/UISlice'
import { UserSlice } from '@/redux/slices/UserSlice'
import store from '@/redux/store'

export function contactSearchService(username: string) {
  contactSearch({ username })
    .then(res => {
      if (res.status === 200) {
        //   store.dispatch(UISlice.actions.userNameHandler(true))
      } else {
        //   store.dispatch(UISlice.actions.userNameHandler(false))
      }
    })
    .catch(err => {
      // store.dispatch(UISlice.actions.userNameHandler(false))
    })
}

export function messageSearchService(username: string) {
  messageSearch({ username })
    .then(res => {
      if (res.status === 200) {
        //   store.dispatch(UISlice.actions.userNameHandler(true))
      } else {
        //   store.dispatch(UISlice.actions.userNameHandler(false))
      }
    })
    .catch(err => {
      // store.dispatch(UISlice.actions.userNameHandler(false))
    })
}
