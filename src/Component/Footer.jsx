import React from 'react'
import Social from "../Component/Social"

const Footer = () => {
    return (
        <div>
            <footer class="text-center text-white">
                <div class="container pt-9">
                    <div class="flex justify-center mb-9">
                        <Social />
                    </div>
                </div>

                <div class="text-center text-gray-700 p-4">
                    © 2021 Copyright:
                    <a class="text-gray-800" href="https://tailwind-elements.com/">Tailwind Elements</a>
                </div>
            </footer >

        </div >
    )
}

export default Footer
