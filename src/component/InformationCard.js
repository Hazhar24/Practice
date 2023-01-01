import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return (
        <div className='mt-5'>
            <img src={props.img} className='w-56 h-52 md:w-48 md:h-44 ' alt="ss" />
            <Link to={props.Link} className='flex justify-between text-blue-500 items-center px-2'>{props.name}<RiRadioButtonFill /></Link>
        </div>
    )
}
