import React from 'react'
import Image from 'next/image'


const Skills = () => {
  return (
    <div id='skills' className='w-full pb-16 pt-16 p-2 flex justify-center'>
        <div className='max-w-[1240px] lg:w-[95%] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#FF0000] pl-2'>
                Skills
            </p>
            <h2 className='py-4 pl-2'>
                What I Can Do
            </h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl shadow-orange-400 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='flex justify-center items-center gap-5'>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="64" height="64" alt="HTML5 logo">
                                <title>HTML5 Logo Badge</title>
                                <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/>
                                <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/>
                                <path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"/>
                                <path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"/>
                            </svg>
                        </div>
                        <div className='flex items-center justify-center'>
                            <h3>
                                HTML5
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl shadow-blue-600 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='flex justify-center items-center gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" alt="CSS3 logo" viewBox="0 0 512 512">
	                        <path fill="#264de4" d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"/>
	                        <path fill="#2965f1" d="M405.388 431.408l35.148-393.73H256v435.146z"/>
	                        <path fill="#ebebeb" d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"/>
	                        <path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"/>
                            </svg>
                        <div className='flex items-center justify-center'>
                            <h3>
                                CSS3
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl shadow-teal-400 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='flex justify-center items-center gap-5'>
                        <Image 
                            src="/assets/skills/tailwind.png" 
                            width='64px' 
                            height='64px' 
                            alt='/' 
                        />
                        <div className='flex items-center justify-center'>
                            <h3>
                                Tailwind CSS
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl shadow-blue-300 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='flex justify-center items-center gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 476.30000000000007" width="64" height="64" alt="Material UI logo"><path d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z" fill="#00b0ff"/><path d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z" fill="#0081cb"/><path d="M225 303.1v86.6l150 86.6v-86.6z" fill="#00b0ff"/><path d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z" fill="#0081cb"/>
                        </svg>
                        <div className='flex items-center justify-center'>
                            <h3>
                                Material UI
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl shadow-black/50 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='flex justify-center items-center gap-5'>
                        <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 14 21" role="presentation" width="64" height="64" alt="Framer Motion logo"><path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" fill="currentColor"></path>
                        </svg>
                        <div className='flex items-center justify-center'>
                            <h3>
                                Framer Motion
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl shadow-yellow-400 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='flex justify-center items-center gap-5'>
                        <Image 
                            src="/assets/skills/javascript.png" 
                            width='64px' 
                            height='64px' 
                            alt='Javascript logo' 
                        />
                        <div className='flex items-center justify-center'>
                            <h3>
                                Javascript ES6
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl shadow-cyan-400 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='flex justify-center items-center gap-5'>
                        <Image 
                            src="/assets/skills/react.png" 
                            width='64px' 
                            height='64px' 
                            alt='ReactJs logo' 
                        />
                        <div className='flex items-center justify-center'>
                            <h3>
                                ReactJs
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl shadow-black/50 rounded-xl hover:scale-105 ease-in-out duration-200'>
                    <div className='flex justify-center items-center gap-5'>
                        <Image 
                            src="/assets/skills/nextjs.png" 
                            width='64px' 
                            height='64px' 
                            alt='/' 
                        />
                        <div className='flex items-center justify-center'>
                            <h3>
                                NextJs
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-10'>
                <p className='text-xl tracking-widest uppercase text-[#FF0000] pl-2 mb-2'>
                    Tools
                </p>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl shadow-orange-500 rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex justify-center items-center gap-5'>
                            <Image 
                                src="/assets/skills/git.png" 
                                width='64px' 
                                height='64px' 
                                alt='Git logo' 
                            />
                            <div className='flex items-center justify-center'>
                                <h3>
                                    Git
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl  shadow-black/50 rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex justify-center items-center gap-5'>
                            <Image 
                                src="/assets/skills/github1.png" 
                                width='64px' 
                                height='64px' 
                                alt='Github logo' 
                            />
                            <div className='flex items-center justify-center'>
                                <h3>
                                    GitHub
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl  shadow-blue-500 rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex justify-center items-center gap-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" alt="Bitbucket logo" viewBox="0 0 62.42 62.42">
                                <defs>
                                    <linearGradient id="New_Gradient_Swatch_1" x1="64.01" y1="30.27" x2="32.99" y2="54.48" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.18" stop-color="#0052cc"/>
                                        <stop offset="1" stop-color="#2684ff"/>
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
                            <div className='flex items-center justify-center'>
                                <h3>
                                    Bitbucket
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl  shadow-black/50 rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex justify-center items-center gap-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="64" height="64" alt="Vercel logo" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                <metadata>
                                    Created by potrace 1.11, written by Peter Selinger 2001-2013
                                </metadata>
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M2310 5109 c-502 -55 -974 -249 -1355 -556 -129 -104 -340 -321 -433 -445 -265 -354 -434 -758 -498 -1193 -22 -147 -29 -428 -15 -575 42 -433 180 -833 405 -1174 414 -629 1047 -1032 1791 -1142 147 -22 428 -29 575 -15 433 42 833 180 1174 405 629 414 1032 1047 1142 1791 22 147 29 428 15 575 -51 524 -238 988 -558 1385 -104 129 -321 340 -445 433 -354 265 -755 432 -1193 498 -121 18 -487 26 -605 13z m909 -2348 c347 -607 631 -1105 631 -1107 0 -2 -569 -4 -1265 -4 -696 0 -1265 2 -1265 5 0 8 1263 2216 1266 2212 1 -1 287 -499 633 -1106z"/>
                                </g>
                            </svg>
                            <div className='flex items-center justify-center'>
                                <h3>
                                    Vercel
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl  shadow-[#68A063] rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex justify-center items-center gap-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="161" height="60" preserveAspectRatio="xMidYMid"><g transform="matrix(.277129 0 0 .277129 9.76251 9.894026)"><path d="M471.05 51.6c-1.245 0-2.455.257-3.526.863l-33.888 19.57c-2.193 1.263-3.526 3.65-3.526 6.188v39.07c0 2.537 1.333 4.92 3.526 6.187l8.85 5.1c4.3 2.12 5.886 2.086 7.843 2.086 6.366 0 10-3.863 10-10.577V81.542c0-.545-.472-.935-1.007-.935h-4.245c-.544 0-1.007.4-1.007.935v38.565c0 2.976-3.1 5.97-8.13 3.454l-9.2-5.396c-.325-.177-.576-.5-.576-.863v-39.07c0-.37.248-.748.576-.935l33.817-19.5c.317-.182.694-.182 1.007 0l33.817 19.5c.322.193.576.553.576.935v39.07c0 .373-.187.755-.504.935l-33.888 19.5c-.3.173-.7.173-1.007 0l-8.706-5.18c-.26-.152-.613-.14-.863 0-2.403 1.362-2.855 1.52-5.108 2.302-.555.193-1.4.494.288 1.44l11.368 6.7c1.082.626 2.288.935 3.526.935 1.255 0 2.443-.3 3.526-.935l33.888-19.5c2.193-1.276 3.526-3.65 3.526-6.187v-39.07c0-2.538-1.333-4.92-3.526-6.188l-33.888-19.57c-1.062-.606-2.28-.863-3.526-.863zm9.066 27.918c-9.65 0-15.397 4.107-15.397 10.936 0 7.4 5.704 9.444 14.966 10.36 11.08 1.085 11.944 2.712 11.944 4.893 0 3.783-3.016 5.396-10.145 5.396-8.956 0-10.925-2.236-11.584-6.7-.078-.478-.446-.863-.935-.863h-4.4a1.03 1.03 0 0 0-1.007 1.007c0 5.703 3.102 12.447 17.916 12.447 10.723 0 16.908-4.2 16.908-11.584 0-7.3-4.996-9.273-15.397-10.65-10.5-1.4-11.512-2.07-11.512-4.533 0-2.032.85-4.75 8.634-4.75 6.953 0 9.523 1.5 10.577 6.188.092.44.48.8.935.8h4.4c.27 0 .532-.166.72-.36.184-.207.314-.44.288-.72-.68-8.074-6.064-11.872-16.908-11.872z" fill="#83cd29"/><path d="M271.82.383a2.18 2.18 0 0 0-1.079.288 2.18 2.18 0 0 0-1.079 1.871v55.042c0 .54-.252 1.024-.72 1.295a1.5 1.5 0 0 1-1.511 0l-8.994-5.18a4.31 4.31 0 0 0-4.317 0L218.218 74.42c-1.342.774-2.16 2.264-2.16 3.813v41.443a4.31 4.31 0 0 0 2.159 3.741l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.31 4.31 0 0 0 2.159-3.741V16.356c0-1.572-.858-3.047-2.23-3.813L272.9.598c-.336-.187-.708-.22-1.08-.216zM40.86 52.115c-.685.028-1.328.147-1.943.504L3.015 73.34a4.3 4.3 0 0 0-2.158 3.741L.93 132.7c0 .774.4 1.492 1.08 1.87.667.4 1.494.4 2.158 0l21.297-12.232c1.35-.8 2.23-2.196 2.23-3.74V92.623c0-1.55.815-2.97 2.16-3.74l9.066-5.252a4.25 4.25 0 0 1 2.158-.576 4.24 4.24 0 0 1 2.159.576L52.3 88.88c1.343.77 2.158 2.192 2.158 3.74v25.974c0 1.546.9 2.95 2.23 3.74l21.297 12.232c.67.4 1.495.4 2.158 0 .66-.38 1.08-1.097 1.08-1.87l.072-55.617a4.28 4.28 0 0 0-2.158-3.741L43.235 52.618c-.607-.356-1.253-.476-1.943-.504h-.43zm322.624.504a4.29 4.29 0 0 0-2.159.576l-35.903 20.722c-1.34.775-2.16 2.192-2.16 3.74V119.1c0 1.558.878 2.97 2.23 3.74l35.615 20.3c1.315.75 2.92.807 4.245.07l21.585-12.016c.685-.38 1.148-1.09 1.15-1.87s-.403-1.482-1.08-1.87l-36.12-20.722c-.676-.386-1.15-1.167-1.15-1.943V91.83c0-.774.48-1.484 1.15-1.87l11.224-6.476c.668-.386 1.488-.386 2.16 0L375.5 89.96a2.15 2.15 0 0 1 1.079 1.87v10.217a2.15 2.15 0 0 0 1.079 1.87c.673.388 1.488.39 2.16 0L401.33 91.4c1.335-.776 2.16-2.197 2.16-3.74v-10a4.32 4.32 0 0 0-2.159-3.741l-35.687-20.722a4.28 4.28 0 0 0-2.159-.576zm-107.35 30.94a1.21 1.21 0 0 1 .576.143l12.303 7.123c.334.193.576.55.576.935v14.246c0 .387-.24.743-.576.935l-12.303 7.123c-.335.19-.744.19-1.08 0l-12.303-7.123c-.335-.193-.576-.55-.576-.935V91.758c0-.386.242-.74.576-.935l12.303-7.122c.168-.097.316-.143.504-.143v-.001z" fill="#404137"/><path d="M148.714 52.402a4.31 4.31 0 0 0-2.16.576l-35.903 20.65c-1.342.774-2.158 2.265-2.158 3.813v41.443a4.3 4.3 0 0 0 2.158 3.74l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.31 4.31 0 0 0 2.159-3.741V77.44c0-1.55-.816-3.04-2.16-3.813l-35.903-20.65a4.27 4.27 0 0 0-2.16-.576zm214.7 36.983c-.143 0-.302 0-.432.07l-6.907 4.03a.84.84 0 0 0-.432.719v7.915c0 .298.173.57.432.72l6.907 3.957a.75.75 0 0 0 .79 0l6.907-3.957c.256-.147.432-.422.432-.72v-7.915c0-.298-.175-.57-.432-.72l-6.907-4.03c-.128-.076-.216-.07-.36-.07z" fill="#83cd29"/></g></svg>
                            <div className='flex items-center justify-center'>
                                <h3>
                                    NodeJs
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl shadow-[#0078d7] rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex justify-center items-center gap-5'>
                            <Image 
                                src="/assets/skills/Visual_Studio_Code_1.35_icon.svg.png" 
                                width='64px' 
                                height='64px' 
                                alt='VScode logo' 
                            />
                            <div className='flex items-center justify-center'>
                                <h3>
                                    VScode
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl shadow-[#FF3B00] rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex justify-center items-center gap-5'>
                            <Image 
                                src="/assets/skills/figma-icon.png" 
                                width='64px' 
                                height='64px' 
                                alt='Figma logo' 
                            />
                            <div className='flex items-center justify-center'>
                                <h3>
                                    Figma
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl shadow-[#0078d7] rounded-xl hover:scale-105 ease-in-out duration-200'>
                        <div className='flex justify-center items-center gap-5'>
                            <Image 
                                src="/assets/skills/Rapid.png" 
                                width='64px' 
                                height='64px' 
                                alt='Rapid logo' 
                            />
                            <div className='flex items-center justify-center'>
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
  );
};

export default Skills