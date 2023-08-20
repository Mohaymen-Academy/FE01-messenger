import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MainPage from '@/layouts/MainPage'
import LoginPage from './layouts/LoginPage/LoginPage'
import { userSelectors } from './redux/slices/UserSlice'
import { storeStateTypes } from './types/types'

function App() {
  const isLoggedIn = useSelector(userSelectors.isLoggedIn)
  const isInitiateProfileCreated = useSelector(
    (state: storeStateTypes) => state.UI.isInitialProfileCreated
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="login/" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
      {!isLoggedIn && <Navigate replace to={'/login/'} />}
      {isLoggedIn && isInitiateProfileCreated && <Navigate replace to={'/'} />}
    </BrowserRouter>
  )
}

export default App
