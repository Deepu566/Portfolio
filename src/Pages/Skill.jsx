import React from 'react'
import Skillcard from "../Component/Skillcard"
import Title from '../Component/Title'

const Skill = () => {
    const skills = [
        "html",
        "css",
        "js",
        "react",
        "Tailwindcss",
        "Java",
    ]
    return (
        <div id='skills' className=' relative py-20 text-white bg-teal-900 px-24'>
            <Title title={"Skills"} title2={"Skill"} />
            <div className='flex flex-wrap mt-32 gap-20 justify-center items-center'>
                {
                    skills.map(skill => (
                        <Skillcard skill={skill} />
                    ))

                }
            </div>
        </div >
    )
}

export default Skill