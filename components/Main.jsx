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
                    LET&apos;S BUILD TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I&apos;m  
                    <span className='text-[#800020] ml-4'>{/* #FF0000  #63000A*/}
                        Stephen
                    </span>
                </h1>
                <h1 className='py-2 px-2 text-gray-700'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 px-2 text-gray-600 max-w-[100%] m-auto'>
                    Specialized in building your exceptional web designs.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 px-1'>
                    <Link href='https://www.linkedin.com/in/stephen-pastor/'>
                        <a target={'_blank'}>
                            <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-out duration-200'>
                                <FaLinkedinIn className='text-[#0A66C2]'/>
                            </div>
                        </a>
                    </Link>
                    <Link href='https://github.com/StephenRivero'>
                        <a target={'_blank'}>
                            <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-out duration-200'>
                                <FaGithub />
                            </div>
                        </a>
                    </Link>
                    <Link href='/#contact'>
                        <div className='rounded-full shadow-lg shadow-red-400 p-6 cursor-pointer hover:scale-110 ease-out duration-200'>
                            <AiOutlineMail className='text-[red]'/>
                        </div>
                    </Link>
                    <Link href='https://drive.google.com/file/d/1K5YiSohJ3VwocU03TEoE4elBc-2twqRC/view?usp=drive_link'>
                        <a target={'_blank'}>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-out duration-200'>
                                <BsFillPersonLinesFill className='text-[gray]'/>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main