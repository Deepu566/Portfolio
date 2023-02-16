import React from 'react'
import Title from '../Component/Title'

const GetinTouch = () => {
    return (
        <div className='py-20 bg-teal-900'>
            <Title title={"Get in Touch"} title2={"Contact"} />
            <form action="" id="contact">
                <div className='px-16 flex flex-col  gap-5
                max-sm:px-3'>
                    <h1 className='self-start font-bold text-3xl text-white mt-20'>Send me a Messege</h1>
                    <div className='flex gap-8 text-lg max-sm:flex-col'>
                        <input className='get-in-touch-input'
                            type="text" name='firstName' placeholder='First name' />
                        <input className='get-in-touch-input'
                            type="text" name='lastName' placeholder='Last name' />
                    </div>
                    <div className='flex gap-8 text-lg max-sm:flex-col'>
                        <input className='get-in-touch-input'
                            type="text" name='email' placeholder='Email' />
                        <input className='get-in-touch-input'
                            type="text" name='mobile' placeholder='Mobile' />
                    </div>
                    <div className=''>
                        <textarea className='get-in-touch-input w-full max-sm:h-32'
                            name="message" id="" cols="30" rows="10" placeholder='Tell me about you...'></textarea>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='rounded-full px-24 py-3 mt-6
                     bg-[#FFC107]
                     text-white font-bold'>Send
                    </button>
                </div>

            </form>
        </div>
    )
}

export default GetinTouch
