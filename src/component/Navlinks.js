import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = () => {
    return (
        <div className='md:flex text-blue-500'>
            <h2 className='py-4 hover:text-lg md:px-5'><Link to='/'>Home</Link></h2>
            <h2 className='py-4 hover:text-lg md:px-5'><Link to='/'>Login</Link></h2>
            <h2 className='py-4 hover:text-lg md:px-5'><Link to='/'>About</Link></h2>
        </div>
    )
}

export default Navlinks
