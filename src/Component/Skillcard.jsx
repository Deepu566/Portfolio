import React from 'react'

const Skillcard = ({ skill }) => {
    return (
        <div>
            <div className={`skill-circle w-[160px] h-[160px] rounded-full `}>
                <div className='h-[120px]  w-full flex items-center justify-center'>
                    <img
                        src={require(`../utilities/${skill.sub}.png`)}
                        alt="name"
                        className='cursor-pointer h-36'
                    />
                </div>
            </div>
        </div>
    )
}

export default Skillcard
