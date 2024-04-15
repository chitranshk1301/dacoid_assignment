import React from 'react'
import Button from '../components/Button'
import InputField from '../components/InputField'
import OrImage from '../assets/Or.svg'
import GoogleIcon from '../assets/google.svg'
import FacebookIcon from '../assets/facebook.svg'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='flex flex-col justify-center gap-10 p-4 mt-10'>
      <h2 className='text-[20px] font-[700]'>Welcome Back</h2>
      <div className='grid grid-rows-4 gap-7 mt-6 ml-1'>
        <InputField placeholder="Email" type="email" />
        <InputField placeholder="Password" type="text" />
        <p className='text-[12px] font-[500] text-[#7f7f7f] underline'>Forgot your password?</p>
      </div>
      <div className='mt-20'>
        <Link to='/goals-page'>
          <Button
            text="Sign In"
          />
        </Link>
        <img src={OrImage} className="pr-4 mt-4" />
        <div className='flex mr-4 mt-4 items-center justify-center gap-4'>
          <img src={GoogleIcon} />
          <img src={FacebookIcon} />
        </div>
        <p className='text-[12px] font-[500] ml-10 mt-4'>Don’t have an account yet?
          <Link to='/sign-up'><span className='text-[#93A9FF] underline cursor-pointer'>  Create an account</span></Link>
        </p>
      </div>
    </div>
  )
}

export default Signin