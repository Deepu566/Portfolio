import React from 'react'
import { FaLinkedinIn } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineGithub } from "react-icons/ai"

const Social = (props) => {
    return (
        <div className='max-sm:text-2xl text-white' >
            <footer className='flex gap-5 text-white items-center '>
                <a href="https://www.instagram.com/deepu5439/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100018032026012" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FiTwitter />
                </a>
                <a href="https://github.com/Deepu566" target="_blank" rel="noopener noreferrer">
                    <AiOutlineGithub />
                </a>
            </footer>

        </div >
    )
}

export default Social
