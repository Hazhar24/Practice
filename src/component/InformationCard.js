import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return (
        <div className='mt-5'>
            <div className='hover:shadow-lg'>
                <img src={props.img} className='w-56 h-52 md:w-48 md:h-44 ' alt="ss" />
                <Link to={props.Link}><h2 className='flex justify-between items-center px-2'>{props.name}<RiRadioButtonFill /></h2></Link>
            </div>
        </div>
    )
}
