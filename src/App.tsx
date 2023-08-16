import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MainPage from '@/layouts/MainPage'
import LoginPage from './layouts/LoginPage/LoginPage'
import { userSelectors } from './redux/slices/UserSlice'

function App() {
  const isLoggedIn = useSelector(userSelectors.isLoggedIn)
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route index path="login/" element={<LoginPage />} />
    //     <Route path="/" element={<MainPage />} />
    //   </Routes>
    //   {!isLoggedIn && <Navigate replace to={'/login/'} />}
    //   {isLoggedIn && <Navigate replace to={'/'} />}
    // </BrowserRouter>
    <LoginPage />
  )
}

export default App
