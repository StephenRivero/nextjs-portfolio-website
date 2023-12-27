import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full xl:h-screen p-2 pt-16 pb-36 flex items-center sm:pb-24 sm:pt-24 md:pt-16 xl:py-0'>
        <div className='max-w-[1240px] w-[95%] m-auto xl:grid grid-cols-2 gap-8 relative items-center justify-center'>
            <div className='col-span-1'>
                <p className='px-1 pt-5 uppercase text-xl tracking-widest text-[#FF0000]'>
                    About
                </p>
                <h2 className='py-4 px-1'>
                    Who I Am
                </h2>
                <p className='py-2 px-1 text-gray-600'>
                    {"//"} I&apos;m not your normal developer
                </p>
                <p className='py-2 px-1 text-gray-600 text-justify'>
                    {/* I have over 7 years professional experience as a Licensed Sanitary Engineer in the Engineering Construction industry before becoming a Front-End Web Developer.
                    Throughout those years my physical & mental health had declined gradually to the point that I&apos;d got overweight & constantly sick due to the set of circumstances as a Project Engineer. 

                    It is during the “Pandemic Season” that I&apos;ve realized that I have to take a drastic change in my career plans.
                    After researching & self-assessment, I had decided to pursue Front-End Web Development starting in January 2021 while still working as a Project Engineer. And after a year of learning Front-End Web Development in “
                    <a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer" className='font-bold xl:hover:cursor-pointer underline'>
                        The Odin Project
                    </a>
                    ”, a free online web development course, I&apos;ve got my first job as a Front-End Web Developer on January 2022.
                    I&apos;m now spending my free time building projects with ReactJs and NextJs and also learning new technologies. */}

                    I have <b>7 years</b> of professional experience as a <b>Licensed Sanitary Engineer</b> in the Engineering Construction industry before becoming a <b>Front-End Web Developer</b> for <b>2 years</b> now.
                    I transitioned into the Tech industry to tend to my widowed PWD mother, working from home. My father passed away in <b>September 2021</b>. That time, I was working on-site at Malvar, Batangas and immediately tended to the passing of my father and eventually resigned from working as an Engineer.
                    These tragic events paved the way for me to become a Front-End Web Developer in <b>January 2022</b>. I&apos;m now spending my free time building projects with <b>Tailwind Css</b>, <b>React.js</b>, <b>Next.js</b>, learning new technologies, and finishing up the <b>Meta Front-End Developer Professional Certificate</b> online course.

                </p>
            </div>
            <div className='w-fit sm:mt-5 xl:mt-auto lg:mb-2 m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image
                    className='rounded-xl'
                    src="/assets/wallpaper-toledo-cebu-solar.jpg"
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