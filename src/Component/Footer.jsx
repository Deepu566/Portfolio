import React from 'react'
import Social from "../Component/Social"

const Footer = () => {
    return (
        <div>
            <footer className="text-center bg-black text-white">
                <div className="container pt-9">
                    <div className="flex justify-center mb-9">
                        <Social />
                    </div>
                </div>
                <div className="text-center text-gray-700 p-4">
                    © 2021 Copyright:
                    <a className="text-gray-800" href="">lorem lorem</a>
                </div>
            </footer >
        </div >
    )
}

export default Footer
