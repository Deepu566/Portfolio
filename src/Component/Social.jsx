import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai"
import { FiTwitter } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineGithub } from "react-icons/ai"

const Social = (props) => {
    return (
        <div className='max-sm:text-2xl text-white' >
            <footer className='flex gap-5 text-white items-center '>
                <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <AiOutlineInstagram />
                </a>
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FiTwitter />
                </a>
                <a href="http://www.github.com" target="_blank" rel="noopener noreferrer">
                    <AiOutlineGithub />
                </a>
            </footer>

        </div >
    )
}

export default Social
