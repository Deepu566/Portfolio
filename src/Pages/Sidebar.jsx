import React from 'react'
import NavContent from '../Component/NavContent'
import Social from '../Component/Social'

const Sidebar = () => {
    return (
        <div className='h-screen  fixed w-[20%] text-[#BBE1FA] bg-[#06090a] flex flex-col justify-around items-center pt-16'>
            <header className='flex flex-col items-center '>
                <div className='h-44 w-44 rounded-full border-white border-3'>
                    <img className='w-full h-full object-cover overflow-hidden rounded-full' src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
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
