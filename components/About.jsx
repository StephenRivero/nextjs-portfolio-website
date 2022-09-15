import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full p-2 flex items-center py-16 box-border'>
        <div className='max-w-[1240px] w-[95%] m-auto lg:grid grid-cols-2 gap-8 relative'>
            <div className='col-span-1'>
                <p className='px-1 uppercase text-xl tracking-widest text-[#FF0000]'>About</p>
                <h2 className='py-4 px-1'>Who I Am</h2>
                <p className='py-2 px-1 text-gray-600'>// I am not your normal developer</p>
                <p className='py-2 px-1 text-gray-600 text-justify'>
                    I have 7 years professional experience as a Licensed Sanitary Engineer in the field of Food Manufacturing, Construction, and Sales Industry. 
                    Since the passing of my father in September 2021, I\'ve never been the same. I\'ve struggled a lot. And then, I decided to pursue Front-End Web Development starting in July 2022. 
                    I\'ve learned the fundamentals of, HTML5, CSS3, and JavaScript through the free online course “The Odin Project” where its goal is to help aspiring web developers. 
                    I\'m now spending my time building projects with ReactJs and NextJs and also learning new technologies.
                </p>
            </div>
            <div className='w-[100%] sm:w-full lg:mb-4 xl:mb-0 m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
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