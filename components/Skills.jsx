import React from 'react'
import Image from 'next/image'


const Skills = () => {
  return (
    <div id='skills' className='w-full pb-16 pt-16 sm:h-screen p-2 flex justify-center xl:py-0'>
        <div className='max-w-[1240px] lg:w-[95%] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#FF0000]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl shadow-orange-400 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src="/assets/skills/html.png" 
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl shadow-blue-400 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src="/assets/skills/css.png" 
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl shadow-yellow-400 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src="/assets/skills/javascript.png" 
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl shadow-cyan-400 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src="/assets/skills/react.png" 
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>ReactJs</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl shadow-black/50 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src="/assets/skills/nextjs.png" 
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NextJs</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl shadow-teal-400 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src="/assets/skills/tailwind.png" 
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl shadow-orange-500 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src="/assets/skills/git.png" 
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Git</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl  shadow-black/50 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src="/assets/skills/github1.png" 
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GitHub</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Skills