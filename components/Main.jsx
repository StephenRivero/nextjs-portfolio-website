import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center mt-4 sm:mt-8 md:mt-8 xl:mt-5'>
            <div>
                {/* <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET&apos;S BUILD TOGETHER
                </p> */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    // animate={{ opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='sm:hidden'
                >
                    <Image
                        className="rounded-full object-cover"
                        src="/assets/pro-headshot-cropped-1.png"
                        alt="Website Logo"
                        width="126px"
                        height="126px"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='hidden sm:block'
                >
                    <Image
                        className="rounded-full object-cover"
                        src="/assets/pro-headshot-cropped-1.png"
                        alt="Website Logo"
                        width="200px"
                        height="200px"
                    />
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0, }}
                    transition={{
                        duration: 1,
                        delay: 0.30,
                        ease: [0, 0.71, 0.2, 1.01]
                      }}
                    className='pt-4 pb-2 sm:py-0 sm:pt-1 xl:pt-0 xl:pb-1 text-gray-700 sm:leading-none md:leading-normal'
                >
                    Hi, I&apos;m
                    <span className='text-[#800020] ml-4'>{/* #FF0000  #63000A*/}
                        Stephen
                    </span>
                </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, }}
                    transition={{
                        duration: 1,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.01]
                      }}
                    className='pb-1 xl:py-0 px-2 text-gray-700'
                >
                    A Front-End Web Developer
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                      }}
                    className='py-4 px-2 text-gray-600 max-w-[100%] m-auto sm:pt-4 xl:pt-5'
                >
                    Specialized in turning designs into software.
                </motion.p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 px-1'>
                    <Link href='https://www.linkedin.com/in/stephen-pastor/'>
                        <a target={'_blank'} className='cursor-pointer hover:scale-110 ease-out duration-200'>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{
                                    duration: 1,
                                    delay: 0.6,
                                    ease: [0, 0.71, 0.2, 1.01]
                                  }}
                                className='rounded-full shadow-lg shadow-blue-400 p-6'
                            >
                                <FaLinkedinIn className='text-[#0A66C2]'/>
                            </motion.div>
                        </a>
                    </Link>
                    <Link href='https://github.com/StephenRivero'>
                        <a target={'_blank'} className='cursor-pointer hover:scale-110 ease-out duration-200'>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{
                                    duration: 1,
                                    delay: .7,
                                    ease: [0, 0.71, 0.2, 1.01]
                                  }}
                                className='rounded-full shadow-lg shadow-gray-500 p-6'
                            >
                                <FaGithub />
                            </motion.div>
                        </a>
                    </Link>
                    <Link href='/#contact'>
                        <a className='cursor-pointer hover:scale-110 ease-out duration-200'>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{
                                    duration: 1,
                                    delay: .8,
                                    ease: [0, 0.71, 0.2, 1.01]
                                  }}
                                className='rounded-full shadow-lg shadow-red-400 p-6'
                            >
                                <AiOutlineMail className='text-[red]'/>
                            </motion.div>
                        </a>
                    </Link>
                    <Link href='https://drive.google.com/file/d/1K5YiSohJ3VwocU03TEoE4elBc-2twqRC/view?usp=drive_link'>
                        <a target={'_blank'} className='cursor-pointer hover:scale-110 ease-out duration-200'>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0, }}
                                transition={{
                                    duration: 1,
                                    delay: .9,
                                    ease: [0, 0.71, 0.2, 1.01]
                                  }}
                                className='rounded-full shadow-lg shadow-gray-400 p-6 '
                            >
                                <BsFillPersonLinesFill className='text-[gray]'/>
                            </motion.div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main