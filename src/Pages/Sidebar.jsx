import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai"
import { FiTwitter } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineGithub } from "react-icons/ai"

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
            <section className='child:text-center child:cursor-pointer child-hover:text-[#FFC107] flex flex-col gap-6 font-medium text-lg'>
                <div>
                    <a href="#home">
                        Home
                    </a>
                </div>
                <div><a href="#about-me">About Me</a></div>
                <div>
                    <a href="#skills"> Skills</a>
                </div>
                <div>Resume</div>
                <div>Contact</div>
            </section>
            <footer className='flex gap-5 text-white items-center'>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <AiOutlineInstagram />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FiTwitter />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <AiOutlineGithub />
                </a>
            </footer>

        </div>
    )
}

export default Sidebar
