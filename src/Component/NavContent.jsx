import React from 'react'

const NavContent = () => {
    return (
        <section className='child:text-center max-sm:child:text-start child:cursor-pointer child-hover:text-[#FFC107]
         flex flex-col gap-6 font-medium text-lg'>
            <div>
                <a href="#home">
                    Home
                </a>
            </div>
            <div><a href="#about-me">About Me</a></div>
            <div>
                <a href="#skills"> Skills</a>
            </div>
            <div>
                <a href="#resume"> Resume</a>
            </div>
            <div>
                <a href="#contact">Contact</a>
            </div>
        </section>

    )
}

export default NavContent
