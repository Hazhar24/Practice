import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/img.jpg'
import { AiFillApple } from 'react-icons/ai'
import Navlinks from './Navlinks'
import { TfiMenuAlt } from 'react-icons/tfi'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <header>
            <div className='flex items-center justify-around font-medium border-b-2 border-sky-400 bg-gray-200'>
                <div className='md:ml-36 lg:ml-56'>
                    <Link to='/' className='flex items-center float-left text-blue-600 text-lg'><AiFillApple />Login</Link>
                </div>
                <div className='md:mx-auto'>
                    <Link to='/'><img src={img} alt="hh" className='h-10' /></Link>
                </div>
                <div className='hidden md:flex sm:pr-10 lg:mr-16'>
                    <Navlinks />
                </div>
                <div className='text-4xl md:hidden text-blue-500' onClick={() => setOpen(!open)}>
                    <TfiMenuAlt name={`${open ? "close" : "menu"}`} />
                </div>
                <ul className={`absolute w-24 md:hidden lg:hidden top-1 mt-12 mr-4 sm:mr-0 pl-4 bg-gray-200 h-32 duration-500 ${open ? 'right-0' : "left-[-100%]"}`} >
                    <Navlinks />
                </ul>
            </div>
        </header>
    )
}

export default Navbar
