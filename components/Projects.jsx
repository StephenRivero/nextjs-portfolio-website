import React from 'react';
import Image from 'next/image';
import ProjectItem from './ProjectItem';
import youtubeImg from '../public/assets/projects/youtube-clone-project.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import propertyImg from '../public/assets/projects/property.jpg'
import metaversusImg from '../public/assets/projects/metaverse-web-app.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full lg:h-auto'>
        <div className='max-w-[1240px] mx-auto px-2 py-14 xl:pb-0 md:pt-32 lg:pt-16'>
            <p className='text-xl tracking-widest uppercase text-[#FF0000] pt-5 pl-5'>
                Projects
                </p>
            <h2 className='py-4 pl-5'>
                What I&apos;ve Built
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                    title='Metaversus' 
                    backgroundImg={metaversusImg} 
                    projectUrl='/metaversus'
                    tech='Tailwind Css, Framer Motion, React JS, & NextJs-13'
                    status='More Info' 
                />
                <ProjectItem
                    title='YouTube Clone'
                    backgroundImg={youtubeImg}
                    projectUrl='/youtube-clone-project'
                    tech='React JS, Rapid API, & MUI 5'
                    status='More Info'
                />
                <ProjectItem
                    title='Crypto App'
                    backgroundImg={cryptoImg}
                    projectUrl='/crypto'
                    tech='React JS'
                    status='Under Development'
                />
                <ProjectItem
                    title='Property Finder'
                    backgroundImg={propertyImg}
                    projectUrl='/property'
                    tech='Next JS'
                    status='Under Development'
                />
            </div>
        </div>
    </div>
  )
}

export default Projects