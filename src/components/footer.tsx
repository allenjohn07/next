import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-auto text-center text-zinc-400 py-5 px-7 border-t'>
      <small>&copy;{new Date().getFullYear()}. All Rights Reserved. </small>
    </footer>
  )
}

export default Footer