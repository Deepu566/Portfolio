import React from 'react'
import NavContent from '../Component/NavContent'
import Social from '../Component/Social'
import Dp from "../utilities/Dp.jpg"

const Sidebar = () => {
    return (
        <div className='h-screen  fixed w-[20%] text-[#BBE1FA] bg-[#06090a] flex flex-col justify-around items-center pt-16'>
            <header className='flex flex-col items-center '>
                <div className='h-44 w-44 rounded-full mb-5 '>
                    <img className='w-full h-full object-cover border-3 border-green-500 overflow-hidden rounded-full' src={Dp} alt="" />
                </div>
                <h1 className='text-2xl font-medium'>
                    Deepak Kumar
                </h1>
            </header>
            <NavContent />
            <Social />
        </div>
    )
}

export default Sidebar
