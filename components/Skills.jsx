import React from 'react'
import Image from 'next/image'


const Skills = () => {
  return (
    <div id='skills' className='w-full 2xl:h-screen pb-16 pt-16 lg:pt-14 2xl:pt-16  p-2 sm:p-5 flex justify-center xl:items-center'>
        <div className='max-w-[1240px] lg:w-[95%] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#FF0000] pl-2 2xl:pt-5 xl:mb-[15px] xl:ml-[140px] xl:mt-[16px]'>
                Skills
            </p>
            <h2 className='xl:hidden py-4 pl-2'>
                What I Can Do
            </h2>
            <div className='flex flex-col xl:flex-row xl:gap-8 xl:justify-around'>
                {/* Skills */}
                <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 gap-6 sm:gap-8'>
                    <div className='order-1 h-fit p-3 sm:p-6 shadow-lg border border-orange-100 shadow-orange-300 rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="64" height="64" alt="HTML5 logo">
                                    <title>HTML5 Logo Badge</title>
                                    <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/>
                                    <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/>
                                    <path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"/>
                                    <path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"/>
                                </svg>
                            </div>
                            <div className='hidden sm:flex items-center justify-center'>
                                <h3>
                                    HTML5
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='order-2 h-fit p-3 sm:p-6 shadow-lg border border-blue-100 shadow-blue-600 rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" alt="CSS3 logo" viewBox="0 0 512 512">
                                <path fill="#264de4" d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"/>
                                <path fill="#2965f1" d="M405.388 431.408l35.148-393.73H256v435.146z"/>
                                <path fill="#ebebeb" d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"/>
                                <path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"/>
                                </svg>
                            <div className='hidden sm:flex items-center justify-center'>
                                <h3>
                                    CSS3
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='order-3 h-fit p-[11.5px] sm:p-6 border border-yellow-100 shadow-lg shadow-yellow-300 rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                            <svg width={64} height={64} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
                                <rect width="630" height="630" fill="#f7df1e"/>
                                <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
                            </svg>
                            <div className='hidden sm:flex items-center justify-center'>
                                <h3 className='xl:text-center'>
                                    Javascript ES6
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='hidden order-4 h-fit p-[12px] sm:p-6 border border-teal-100 shadow-lg shadow-[#8ac9cf] rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.116 22.806" width="64" height="64"><g opacity=".8"><path d="M33.71 0L11.207 22.693l.113.113h22.586l11.21-11.304z" fill="#d8dee9"/><path d="M11.405 0l22.578 22.769-.039.037H11.209L0 11.502z" fill="#8ac0cf"/></g></svg>
                            <div className='hidden sm:flex items-center justify-center'>
                                <h3>
                                    AlpineJs
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='order-4 h-fit p-[12px] sm:p-6 border border-blue-100 shadow-lg shadow-blue-400 rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                            <svg alt='Typescript logo' xmlns="http://www.w3.org/2000/svg" width="64" height="64" version="1.1" viewBox="0 0 260 260">
                                <path d="m9.75 0h240.5c5.385 0 9.75 4.3652 9.75 9.75v240.5c0 5.385-4.365 9.75-9.75 9.75h-240.5c-5.3848 0-9.75-4.365-9.75-9.75v-240.5c0-5.3848 4.3652-9.75 9.75-9.75z" fill="#fff"/>
                                <path d="m9.75 0h240.5c5.385 0 9.75 4.3652 9.75 9.75v240.5c0 5.385-4.365 9.75-9.75 9.75h-240.5c-5.3848 0-9.75-4.365-9.75-9.75v-240.5c0-5.3848 4.3652-9.75 9.75-9.75zm134.78 138.32v-21.324h-92.532v21.324h33.036v94.946h26.298v-94.946zm10.485 92.439c4.241 2.162 9.257 3.784 15.048 4.865 5.79 1.081 11.893 1.622 18.309 1.622 6.253 0 12.193-0.595 17.82-1.784 5.628-1.189 10.562-3.149 14.803-5.879s7.598-6.297 10.072-10.703 3.711-9.852 3.711-16.339c0-4.703-0.707-8.824-2.12-12.365-1.414-3.541-3.453-6.69-6.117-9.447s-5.859-5.23-9.583-7.419c-3.725-2.189-7.925-4.257-12.601-6.203-3.425-1.406-6.497-2.771-9.216-4.095-2.718-1.324-5.029-2.676-6.932-4.054-1.903-1.379-3.371-2.838-4.404-4.379-1.033-1.54-1.55-3.284-1.55-5.23 0-1.784 0.463-3.392 1.387-4.824 0.924-1.433 2.229-2.663 3.915-3.69 1.685-1.027 3.751-1.824 6.198-2.392 2.447-0.567 5.165-0.851 8.156-0.851 2.174 0 4.472 0.162 6.891 0.486 2.42 0.325 4.853 0.825 7.299 1.5 2.447 0.676 4.826 1.527 7.137 2.555 2.311 1.027 4.445 2.216 6.402 3.567v-24.244c-3.969-1.514-8.305-2.636-13.008-3.365-4.704-0.73-10.1-1.095-16.189-1.095-6.199 0-12.071 0.662-17.617 1.987-5.546 1.324-10.425 3.392-14.639 6.203s-7.544 6.392-9.991 10.743c-2.447 4.352-3.67 9.555-3.67 15.609 0 7.731 2.243 14.326 6.729 19.785 4.485 5.46 11.295 10.082 20.43 13.866 3.588 1.46 6.932 2.892 10.031 4.298 3.099 1.405 5.777 2.865 8.033 4.378 2.257 1.514 4.037 3.162 5.342 4.946s1.958 3.811 1.958 6.082c0 1.676-0.408 3.23-1.224 4.662-0.815 1.433-2.052 2.676-3.71 3.73-1.659 1.054-3.725 1.879-6.199 2.473-2.474 0.595-5.369 0.892-8.686 0.892-5.654 0-11.254-0.986-16.8-2.959s-10.684-4.933-15.415-8.879z" fill="#3178c6"/>
                            </svg>
                            <div className='hidden sm:flex items-center justify-center'>
                                <h3>
                                    Typescript
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='order-5 h-fit p-3 sm:p-6 border border-cyan-100 shadow-lg shadow-cyan-300 rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                            <svg width={64} height={64} xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
                            <title>React Logo</title>
                            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                            <g stroke="#61dafb" strokeWidth="1" fill="none">
                                <ellipse rx="11" ry="4.2"/>
                                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                            </g>
                            </svg>
                            <div className='hidden sm:flex items-center justify-center'>
                                <h3>
                                    ReactJs
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='order-5 h-fit p-3 sm:p-6 border border-black/10 shadow-xl shadow-black/50 rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                            <Image 
                                src="/assets/skills/nextjs.png" 
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                            <div className='hidden sm:flex items-center justify-center'>
                                <h3>
                                    NextJs
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Frontend Tools */}
                <div className='flex flex-col mt-10 xl:mt-[-43px] relative'>
                    <p className='text-xl tracking-widest uppercase text-[#FF0000] pl-2 mb-4 xl:mb-[17px] xl:text-lg 2xl:text-xl'>
                        Frontend Tools
                    </p>
                    <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:flex xl:flex-col xl:items-center gap-6 sm:gap-8 xl:gap-[32px]'>{/* xl:grid-cols-1 */}
                        <div className='h-fit xl:w-[161px] p-3 sm:p-6 border border-teal-100 shadow-lg shadow-teal-300 rounded-xl hover:scale-105 ease-in-out duration-200'>
                            <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="62" viewBox="0 0 1000 1000" fill="none">
                                    <path d="M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z" fill="#07B6D5"/>
                                    <path d="M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z" fill="#07B6D5"/>
                                </svg>
                                <div className='hidden sm:flex items-center justify-center'>
                                    <h3>
                                        Tailwind CSS
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit xl:w-[161px] p-3 sm:p-6 border border-blue-100 shadow-lg shadow-blue-300 rounded-xl hover:scale-105 ease-in-out duration-200'>
                            <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 476.30000000000007" width="60" height="64" alt="Material UI logo"><path d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z" fill="#00b0ff"/><path d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z" fill="#0081cb"/><path d="M225 303.1v86.6l150 86.6v-86.6z" fill="#00b0ff"/><path d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z" fill="#0081cb"/>
                                </svg>
                                <div className='hidden sm:flex items-center justify-center'>
                                    <h3>
                                        Material UI
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit xl:w-[161px] p-3 sm:p-6 border border-black/10 shadow-lg shadow-black/50 rounded-xl hover:scale-105 ease-in-out duration-200'>
                            <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                                <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 14 21" role="presentation" width="60" height="65" alt="Framer Motion logo"><path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" fill="currentColor"></path>
                                </svg>
                                <div className='hidden sm:flex items-center justify-center xl:text-center xl:text-[15px]'>
                                    <h3>
                                        Framer Motion
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Development Tools */}
                <div className='flex flex-col mt-10 xl:mt-[-43px]'>
                    <p className='text-xl tracking-widest uppercase text-[#FF0000] pl-2 mb-4 xl:text-center'>
                        Development Tools
                    </p>
                    <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:flex xl:flex-wrap xl:items-center xl:max-w-[560px] gap-8'>
                        <div className='h-fit xl:w-[161px] p-3 sm:p-[23px] shadow-lg border border-orange-100 shadow-orange-500 rounded-xl hover:scale-105 ease-in-out duration-200'>
                            <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                                <Image 
                                    src="/assets/skills/git.png" 
                                    width='64px' 
                                    height='64px' 
                                    alt='Git logo' 
                                />
                                <div className='hidden sm:flex items-center justify-center'>
                                    <h3>
                                        Git
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit xl:w-[161px] p-3 sm:p-6 border border-black/10 shadow-lg shadow-black/50 rounded-xl hover:scale-105 ease-in-out duration-200'>
                            <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                                <svg width="62" height="62" aria-hidden="true" viewBox="0 0 16 16" version="1.1"  data-view-component="true" className="octicon octicon-mark-github v-align-middle color-fg-default">
                                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                </svg>
                                <div className='hidden sm:flex items-center justify-center'>
                                    <h3>
                                        GitHub
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit xl:w-[161px] p-3 sm:p-6 border border-blue-100 shadow-lg shadow-blue-500 rounded-xl hover:scale-105 ease-in-out duration-200'>
                            <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" alt="Bitbucket logo" viewBox="0 0 62.42 62.42">
                                    <defs>
                                        <linearGradient id="New_Gradient_Swatch_1" x1="64.01" y1="30.27" x2="32.99" y2="54.48" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.18" stopColor="#0052cc"/>
                                            <stop offset="1" stopColor="#2684ff"/>
                                        </linearGradient>
                                    </defs>
                                    <title>Bitbucket-blue</title>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Blue" transform="translate(0 -3.13)">
                                            <path d="M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z" fill="#2684ff"/>
                                            <path d="M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z" fill="url(#New_Gradient_Swatch_1)"/>
                                        </g>
                                    </g>
                                </svg>
                                <div className='hidden sm:flex items-center justify-center'>
                                    <h3>
                                        Bitbucket
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit xl:w-[161px] p-3 sm:p-6 border border-black/10 shadow-lg shadow-black/50 rounded-xl hover:scale-105 ease-in-out duration-200'>
                            <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="64" height="64" alt="Vercel logo" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                    <metadata>
                                        Created by potrace 1.11, written by Peter Selinger 2001-2013
                                    </metadata>
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                    <path d="M2310 5109 c-502 -55 -974 -249 -1355 -556 -129 -104 -340 -321 -433 -445 -265 -354 -434 -758 -498 -1193 -22 -147 -29 -428 -15 -575 42 -433 180 -833 405 -1174 414 -629 1047 -1032 1791 -1142 147 -22 428 -29 575 -15 433 42 833 180 1174 405 629 414 1032 1047 1142 1791 22 147 29 428 15 575 -51 524 -238 988 -558 1385 -104 129 -321 340 -445 433 -354 265 -755 432 -1193 498 -121 18 -487 26 -605 13z m909 -2348 c347 -607 631 -1105 631 -1107 0 -2 -569 -4 -1265 -4 -696 0 -1265 2 -1265 5 0 8 1263 2216 1266 2212 1 -1 287 -499 633 -1106z"/>
                                    </g>
                                </svg>
                                <div className='hidden sm:flex items-center justify-center'>
                                    <h3>
                                        Vercel
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit xl:w-[161px] p-3 sm:p-6 border border-green-100 shadow-lg shadow-[#68A063] rounded-xl hover:scale-105 ease-in-out duration-200'>
                            <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                                <svg className='h-[64px] w-[64px]' xmlns="http://www.w3.org/2000/svg" width="256px" height="289px" viewBox="0 0 256 289" version="1.1" preserveAspectRatio="xMidYMid">
                                    <g>
                                        <path d="M127.999999,288.463771 C124.024844,288.463771 120.314699,287.403728 116.869564,285.548656 L81.6231884,264.612838 C76.32298,261.697724 78.9730854,260.637682 80.5631458,260.107661 C87.7184259,257.72257 89.0434775,257.192547 96.4637688,252.952381 C97.2587979,252.422361 98.3188405,252.687372 99.1138718,253.217392 L126.144927,269.383024 C127.20497,269.913045 128.530021,269.913045 129.325053,269.383024 L235.064182,208.165634 C236.124225,207.635611 236.654245,206.575571 236.654245,205.250519 L236.654245,83.0807467 C236.654245,81.7556929 236.124225,80.6956526 235.064182,80.1656324 L129.325053,19.2132506 C128.26501,18.6832305 126.939959,18.6832305 126.144927,19.2132506 L20.4057954,80.1656324 C19.3457551,80.6956526 18.8157349,82.0207041 18.8157349,83.0807467 L18.8157349,205.250519 C18.8157349,206.31056 19.3457551,207.635611 20.4057954,208.165634 L49.2919247,224.861286 C64.9275364,232.811595 74.7329196,223.536234 74.7329196,214.260871 L74.7329196,93.681159 C74.7329196,92.0910985 76.0579711,90.5010358 77.9130428,90.5010358 L91.4285716,90.5010358 C93.0186343,90.5010358 94.6086948,91.8260873 94.6086948,93.681159 L94.6086948,214.260871 C94.6086948,235.196689 83.2132512,247.387164 63.3374737,247.387164 C57.2422362,247.387164 52.4720502,247.387164 38.9565214,240.761906 L11.1304347,224.861286 C4.24016581,220.886129 5.68434189e-14,213.46584 5.68434189e-14,205.515528 L5.68434189e-14,83.3457557 C5.68434189e-14,75.3954465 4.24016581,67.9751552 11.1304347,64.0000006 L116.869564,2.78260752 C123.494824,-0.927535841 132.505176,-0.927535841 139.130436,2.78260752 L244.869565,64.0000006 C251.759834,67.9751552 256,75.3954465 256,83.3457557 L256,205.515528 C256,213.46584 251.759834,220.886129 244.869565,224.861286 L139.130436,286.078676 C135.685299,287.668739 131.710145,288.463771 127.999999,288.463771 L127.999999,288.463771 Z M160.596274,204.455488 C114.219461,204.455488 104.679089,183.254659 104.679089,165.233955 C104.679089,163.643893 106.004141,162.053832 107.859212,162.053832 L121.639752,162.053832 C123.229813,162.053832 124.554864,163.113872 124.554864,164.703935 C126.674947,178.749484 132.770187,185.639753 160.861283,185.639753 C183.122154,185.639753 192.662526,180.604556 192.662526,168.67909 C192.662526,161.788821 190.012423,156.753624 155.296065,153.308489 C126.409938,150.393375 108.389235,144.033126 108.389235,120.977226 C108.389235,99.5113875 126.409938,86.7908901 156.621119,86.7908901 C190.542443,86.7908901 207.238095,98.4513472 209.358178,123.89234 C209.358178,124.687371 209.093167,125.482403 208.563147,126.277434 C208.033127,126.807454 207.238095,127.337474 206.443064,127.337474 L192.662526,127.337474 C191.337475,127.337474 190.012423,126.277434 189.747412,124.952382 C186.567289,110.376813 178.351966,105.606625 156.621119,105.606625 C132.240165,105.606625 129.325053,114.086957 129.325053,120.447205 C129.325053,128.132506 132.770187,130.5176 165.631471,134.757766 C198.227744,138.997931 213.598344,145.093169 213.598344,167.884058 C213.333333,191.20497 194.252589,204.455488 160.596274,204.455488 L160.596274,204.455488 Z" fill="#539E43"/>
                                    </g>
                                </svg>
                                <div className='hidden sm:flex items-center justify-center'>
                                    <h3>
                                        NodeJs
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit xl:w-[161px] p-3 sm:p-6 border border-red-100 shadow-lg shadow-red-400 rounded-xl hover:scale-105 ease-in-out duration-200'>
                            <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                                <svg className='h-[64px] w-[64px] py-[20px]' xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="540px" height="210px" viewBox="0 0 18 7">
                                    <path fill="#CB3837" d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"/>
                                    <polygon fill="#FFFFFF" points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 "/>
                                    <path fill="#FFFFFF" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z"/>
                                    <polygon fill="#FFFFFF" points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 "/>
                                </svg>
                                <div className='hidden sm:flex items-center justify-center'>
                                    <h3>
                                        nPm
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit xl:w-[161px] p-3 sm:p-6 border border-blue-100 shadow-lg shadow-[#0078d7] rounded-xl hover:scale-105 ease-in-out duration-200'>
                            <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2 sm:py-[2.5px] md:py-0'>
                                <Image 
                                    src="/assets/skills/Visual_Studio_Code_1.35_icon.svg.png" 
                                    width='64px' 
                                    height='64px' 
                                    alt='VScode logo' 
                                />
                                <div className='hidden sm:flex items-center justify-center'>
                                    <h3>
                                        VScode
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit xl:w-[161px] p-3 sm:p-6 border border-red-100 shadow-lg shadow-[#FF3B00] rounded-xl hover:scale-105 ease-in-out duration-200'>
                            <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                                <Image 
                                    src="/assets/skills/figma-icon.png" 
                                    width='64px' 
                                    height='64px' 
                                    alt='Figma logo' 
                                />
                                <div className='hidden sm:flex items-center justify-center'>
                                    <h3>
                                        Figma
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit xl:w-[161px] p-3 sm:p-6 border border-blue-100 shadow-lg shadow-[#0078d7] rounded-xl hover:scale-105 ease-in-out duration-200'>
                            <div className='flex xl:flex-col justify-center items-center gap-5 xl:gap-2'>
                                <Image 
                                    src="/assets/skills/Rapid.png" 
                                    width='64px' 
                                    height='64px' 
                                    alt='Rapid logo' 
                                />
                                <div className='hidden sm:flex items-center justify-center'>
                                    <h3>
                                        Rapid
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Skills