import React from 'react'

const Title = (props) => {
    return (
        <div className='relative'>
            <div className="text-white text-9xl  absolute left-0 top-8
              right-0  text-center opacity-10 font-semibold uppercase
              max-sm:text-6xl max-sm:top-16">
                {props.title2}
            </div>
            <h1 className='text-4xl pt-20 text-white font-bold text-center uppercase'>
                {props.title}
            </h1>
        </div>
    )
}

export default Title
