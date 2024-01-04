import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import reactIcon from '../public/assets/react-icon.png'
import nextjsIcon from '../public/assets/nextjs-icon.png'
import tailwindIcon from '../public/assets/tailwind-icon.png'
import coffeeCupIcon from '../public/assets/coffee-cup-icon.png'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='flex flex-col sm:flex-row max-w-[1240px] mx-auto justify-center py-2'>
            <h3 className='flex text-center items-end justify-center gap-1'>
                Built using
                <Image src={reactIcon} alt="An icon of ReactJs" width='32px' height='32px' className="px-1"/>
                ReactJs,
            </h3>
            <h3 className='flex text-center items-end justify-center gap-1 mx-1'>
                <Image src={nextjsIcon} alt="An icon of NextJs" width='32px' height='32px' className='px-1'/>
                NextJs and
            </h3>
            <h3 className='flex text-center items-end justify-center gap-1 mx-1'>
                <Image src={tailwindIcon} alt="An icon of Tailwind" width='24px' height='24px' className='px-1'/>
                Tailwind Css with help from
                <Image src={coffeeCupIcon} alt="An icon of a coffee cup" width='32px' height='32px' className='px-1'/>
                .
            </h3>
        </div>
        <div className='flex max-w-[1240px] mx-auto justify-center py-2'>
            <h3 className='flex text-center items-center justify-center mt-2 w-[180px] sm:w-full'>
                Stephen Rivero 2023 © All rights reserved
            </h3>
        </div>
    </div>
  )
}

export default Footer