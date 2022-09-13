import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useRouter } from 'next/router'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    // const [navBg, setNavBg] = useState('#ecf0f3')
    // const [linkColor, setLinkColor] = useState('#f2937')
    // const router = useRouter()

    // useEffect(()=>{
    //     if {
    //         router.asPath === '/property'
    //     }
    // },[router])

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(()=> {
        const handleShadow = () => {
            if (window.scrollY >= 50) {
                setShadow(true)
            }   else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);
    },[])

    return (
        <div className={shadow ? 'fixed w-full h-14 shadow-xl z-[100] bg-[#FFFFFF]' : 'fixed w-full h-14 z-[100] bg-[#FFFFFF]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <h2 className='text-[#FF0000] uppercase underline underline-offset-2 tracking-wider cursor-pointer'>
                        stephen
                    </h2>
                </Link>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b border-black cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b border-black cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b border-black cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b border-black cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b border-black cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider'>Contact</li>
                        </Link>
                    </ul>
                    <div 
                        onClick={handleNav} 
                        className='md:hidden'
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div 
                className={
                    nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                }
            >
                <div 
                    className={
                        nav 
                            ? 'fixed right-0 top-0 w-[70%] sm:w-[40%] h-screen flex flex-col justify-between bg-[#FFFFFF] p-4 pt-2 ease-in duration-500' 
                            : 'fixed right-[-120%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <h2 className='text-[#FF0000] uppercase underline underline-offset-2 tracking-wider cursor-pointer'
                                    onClick={()=> setNav(false)}
                                > 
                                    stephen
                                </h2>
                            </Link>
                            <div 
                                onClick={handleNav} 
                                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4 mt-0'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let's build together</p>
                        </div>
                        <div className='py-4 flex flex-col'>
                            <ul className='uppercase'>
                                <Link href='/'>
                                    <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
                                </Link>
                                <Link href='/#about'>
                                    <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
                                </Link>
                                <Link href='/#skills'>
                                    <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills</li>
                                </Link>
                                <Link href='/#projects'>
                                    <li onClick={()=> setNav(false)} className='py-4 text-sm'>Projects</li>
                                </Link>
                                <Link href='/#contact'>
                                    <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className='pt-10'>
                        <p className='uppercase tracking-widest text-[#FF0000]'>Let's Connect</p>
                        <div className='flex items-center justify-around my-4 w-full'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://www.linkedin.com/in/stephen-pastor/'>
                                    <FaLinkedinIn className='text-[#0A66C2]'/>
                                </Link>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='https://github.com/StephenRivero'>
                                    <FaGithub />
                                </Link>
                            </div >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <Link href='/#contact'>
                                    <AiOutlineMail className='text-[red]'/>
                                </Link>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <BsFillPersonLinesFill className='text-[gray]'/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar