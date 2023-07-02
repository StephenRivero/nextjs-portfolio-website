import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import youtubeImg from '../public/assets/projects/youtube-clone-project.jpg';
import { RiRadioButtonFill } from 'react-icons/ri'


const youtubeCloneProject = () => {
  return (
    <div className='w-full overflow-x-hidden mx-auto'>
        <div className='w-full h-[50vw] sm:h-[50vh] md:h-[50vw] lg:h-[25vw] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vw] sm:h-[50vh] md:h-[50vw] lg:h-[25vw] bg-black/80 z-10' />
              <Image className='absolute z-1' layout='fill' objectFit='cover' src={youtubeImg} alt="/" />
            <div className='absolute top-[80%] sm:top-[75%] md:top-[88%] lg:top-[85%] xl:top-[88%] max-w-[1240px] pl-4  w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-2'>
              <h2 className='pb-2'>
                YouTube Clone
              </h2>
              <h3>
                ReactJs / Rapid API / MUI 5
              </h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto grid justify-items-center md:grid-cols-5 md:gap-4 p-2 pl-4 pt-8 md:pr-6'>
          <div className='col-span-5 lg:col-span-4'>
            <p>
              Project
            </p>
            <h2>
              Overview
            </h2>
            <p className='text-justify pr-4 mt-2'>
              This app is a clone version of the most popular online video sharing and social media platform &quot;YouTube&quot;.
              This app was built using ReactJs with its data through Rapid API and its UI through Material UI v.5.
              Rapid API is an API Hub that helps developers find and connect directly to the world&apos;s top APIs and manage their own APIs from one central location.
              MUI is a massive library of UI components designers and developers can use to build React applications. The open-source project follows Google&apos;s guidelines for creating components, giving you a customizable library of foundational and advanced UI elements.
            </p>
            <div className='flex flex-nowrap w-fit mx-auto justify-center sm:justify-start md:justify-center mt-8 mb-4 md:mt-10 lg:mb-6 xl:mb-7 z-10'>
              <Link href="https://stephenrivero.github.io/youtube-clone-project/" className='flex justify-center'>
                <a target='_blank'>
                  <button className='px-8 py-2 mr-4 xl:hover:scale-105 cursor-pointer'>
                    Demo
                  </button>
                </a>
              </Link>
              <Link href="https://github.com/StephenRivero/youtube-clone-project">
                <a target='_blank'>
                  <button className='px-8 py-2 xl:hover:scale-105 cursor-pointer'>
                    Code
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className='col-span-5 lg:col-span-1 shadow-xl shadow-red-400 rounded-xl p-1 mt-5 lg:mt-4 mr-2 lg:mx-3 mb-7 lg:mb-[130px] 2xl:mb-[220px]'>
            <div className='p-2 sm:p-4 lg:p-3'>
              <p className='text-center font-bold pb-2'>
                Technologies
              </p>
              <div className='flex sm:grid grid-cols-3 lg:grid-cols-1 h-fit'>
                <p className='text-gray-600 py-2 pl-2 sm:pl-0 flex items-center justify-start text-left'>
                  <RiRadioButtonFill className='pr-1' /> React.js  
                </p>
                <p className='text-gray-600 py-2 pl-2 sm:pl-0 flex items-center justify-start text-left mx-2 sm:mx-0'>
                  <RiRadioButtonFill className='pr-1' /> Rapid API
                </p>
                <p className='text-gray-600 py-2 flex items-center lg:justify-start justify-end'>
                  <RiRadioButtonFill className='pr-1' /> MUI 5    
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full max-w-[1240px] flex justify-start mx-auto md:mt-auto lg:mt-0'>
          <Link href='/#projects'>
            <a>
              <p className='underline underline-offset-4 cursor-pointer w-fit justify-start mr-auto mt-auto xl:pt-1 xl:static xl:mt-auto mb-4 xl:mb-5 ml-4 xl:hover:cursor-pointer'>
                Back
              </p>
            </a>
          </Link>
        </div>
    </div>
  )
}

export default youtubeCloneProject