import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET'S BUILD TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#FF0000]'>Stephen</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[100%] m-auto'>
                    Specialized in building your exceptional web designs.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href='https://www.linkedin.com/in/stephen-pastor/'>
                            <FaLinkedinIn className='text-[#0A66C2]'/>
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href='https://github.com/StephenRivero'>
                            <FaGithub />
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href='/#contact'>
                            <AiOutlineMail className='text-[red]'/>
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill className='text-[gray]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main