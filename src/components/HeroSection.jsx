import React from 'react'
import video2 from '../assets/video2.mp4'
import video1 from '../assets/video1.mp4'
const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h3 className='text-1xl sm:text-6xl lg:text-6xl text-center tracking-wide text-neutral-100'>
                Empowering Developers for
                <span className='bg-gradient-to-r from-red-500 to-orange-500  text-transparent bg-clip-text'>
                    {" "}   Virtual Innovation

                </span>
            </h3>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                Empowering your business with cutting-edge virtual software solutions designed to enhance remote collaboration and productivity. From seamless communication tools to robust project management, our innovative technology ensures your team stays connected.
            </p>
            <div className="flex justify-center my-10">
                <a href="" className='bg-gradient-to-r from-red-500 to-orange-500 py-3 px-4 rounded-md '>Start for free</a>
                <a href="" className='mx-3 py-3 px-4 rounded-md border '>Documentation</a>
            </div>
            <div className='flex mt-10 justify-center '>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4' src={video2} typeof='video/mp4'/>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4' src={video1} typeof='video/mp4'/>
            </div>
        </div>
    )
}

export default HeroSection

