import React from 'react';
import Image from 'next/image';
import ProjectItem from './ProjectItem';
import youtubeImg from '../public/assets/projects/youtube-clone-project.jpg';
// import cryptoImg from '../public/assets/projects/crypto.jpg';
// import propertyImg from '../public/assets/projects/property.jpg'
import metaversusImg from '../public/assets/projects/metaverse-web-app.png'
import youtubeClone2Img from '../public/assets/projects/youtube-clone-2.png'
import flexibbleImg from '../public/assets/projects/flexibble.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full lg:h-auto'>
        <div className='max-w-[1240px] mx-auto px-2 py-14 xl:pb-0 2xl:pb-40 md:pt-32 lg:pt-16'>
            <p className='text-xl tracking-widest uppercase text-[#FF0000] 2xl:pt-5 pl-5'>
                Projects
                </p>
            <h2 className='py-4 pl-5'>
                What I&apos;ve Built
            </h2>
            <div className='grid sm:grid-cols-2 gap-4 md:gap-8 sm:w-full sm:mx-auto md:mx-0 md:w-full'>
                <ProjectItem
                    title='YouTube Clone 2'
                    backgroundImg={youtubeClone2Img}
                    projectUrl='/youtube-clone-2'
                    tech='React.js, Redux Toolkit, Typescript, & Tailwind Css'
                    status='More Info'
                />
                <ProjectItem 
                    title='Metaversus' 
                    backgroundImg={metaversusImg} 
                    projectUrl='/metaversus'
                    tech='Tailwind Css, Framer Motion, React.js, & Next.js-13'
                    status='More Info' 
                />
                <ProjectItem
                    title='YouTube Clone'
                    backgroundImg={youtubeImg}
                    projectUrl='/youtube-clone-project'
                    tech='React.js, Rapid API, & MUI 5'
                    status='More Info'
                />
                <ProjectItem
                    title='Dribbble Clone'
                    backgroundImg={flexibbleImg}
                    projectUrl='/#projects'
                    tech='React.js, Next.js-13, Grafbase, Typescript, Tailwind Css'
                    status='Under Development'
                />
                
            </div>
        </div>
    </div>
  )
}

export default Projects