import { Loader } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center pt-36'>
      <Loader className='animate-spin'><span className='pl-2'>Loading...</span></Loader>
    </div>
  )
}

export default Loading