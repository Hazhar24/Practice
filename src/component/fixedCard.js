import React from 'react'


export default function FixedCard(props) {
  return (
    <div className='mb-24 sm:mb-24'>
      <div className='sm:flex sm:flex-row justify-center flex flex-col items-center'>
        <div>
          <img src={props.img} className='w-48' alt="ss" />
        </div>
        <div className='w-full px-6 text-sm md:text-base text-start'>
          <span>
            Lorem ipsum dolor sit amet . . .<br />
            consectetur adipisicing elit. Necessitatibus vero,<br />soluta modi debitis magnam ea temporibus asperiores porro excepturi dolorum nobis dicta consectetur tempora.Maiores blanditiis quisquam doloremque earum illum?
          </span>
        </div>
      </div>
      <div className='sm:flex sm:flex-row-reverse justify-center flex flex-col items-center pt-3'>
        <div>
          <img src={props.img1} className='w-48' alt="ss" />
        </div>
        <div className='w-full px-6 text-sm md:text-base sm:text-end'>
          <span>
            Lorem ipsum dolor sit amet . . .<br />
            consectetur adipisicing elit. Necessitatibus vero,<br />soluta modi debitis magnam ea temporibus asperiores porro excepturi dolorum nobis dicta consectetur tempora.<br />Maiores blanditiis quisquam doloremque earum illum?
          </span>
        </div>
      </div>
    </div>
  )
}
