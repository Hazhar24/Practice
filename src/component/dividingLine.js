import React from 'react'


export default function DividingLine(props) {
    return (
        <div>
            <p id='line' className='w-full text-blue-500 text-xl font-bold'>{props.text}</p>
        </div>
    )
}
