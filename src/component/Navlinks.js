import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = () => {
    return (
        <ul className='text-blue-500 md:flex'>
            <li className='px-2 py-2'><Link to='/'>Home</Link></li>
            <li className='px-2 py-2'><Link to='/'>Login</Link></li>
            <li className='px-2 py-2'><Link to='/'>About</Link></li>
        </ul>
    )
}

export default Navlinks
