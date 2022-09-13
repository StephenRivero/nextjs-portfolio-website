import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import youtubeImg from '../public/assets/projects/youtube-clone-project.jpg';
import { RiRadioButtonFill } from 'react-icons/ri'


const youtubeCloneProject = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={youtubeImg} alt="/" />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>YouTube Clone Project</h2>
                <h3>ReactJs / Rapid API / MUI 5</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid  md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p className='text-justify'>
              This app is a clone version of the most popular online video sharing and social media platform "YouTube".
              This app was built using ReactJs with its data through Rapid API and its UI through Material UI v.5.
              RapidAPI is an API Hub that helps developers find and connect directly to the world's top APIs and manage their own APIs from one central location.
              MUI is a massive library of UI components designers and developers can use to build React applications. The open-source project follows Google’s guidelines for creating components, giving you a customizable library of foundational and advanced UI elements.
            </p>
            <Link href="https://stephenrivero.github.io/youtube-clone-project/">
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            </Link>
            <Link href="https://github.com/StephenRivero">
              <button className='px-8 py-2 mt-4 mr-8'>Code</button>
            </Link>
          </div>
          <div className='col-span-3 md:col-span-1 shadow-xl shadow-red-400 rounded-xl  p-1'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center justify-center text-left'>
                  <RiRadioButtonFill className='pr-1' /> ReactJs  
                </p>
                <p className='text-gray-600 py-2 flex items-center justify-center text-left'>
                  <RiRadioButtonFill className='pr-1' /> Rapid API
                </p>
                <p className='text-gray-600 py-2 flex items-center justify-center text-left'>
                  <RiRadioButtonFill className='pr-1' /> MUI 5    
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
    </div>
  )
}

export default youtubeCloneProject