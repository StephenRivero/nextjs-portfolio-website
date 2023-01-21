import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import metaversusImg from '../public/assets/projects/metaverse-web-app.png';
import { RiRadioButtonFill } from 'react-icons/ri'


const youtubeCloneProject = () => {
  return (
    <div className='w-full xl:h-[100vh] overflow-x-hidden'>
      <div className='w-full h-[60vw] md:h-[50vw] lg:h-[18vw] xl:h-[25vw] relative'>
        <div className='absolute top-0 left-0 w-full h-[60vw] md:h-[50vw] lg:h-[18vw] xl:h-[25vw] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={metaversusImg} alt="/" />
        <div className='absolute top-[75%] sm:top-[88%] md:top-[89%] lg:top-[79%] xl:top-[85%] max-w-[1240px] pl-4 w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-2'>
          <h2 className='pb-2'>
            Metaversus
          </h2>
          <h3>
            Tailwind Css / Framer Motion / React.js / Next.js-13
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
            This web app is a mock Metaverse website called <b>“Metaversus”</b>. It is built using <b>Tailwind Css, Framer Motion, React.js, and Next.js-13</b>.
            <b> Tailwind CSS</b> is a &quot;utility-first CSS framework&quot; which provides several single-purpose utility classes that you can use directly inside your markup to design an element.
            <b> Framer Motion</b> is a production-ready motion library for React from Framer. It&apos;s simple yet powerful, allowing you to express complex user interactions with robust, semantic markup.
            <b> Next.js</b> is like React with benefits, in that it delivers all the features of React with ease-of-use conventions and a well-defined client-server stack. <b> Next.js-13</b> is the newest version, released by Vercel at the Next.js conference in October 2022. It brings a slew of new features, including a bundler called Turbopack and support for several React-incubated optimizations like React Server Components and streaming rendering.
          </p>
          <div className='flex flex-nowrap w-fit mx-auto justify-center sm:justify-start md:justify-center mt-8 mb-4 md:mt-10 lg:mb-6 xl:mb-7 z-10'>
            <Link href="https://metaversus-stephenrivero.vercel.app/" className='flex justify-center'>
              <a target="_blank">
                <button className='px-8 py-2 mr-4 xl:hover:scale-105 cursor-pointer'>
                  Demo
                </button>
              </a>
            </Link>
            <Link href="https://github.com/StephenRivero/metaverse-website">
              <a target="_blank">
                <button className='px-8 py-2 xl:hover:scale-105 cursor-pointer'>
                  Code
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className='col-span-5 lg:col-span-1 shadow-xl shadow-red-400 rounded-xl p-1 mt-5 lg:mt-4 mr-2 lg:mx-3 mb-7 lg:mb-[130px] 2xl:mb-[220px]'>
            <div className='p-1 sm:p-4 lg:p-3'>
              <p className='text-center font-bold pb-2'>
                Technologies
              </p>
              <div className='grid grid-cols-2 grid-rows-2 lg:grid-cols-1 h-fit'>
                <p className='text-gray-600 py-2 pl-2 sm:pl-0 flex items-center text-left'>
                  <RiRadioButtonFill className='pr-1' /> Tailwind Css
                </p>
                <p className='text-gray-600 py-2 pl-2 sm:pl-0 flex items-center text-left'>
                  <RiRadioButtonFill className='pr-1' /> Framer Motion
                </p>
                <p className='text-gray-600 py-2 pl-2 sm:pl-0 flex items-center text-left'>
                  <RiRadioButtonFill className='pr-1' /> React.js
                </p>
                <p className='text-gray-600 py-2 pl-2 sm:pl-0 flex items-center text-left'>
                  <RiRadioButtonFill className='pr-1' /> Next.js-13
                </p>
              </div>
            </div>
        </div>
      </div>
      <div className='w-full max-w-[1240px] flex justify-start mx-auto'>
        <Link href='/#projects'>
          <a target={'_blank'} className='underline underline-offset-4 cursor-pointer w-fit justify-start mr-auto mt-auto xl:pt-1 xl:static xl:mt-auto mb-4 xl:mb-5 ml-4 xl:hover:cursor-pointer'>
            Back
          </a>
        </Link>
      </div>
    </div>
    
  )
}

export default youtubeCloneProject