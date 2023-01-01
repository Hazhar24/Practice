import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='flex justify-end text-xl text-blue-500'><Link to='/'><RiRadioButtonFill /></Link></div>
      <div className='border-2 h-20 bg-gray-200 flex justify-center items-center'>
        <p className=' text-blue-500 font-bold'>حق کپی رایت برای هژار محفوظ است</p>
      </div>
    </footer>

  )
}

export default Footer