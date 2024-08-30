import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-3xl sm:text-5xl lg:text-5xl text-center my-8 tracking-wider'>
                What Our Clients Are Saying
            </h2>
            <div className='flex flex-wrap'>
            {testimonials.map((test, index) => (
          <div key={index} className='w-full sm:w1/2 lg:w-1/3 p-3'>
            <div className='p-8 border border-neutral-700 rounded-xl bg-neutral-900'>
              <p className='text-lg text-neutral-300'>
                {test.text}
              </p>
              <div className='flex mt-4'>
                <img  className='h-10 w-10 mr-2 rounded-full border border-neutral-300'src={test.image}  style={{ objectFit: 'cover' }}/>
             
                <div className='ml-3'>
                    <p className='text-neutral-300'> {test.user}</p>
                    <span className='text-neutral-600 italic'>{test.company}</span>
                </div>
                </div>
            </div>
           
          </div>
        ))}
            </div>

        </div>
    )
}

export default Testimonials