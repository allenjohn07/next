import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div className='flex items-center justify-center my-auto'>
        <SignIn/>
    </div>
  )
}

export default Page