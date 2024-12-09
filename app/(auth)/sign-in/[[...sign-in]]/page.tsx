
import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className=' w-full h-full flex items-center justify-center animate-fadeIn'>
      <SignIn/>
    </div>
  )
}

export default SignInPage
