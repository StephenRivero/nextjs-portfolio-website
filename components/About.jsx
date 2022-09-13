import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8'>
            <div className='col-span-1'>
                <p className='px-1 uppercase text-xl tracking-widest text-[#FF0000]'>About</p>
                <h2 className='py-4 px-1'>Who I Am</h2>
                <p className='py-2 px-1 text-gray-600'>// I am not your normal developer</p>
                <p className='py-2 px-1 text-gray-600 text-justify'>
                    I have 7 years professional experience as a Licensed Sanitary Engineer in the field of Food Manufacturing, Construction, and Sales Industry. 
                    Since the passing of my father in September 2021, a lot has changed within myself. I decided to pursue Front-End Web Development starting in January 2022. 
                    I've learned the fundamentals of, HTML5, CSS3, and JavaScript through the free online course “The Odin Project” where its goal is to help aspiring web developers. 
                    I am now spending my time building projects with ReactJs and learning new technologies.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image 
                    className='rounded-xl'
                    src="/../public/assets/wallpaper-toledo-cebu-solar.jpg" 
                    alt="An image of me with solar panels at the background"
                    width="800px" 
                    height="450px"
                />
            </div>
        </div>
    </div>
  )
}

export default About