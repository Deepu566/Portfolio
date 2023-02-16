import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import NavContent from './NavContent'
import Social from './Social'

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    return (
        <div className="bg-black  h-20 w-full fixed top-0 z-50 flex px-2 justify-between items-center text-gray-200
        sm:hidden">
            <div>
                <h1 className='text-3xl font-bold'>Deepak </h1>
            </div>
            <div className='flex gap-5 items-center '>
                <Social />
                {
                    !openNav ?
                        <GiHamburgerMenu onClick={() => setOpenNav(!openNav)} className='text-4xl' />
                        :
                        <AiOutlineClose onClick={() => setOpenNav(!openNav)} className='text-4xl' />
                }
            </div>
            {
                openNav &&
                <div className='absolute px-10 py-6 rounded-md opacity-90 bg-black w-screen top-20'>
                    <NavContent />
                </div>
            }

        </div>
    )
}

export default Navbar
