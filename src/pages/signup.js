import React from 'react'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import InputField from '../components/InputField'
import OrImage from '../assets/Or.svg'
import GoogleIcon from '../assets/google.svg'
import FacebookIcon from '../assets/facebook.svg'

const Signup = () => {
  return (
    <div className='flex flex-col justify-center gap-10 p-4 mt-10'>
      <h1 className='text-[20px] font-[700]'>Create an account</h1>
      <div className='grid grid-rows-4 gap-7 mt-6 ml-1'>
        <InputField placeholder="First Name" type="text" />
        <InputField placeholder="Last Name" type="text" />
        <InputField placeholder="Email" type="email" />
        <InputField placeholder="Password" type="text" />
        <p className='text-[12px] font-[500] text-[#7f7f7f] flex gap-2'> <i>{<Checkbox />}</i> By proceeding, I agree to all<span className='text-[#93A9FF] underline cursor-pointer'>T&C</span>and<span className='text-[#93A9FF] cursor-pointer underline'>Privacy Policy</span></p>
      </div>
      <div className='mt-20'>
        <Button
          text="Create an Account"
        />
        <img src={OrImage} className="pr-4 mt-4" />
        <div className='flex mr-4 mt-4 items-center justify-center gap-4'>
          <img src={GoogleIcon} />
          <img src={FacebookIcon} />
        </div>
        <p className='text-[12px] font-[500] ml-20 mt-4'>Already have an account?
          <span className='text-[#93A9FF] underline cursor-pointer'>Login</span>
        </p>
      </div>
    </div>
  )
}

export default Signup