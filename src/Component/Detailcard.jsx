import React from 'react'

const Detailcard = ({ detail }) => {
    return (
        <div className='w-96 py-10  px-10 bg-black rounded-md flex flex-col gap-3
        max-sm:w-72'>
            <div className='w-28 rounded-full py px-3 font-bold text-white bg-[#FFC107]'>{detail.session}</div>
            <h1 className='text-2xl font-semibold text-white'>{detail.course}</h1>
            <h2 className='text-lg  text-[#FFC107]'>{detail.college}</h2>
            <p className='text-gray-500 font-semibold'>{detail.desc}
            </p>
        </div>
    )
}

export default Detailcard
