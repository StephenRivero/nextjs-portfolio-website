import React from 'react';
import Image from 'next/image';
import ContactImg from '../public/assets/contact.jpg';
import {AiOutlineMail} from 'react-icons/ai';
import {FaAngleDoubleUp, FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link'

const Contact = () => {
  return (
    <div id='contact' className='w-full'>
        <div className='max-w-[1240px] m-auto px-2 pt-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#FF0000] pl-5'>
                Contact
            </p>
            <h2 className='py-4 pl-5'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full flex flex-col justify-between'>
                        <div>    
                            <div>
                                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt="/" />
                            </div>
                            <div>
                                <h2 className='py-2 text-[#FF0000]'>Stephen Rivero</h2>
                                <p className='underline underline-offset-2 tracking-wider'>Front-End Web Developer</p>
                                <p className='py-4'>I am available for freelance or full-time positions. Contact me and let&apos;s talk.</p>
                                <p className='py-4 flex items-center'><AiOutlineMail className='text-[red] mr-2 mt-[2.7px]'/> stephen.m.rivero@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect with me</p>
                                <div className='flex items-center justify-around py-4'>
                                    <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-out duration-200'>
                                        <Link href='https://www.linkedin.com/in/stephen-pastor/'>
                                            <FaLinkedinIn className='text-[#0A66C2]'/>
                                        </Link>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-out duration-200'>
                                        <Link href='https://github.com/StephenRivero'>
                                            <FaGithub />
                                        </Link>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-red-400 p-6 cursor-pointer hover:scale-110 ease-out duration-200'>
                                        <Link href='/#contact'>
                                            <AiOutlineMail className='text-[red]'/>
                                        </Link>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-out duration-200'>
                                        <BsFillPersonLinesFill className='text-[gray]'/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form action="https://formspree.io/f/xknejoly" method="POST">
                            <div className='grid md:grid-cols-2 gap-4  w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' name="Name" type="text" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Contact Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' name="Contact Number" type="text" />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' name="Email" type="email" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' name="Subject" type="text" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300'  name="Message"  rows='10'></textarea>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button className='w-[150px] sm:w-[30%] p-4 text-gray-100 mt-3 mb-1 lg:mb-0 lg:mt-4'>Send Message</button>
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