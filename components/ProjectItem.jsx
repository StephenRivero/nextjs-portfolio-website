import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItem = ({title, backgroundImg, projectUrl, tech, status}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#FF0000] to-[#ff9292]'>
      <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%]'>
        <h3 className='text-2xl text-white tracking-wider text-center '>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center mx-auto'>
          {tech}
        </p>
        <Link href={projectUrl}>
          <p className='w-[65%] sm:w-[55%] lg:w-[50%] mx-auto text-center py-2 px-2 rounded-lg bg-white text-gray-700font-bold text-lg cursor-pointer xl:hover:scale-105'>
            {status}
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem