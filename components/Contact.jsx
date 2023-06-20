import React from 'react';
import Image from 'next/image';
import ContactImg from '../public/assets/Stephen Pastor ID Picture.jpg';
import {AiOutlineMail} from 'react-icons/ai';
import {FaAngleDoubleUp, FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link'

const Contact = () => {
  return (
    <div id='contact' className='w-full'>
        <div className='max-w-[1240px] w-[95%] lg:w-full m-auto px-2 pt-16'>
            {/* <p className='text-xl tracking-widest uppercase text-[#FF0000] pt-5 pl-3 lg:pl-5'>
                Contact
            </p>
            <h2 className='py-4 pl-3 lg:pl-5'>
                Get In Touch
            </h2> */}
            <div className='grid sm:grid-cols-4 md:grid-cols-5 gap-4 lg:gap-8 justify-center'>
                {/* left side */}
                <div className='col-span-3 sm:col-span-2 md:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:px-4 h-full flex flex-col justify-between'>
                        <div className='flex flex-col justify-center w-full'>{/* w-full */}
                            <p className='text-xl tracking-widest uppercase text-[#FF0000] pl-3 lg:pl-5'>{/* pt-5 */}
                                Contact
                            </p>
                            <h2 className='py-4 pl-3 lg:pl-5 sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem]'>
                                Get In Touch
                            </h2>
                            <div className='flex w-fit self-center'>
                                <Image 
                                    className='rounded-xl ease-in duration-300 w-fit object-cover' 
                                    src={ContactImg} alt="Profile picture" width="150px" height="150px"
                                />{/* width="300px"  height="300px" hover:scale-105 */}
                            </div>
                        </div>
                        <div className='flex flex-col items-center sm:mb-auto md:mb-0'>
                            <h2 className='flex self-center pb-2 text-[#800020] mt-2 sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2.25rem]'>{/* #FF0000 */}
                                Stephen Rivero
                            </h2>
                            <p className='flex self-center underline underline-offset-2 tracking-wider mb-2'>
                                Front-End Web Developer
                            </p>
                            <p className='py-4 flex self-center text-center md:hidden'>
                                I am available for freelance or full-time positions. Contact me and let&apos;s talk.
                            </p>
                            <p className='py-2 flex items-center '><AiOutlineMail className='text-[red] mr-2 mt-[2.7px]'/>
                                stephen.m.rivero@gmail.com
                            </p>
                        </div>
                        <div className='mt-4 flex flex-col'>
                            <p className='uppercase tracking-widest text-[#FF0000] flex self-center'>
                                Let&apos;s Connect
                            </p>
                            <div className='flex items-center justify-around py-4'>
                                <Link href='https://www.linkedin.com/in/stephen-pastor/'>
                                    <a target={'_blank'}>
                                        <div className='rounded-full shadow-lg shadow-blue-400 p-5 cursor-pointer hover:scale-110 ease-out duration-200'>
                                            <FaLinkedinIn className='text-[#0A66C2]'/>
                                        </div>
                                    </a>
                                </Link>
                                <Link href='https://github.com/StephenRivero'>
                                    <a target={'_blank'}>
                                        <div className='rounded-full shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-110 ease-out duration-200'>
                                            <FaGithub />
                                        </div>
                                    </a>
                                </Link>
                                <Link href='/#contact'>
                                    <div className='rounded-full shadow-lg shadow-red-400 p-5 cursor-pointer hover:scale-110 ease-out duration-200'>
                                        <AiOutlineMail className='text-[red]'/>
                                    </div>
                                </Link>
                                <Link href='https://drive.google.com/file/d/1K5YiSohJ3VwocU03TEoE4elBc-2twqRC/view?usp=drive_link'>
                                    <a target={'_blank'}>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-out duration-200'>
                                                <BsFillPersonLinesFill className='text-[gray]'/>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className='col-span-3 sm:col-span-2 md:col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='px-4 py-4 xl:py-0'>
                        <form action="https://formspree.io/f/xknejoly" method="POST">
                            <div className='grid md:grid-cols-2 gap-4 w-full '>{/* py-2 */}
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm pb-2 pt-1'>
                                        Name
                                    </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300 truncate' name="Name" type="text" required/>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm pb-2 pt-1 '>
                                        Contact Number
                                    </label>
                                    <input className=' border-2 rounded-lg p-3 flex border-gray-300' name="Contact Number" type="text" />
                                </div>
                            </div>
                            <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col '>{/* py-2 */}
                                    <label className='uppercase text-sm py-2 truncate'>
                                        Subject
                                    </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' name="Subject" type="text" required/>
                                </div>
                                <div className='flex flex-col'>{/* py-2 */}
                                    <label className='uppercase text-sm py-2'>
                                        Email
                                    </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300 truncate' name="Email" type="email" required/>
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                    Message
                                </label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300'  name="Message"  rows='6'></textarea>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button className='w-[160px] sm:w-[70%] md:w-[40%] lg:w-[30%] p-4 text-gray-100 mt-3 mb-1 lg:mb-0 lg:mt-4'>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <a>
                        <div className='rounded-full shadow-lg shadow-red-400 p-4 cursor-pointer hover:scale-110 ease-out duration-200'>
                            <FaAngleDoubleUp 
                                className='text-[#FF0000]'
                                size={30} 
                            />
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Contact