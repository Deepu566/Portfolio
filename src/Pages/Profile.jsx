import React from 'react'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js';

const Profile = () => {
    const element = useRef(null);
    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: ["I'm a Web Developer", "I'm a Freelancer", "I'm a Coder", "I'm Deepak"],
            typeSpeed: 150,
            backSpeed: 130,
            smartBackspace: true,
            showCursor: false,
            loop: true
        })
    })
    return (
        <div id='home' className=' h-screen 
            bg-[url("https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")]
    bg-no-repeat bg-fixed bg-cover bg-left-top
            flex flex-col items-center justify-center gap-4 text-[white] '>
            <h1 className='text-3xl font-semibold'> Welcome</h1>
            <h1 className='text-6xl min-h-[50px] font-extrabold' ref={element}></h1>
            <div className='text-2xl text-[#E6DDC4]'>based in Ranchi, Jharkhand.</div>
            <button className='
            border-2 border-[#FFC107] text-[#FFC107] rounded-full px-10 font-bold text-2xl py-3
            hover:bg-[#FFC107] hover:text-white transition-all
            '>Text me</button>
        </div >
    )
}

export default Profile
