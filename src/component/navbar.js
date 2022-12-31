import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import aa from '../aa.jpg'
import { AiFillApple } from 'react-icons/ai'
import Navlinks from './Navlinks'
import { TfiMenuAlt } from 'react-icons/tfi'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className='flex justify-around items-center font-medium border-b-2 border-sky-400 h-10 bg-sky-200'>
                <div className='flex items-center text-blue-600 text-lg'><AiFillApple /><Link to='/'>Login</Link> </div>
                <Link to='/'><img src={aa} alt="hh" className='h-9' /></Link>
                <div className='text-4xl md:hidden text-blue-500' onClick={() => setOpen(!open)}>
                    <TfiMenuAlt name={`${open ? "close" : "menu"}`} />
                </div>
                <div className='hidden md:flex'>
                    <Navlinks />
                </div>
                <ul className={`absolute w-20 md:hidden lg:hidden top-1 mt-12 mr-8 sm:mr-0 pl-4 bg-gray-200 h-auto duration-500 ${open ? 'right-0' : "left-[-100%]"}`} >
                    <Navlinks />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar