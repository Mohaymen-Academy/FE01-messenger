import { url } from 'inspector'
import { useState } from 'react'
import LoginLanding from '@/components/Common/LoginLanding/LoginLanding'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp/SignUp'
import img from '@/assets/login-wp.jpg'

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps) {
  const [loginLandingActive, setLoginLandingActive] = useState(true)
  const [loginActive, setLoginActive] = useState(false)
  const [signUpActive, setSignUpActive] = useState(false)

  const loginLandingHandler = e => {
    const title = e.target.innerText
    if (title === 'ورود') {
      setLoginActive(true)
      setSignUpActive(false)
      setLoginLandingActive(false)
    } else if (title === 'ثبت نام') {
      setLoginActive(false)
      setSignUpActive(true)
      setLoginLandingActive(false)
    }
  }
  const backtoLoginLandingPage = () => {
    setLoginLandingActive(true)
    setTimeout(() => {
      setLoginActive(false)
      setSignUpActive(false)
    }, 200)
  }
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: '600px',
        backgroundRepeat: 'repeat',
      }}
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[#ffffffcd] backdrop-blur-[1px] backdrop-invert">
        <div className="absolute w-full overflow-y-hidden px-6 py-8">
          <LoginLanding
            onClick={loginLandingHandler}
            active={loginLandingActive}
          />
          <Login onClick={backtoLoginLandingPage} active={loginActive} />
          <SignUp onClick={backtoLoginLandingPage} active={signUpActive} />
        </div>
      </div>
    </div>
  )
}
