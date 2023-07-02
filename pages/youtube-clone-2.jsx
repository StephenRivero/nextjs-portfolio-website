import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import youtubeClone2Img from '../public/assets/projects/youtube-clone-2.png'
import { RiRadioButtonFill } from 'react-icons/ri'


const youtubeClone2 = () => {
  return (
    <div className='w-full xl:h-[100vh] overflow-x-hidden'>
      <div className='w-full h-[60vw] md:h-[50vw] lg:h-[18vw] xl:h-[25vw] relative'>
        <div className='absolute top-0 left-0 w-full h-[60vw] md:h-[50vw] lg:h-[18vw] xl:h-[25vw] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={youtubeClone2Img} alt="/" />
        <div className='absolute top-[75%] sm:top-[88%] md:top-[89%] lg:top-[79%] xl:top-[85%] max-w-[1240px] pl-4 w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-2'>
          <h2 className='pb-2'>
            YouTube Clone 2
          </h2>
          <h3>
             React.js / Redux Toolkit / YouTube Data API /Typescript / Tailwind Css 
          </h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto grid justify-items-center md:grid-cols-5 md:gap-4 p-2 pl-4 pt-6 md:pr-3'>
        <div className='col-span-5 lg:col-span-4'>
          <p>
            Project
          </p>
          <h2>
            Overview
          </h2>
          <p className='text-justify pr-4 mt-2'>
            This web app is my second attempt to make a clone version of &quot;YouTube&quot;. It is built using React.js, Redux Toolkit, Youtube Data API, Typescript, and Tailwind Css. 
            I was able to build it by following a Youtube tutorial, <a href="https://www.youtube.com/watch?v=I32ri7v3SYk" target='_blank' rel="noreferrer" className='font-[500] text-blue-600 underline underline-offset-2'>https://www.youtube.com/watch?v=I32ri7v3SYk</a>, 
            from <a href="https://www.youtube.com/@KishanSheth21" target='_blank' rel="noreferrer" className='font-bold text-blue-600 underline underline-offset-2'>Kishan Sheth</a>. 
            In the tutorial, there are no responsive settings for mobile & tablet devices so I added it and adding a little bit of my styling as well. 
            I decided to build this project because I am curious how Redux Toolkit works and also I want to see how Typescript is applied in a project.
          </p>
          <div className='flex flex-nowrap w-fit mx-auto justify-center sm:justify-start md:justify-center mt-8 mb-4 md:mt-10 lg:mb-6 xl:mb-0 xl:mt-6  z-10'>
            <Link href="https://youtubeclone-2.vercel.app/" className='flex justify-center'>
              <a target="_blank">
                <button className='px-8 py-2 mr-4 xl:hover:scale-105 cursor-pointer'>
                  Demo
                </button>
              </a>
            </Link>
            {/* <Link href="https://github.com/StephenRivero/metaverse-website">
              <a target="_blank">
                <button className='px-8 py-2 xl:hover:scale-105 cursor-pointer'>
                  Code
                </button>
              </a>
            </Link> */}
          </div>
        </div>
        <div className='col-span-5 lg:col-span-1 shadow-lg shadow-red-400 rounded-xl p-1 mt-5 lg:mt-4 mr-2 lg:mx-3 mb-7 lg:mb-[130px] 2xl:mb-[220px]'>
            <div className='p-1 sm:p-4 lg:p-3'>
              <p className='text-center font-bold pb-2'>
                Technologies
              </p>
              <div className='grid grid-cols-2 grid-rows-2 lg:grid-cols-1 h-fit'>
                <p className='text-gray-600 py-2 pl-2 sm:pl-0 flex items-center text-left'>
                  <RiRadioButtonFill className='pr-1' /> React.js
                </p>
                <p className='text-gray-600 py-2 pl-2 pr-2 sm:pl-0 flex items-center text-left'>
                  <RiRadioButtonFill className='pr-1 sm:ml-2 lg:ml-0' /> Redux Toolkit
                </p>
                <p className='text-gray-600 py-2 pl-2 sm:pl-0 sm:pr-2 flex items-center text-left text-xs sm:text-sm'>
                  <RiRadioButtonFill className='mr-1' /> YouTube Data API
                </p>
                <p className='text-gray-600 py-2 pl-2 sm:pl-0 flex items-center text-left'>
                  <RiRadioButtonFill className='pr-1 sm:ml-2 lg:ml-0' /> Typescript
                </p>
                <p className='text-gray-600 py-2 pl-2 sm:pl-0 flex items-center text-left'>
                  <RiRadioButtonFill className='pr-1' /> Tailwind Css
                </p>
              </div>
            </div>
        </div>
      </div>
      <div className='w-full max-w-[1240px] flex justify-start mx-auto'>
        <Link href='/#projects'>
          <a className='underline underline-offset-4 cursor-pointer w-fit justify-start mr-auto mt-auto xl:pt-1 xl:static xl:mt-auto mb-4 xl:mb-5 ml-4 xl:hover:cursor-pointer'>
            Back
          </a>
        </Link>
      </div>
    </div>
    
  )
}

export default youtubeClone2