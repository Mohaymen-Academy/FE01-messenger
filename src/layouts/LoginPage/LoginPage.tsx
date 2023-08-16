import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginLanding from '@/components/Common/LoginLanding/LoginLanding'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp/SignUp'
import img from '@/assets/login-wp.jpg'
import Snack from '@/components/Common/Snack/Snack'
import InitiateProfile from '@/components/InitiateProfile/InitiateProfile'
import { storeStateTypes } from '@/types/types'
import { UISlice } from '@/redux/slices/UISlice'

export default function LoginPage() {
  const dispatch = useDispatch()
  const [loginLandingActive, setLoginLandingActive] = useState(true)
  const loginActive = useSelector((state: storeStateTypes) => state.UI.login)
  const signUpActive = useSelector((state: storeStateTypes) => state.UI.signUp)
  const initiateProfileActive = useSelector(
    (state: storeStateTypes) => state.UI.initiateProfile
  )

  const loginLandingHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const title = e.currentTarget.innerText
    if (title === 'ورود') {
      dispatch(UISlice.actions.signUpHandler(false))
      dispatch(UISlice.actions.loginHandler(true))
      setLoginLandingActive(false)
    } else if (title === 'ثبت نام') {
      dispatch(UISlice.actions.signUpHandler(true))
      dispatch(UISlice.actions.loginHandler(false))
      setLoginLandingActive(false)
    }
  }
  const backtoLoginLandingPage = () => {
    setLoginLandingActive(true)
    setTimeout(() => {
      dispatch(UISlice.actions.signUpHandler(false))
      dispatch(UISlice.actions.loginHandler(false))
    }, 200)
  }
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: '600px',
        backgroundRepeat: 'repeat',
      }}
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden "
    >
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[#ffffffcd] backdrop-blur-[1px] backdrop-invert">
        <div className="absolute w-full overflow-y-hidden px-6 pb-40 pt-8">
          <LoginLanding
            onClick={loginLandingHandler}
            active={loginLandingActive}
          />
          <InitiateProfile active={initiateProfileActive} />
          <Login onClick={backtoLoginLandingPage} active={loginActive} />
          <SignUp onClick={backtoLoginLandingPage} active={signUpActive} />
        </div>
      </div>
      <Snack />
    </div>
  )
}
