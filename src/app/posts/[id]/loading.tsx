import { Loader } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div>
      <div  className='flex items-center justify-center pt-32'>
        <Loader className='animate-spin'/>
        <span className='pl-2'>Loading...</span>
      </div>
    </div>
  )
}

export default Loading