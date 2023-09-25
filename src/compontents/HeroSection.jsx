"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';





const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-8 place-self-center text-center sm:text-left '>
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:text-8xl lg:leading-normal font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-l from-sky-700 via-cyan-500 to-emerald-300'> Hello, I'm {""}</span>
                        <br />
                        <div className='text-transparent bg-clip-text bg-gradient-to-l from-teal-200 via-cyan-300 to-teal-800 '>
                        <TypeAnimation 
                            sequence={[
                            
                                'Emiliano Perea',
                                1000, 
                                'Web Developer',
                                1000,
                                'Front End',
                                1000,
                                'Responsive Design',
                                1000,                            
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                        </div>
                       
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut, temporibus sapiente reiciendis architecto libero numquam repellendus</p>
                    <div>
                        <button className='px-6 py-3  w-full sm:w-fit rounded-full mr-4 bg-gradient-to-l from-sky-300 via-cyan-400 to-emerald-200 hover:bg-slate-200  text-white'>Hire me</button>
                        <button className='px-1 py-1 w-full  sm:w-fit rounded-full bg-gradient-to-l from-sky-300 via-cyan-400 to-emerald-200 hover:bg-slate-800 text-white  mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
                    </div>
                </div>
                <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
                        <Image src="/images/Emi definitivo.png"
                            alt="Emiliano.png"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={400}
                            height={400} />
                    </div>

                </div>
            </div>
        </section>

    )
}

export default HeroSection