import React from 'react';
import Image from 'next/image';
import ProjectItem from './ProjectItem';
import youtubeImg from '../public/assets/projects/youtube-clone-project.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import propertyImg from '../public/assets/projects/property.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#FF0000]'>Projects</p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem
                    title='YouTube Clone'
                    backgroundImg={youtubeImg}
                    projectUrl='/youtube-clone-project'
                    tech='React JS, Rapid API, MUI 5'
                    status='More Info'
                />
                <ProjectItem 
                    title='Property Finder' 
                    backgroundImg={propertyImg} 
                    projectUrl='/property'
                    tech='React JS'
                    status='Under Development' 
                />
                <ProjectItem
                    title='Crypto App'
                    backgroundImg={cryptoImg}
                    projectUrl='/crypto'
                    tech='React JS'
                    status='Under Development'
                />
                <ProjectItem
                    title='Twitch UI'
                    backgroundImg={twitchImg}
                    projectUrl='/twitch'
                    tech='Next JS'
                    status='Under Development'
                />
            </div>
        </div>
    </div>
  )
}

export default Projects