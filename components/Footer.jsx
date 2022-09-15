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
            <h3 className='flex text-center items-end justify-center'>
                Built using<p className='text-[#FFFFFF]'>_</p><Image src={reactIcon} width='32px' height='32px' />ReactJs,
            </h3>
            <h3 className='flex text-center items-end justify-center'>
                <p className='text-[#FFFFFF]'>_</p>  
                <Image src={nextjsIcon} width='32px' height='32px' /><p className='text-[#FFFFFF]'>_</p>NextJs and<p className='text-[#FFFFFF]'>_</p>
            </h3>
            <h3 className='flex text-center items-end justify-center'>
                <Image src={tailwindIcon} width='32px' height='32px' /><p className='text-[#FFFFFF]'>_</p>Tailwind with help from<p className='text-[#FFFFFF]'>_</p><Image src={coffeeCupIcon} width='32px' height='32px' />
            </h3>
        </div>
        <div className='flex max-w-[1240px] mx-auto justify-center py-2'>
            <h3 className='flex text-center items-center justify-center mt-2'>
                Copyright © Stephen Rivero 2022
            </h3>
        </div>
    </div>
  )
}

export default Footer