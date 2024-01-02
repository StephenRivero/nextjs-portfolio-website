import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#FFFFFF')
    const [linkColor, setLinkColor] = useState('#282828')
    const router = useRouter()

    // const navVariants = {
    //     hidden: {
    //       opacity: 0,
    //       y: -50,
    //     //   transition: {
    //     //     type: 'spring',
    //     //     stiffness: 300,
    //     //     damping: 140,
    //     //   },
    //     },
    //     show: {
    //       opacity: 1,
    //       y: 0,
    //     //   transition: {
    //     //     type: 'spring',
    //     //     stiffness: 80,
    //     //     delay: 1,
    //     //   },
    //     },
    //   };

    useEffect(()=>{
        if (router.asPath === '/youtube-clone-project' || router.asPath === '/youtube-clone-2' || router.asPath === '/metaversus') {
            setNavBg('black')
            setLinkColor('#FFFFFF')
        } else {
            setNavBg('#FFFFFF')
            setLinkColor('#282828')
        }
    },[router])

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(()=> {
        const handleShadow = () => {
            if (window.scrollY >= 10) {
                setShadow(true)
            }   else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);
    },[])

    return (
        <div
            // variants={navVariants}
            // initial="hidden"
            // animate="show"
            className='flex justify-center mx-auto'
        >
            <div style={{backgroundColor: `${navBg}`}} className={ shadow ? `fixed w-full h-fit shadow-lg z-[100] py-1 xl:px-5` : `fixed w-full h-fit z-[100] py-1 xl:px-5` }>
                <div className={`flex justify-between items-center w-full h-full max-w-7xl py-1 2xl:py-2 px-4 xl:px-5 mx-auto`}>
                    <Link href='/'>
                        <a className='flex gap-3 items-center '>
                            <Image
                                className="rounded-full xl:hover:cursor-pointer object-cover"
                                src="/assets/pro-headshot-cropped-1.png"
                                alt="Website Logo"
                                // width="45px"
                                // height="45px"
                                width="32px"
                                height="32px"
                            />
                            <div className='text-[#800020] font-[600] text-xl md:text-lg lg:text-xl font-[Ubuntu] uppercase leading-none'>
                                Stephen Rivero
                            </div>
                        </a>
                    </Link>
                    <div>
                        <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                            <Link href='/'>
                                <a>
                                    <li className='font-bold ml-10 text-sm uppercase hover:underline underline-offset-2 cursor-pointer duration-200 ease-out tracking-wider'>
                                        Home
                                    </li>
                                </a>
                            </Link>
                            <Link href='/#about'>
                                {/* <a href='#about'> */}
                                <a>
                                    <li className='font-bold ml-10 text-sm uppercase hover:underline underline-offset-2 cursor-pointer duration-200 ease-out tracking-wider'>
                                        About
                                    </li>
                                </a>
                            </Link>
                            <Link href='/#skills'>
                                <a href='#skills'>
                                    <li className='font-bold ml-10 text-sm uppercase hover:underline underline-offset-2 cursor-pointer duration-200 ease-out tracking-wider'>
                                        Skills
                                    </li>
                                </a>
                            </Link>
                            <Link href='/#projects'>
                                <a href='#projects'>
                                    <li className='font-bold ml-10 text-sm uppercase hover:underline underline-offset-2 cursor-pointer duration-200 ease-out tracking-wider'>
                                        Projects
                                    </li>
                                </a>
                            </Link>
                            <Link href='/#contact'>
                                <a href='#contact'>
                                    <li className='font-bold ml-10 text-sm uppercase hover:underline underline-offset-2 cursor-pointer duration-200 ease-out tracking-wider'>
                                        Contact
                                    </li>
                                </a>
                            </Link>
                            {/* <Link href='https://drive.google.com/file/d/1K5YiSohJ3VwocU03TEoE4elBc-2twqRC/view?usp=drive_link'>
                                <a target={'_blank'}>
                                    <li className='text-[#800020] animate-pulse hover:scale-105 hover:animate-none font-bold ml-10 text-sm uppercase hover:underline underline-offset-2 cursor-pointer duration-200 ease-out tracking-wider'>
                                        Resume
                                    </li>
                                </a>
                            </Link> */}
                        </ul>
                        <div
                            style={{color: `${linkColor}`}}
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
                    onClick={()=> setNav(false)}
                >
                    <div
                        className={
                            nav
                                ? 'fixed right-0 top-0 w-[70%] sm:w-[35%] md:w-[40%] h-screen flex flex-col justify-between bg-[#FFFFFF] p-4 pt-2 ease-in duration-500' 
                                : 'fixed right-[-120%] top-0 p-10 ease-in duration-500'
                        }
                        onClick={e => e.stopPropagation()}
                    >
                        <div>
                            <div className='flex w-full items-center justify-between'>
                                <Link href='/'>
                                    <a>
                                        <Image
                                            className="rounded-full xl:hover:cursor-pointer object-cover"
                                            src="/assets/pro-headshot-cropped-1.png"
                                            alt="Website Logo"
                                            width="45px"
                                            height="45px"
                                            onClick={()=> setNav(false)}
                                        />
                                    </a>
                                </Link>
                                <div
                                    onClick={handleNav}
                                    className='rounded-full shadow-lg shadow-red-400 p-3 cursor-pointer mt-[-7px] mr-[-8px] text-[#FF0000]'
                                >
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className='border-b border-gray-300 my-4 mt-0 sm:my-0 md:my-4'>
                                <p className='w-[85%] md:w-[90%] py-4'>
                                    Let&apos;s build together
                                </p>
                            </div>
                            <div className='py-4'>
                                <ul className='uppercase flex flex-col sm:flex-row sm:flex-wrap sm:justify-start md:flex-col'>
                                    <Link href='/'>
                                        <a>
                                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                                                Home
                                            </li>
                                        </a>
                                    </Link>
                                    {/* <Link href='https://drive.google.com/file/d/1K5YiSohJ3VwocU03TEoE4elBc-2twqRC/view?usp=drive_link'>
                                        <a target={'_blank'}>
                                            <li className='text-[#800020] animate-pulse py-4 font-bold text-sm uppercase  underline-offset-2 cursor-pointer duration-200 ease-out tracking-wider'>
                                                <span className='hover:scale-105 hover:animate-none'>
                                                    Resume
                                                </span>
                                            </li>
                                        </a>
                                    </Link> */}
                                    <Link href='/#about'>
                                        <li onClick={()=> setNav(false)} className='py-4 text-sm sm:mx-auto'>
                                            About
                                        </li>
                                    </Link>
                                    <Link href='/#skills'>
                                        <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                                            Skills
                                        </li>
                                    </Link>
                                    <Link href='/#projects'>
                                        <li onClick={()=> setNav(false)} className='py-4 text-sm mr-5'>
                                            Projects
                                        </li>
                                    </Link>
                                    <Link href='/#contact'>
                                        <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                                            Contact
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className='pt-10 sm:pt-0 md:pt-10'>
                            <p className='uppercase tracking-widest text-[#FF0000]'>
                                Let&apos;s Connect
                            </p>
                            <div className='flex items-center justify-around my-4 w-full'>
                                <div className='rounded-full shadow-lg shadow-blue-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://www.linkedin.com/in/stephen-pastor/'>
                                        <a target={'_blank'}>
                                            <FaLinkedinIn className='text-[#0A66C2]'/>
                                        </a>
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://github.com/StephenRivero'>
                                        <a target={'_blank'}>
                                            <FaGithub />
                                        </a>
                                    </Link>
                                </div >
                                <div onClick={()=> setNav(false)} className='rounded-full shadow-lg shadow-red-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='/#contact'>
                                        <AiOutlineMail className='text-[red]'/>
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://drive.google.com/file/d/1K5YiSohJ3VwocU03TEoE4elBc-2twqRC/view?usp=drive_link'>
                                        <a target={'_blank'}>
                                            <BsFillPersonLinesFill className='text-[gray]'/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar