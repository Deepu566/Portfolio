import React from 'react'
import Skillcard from "../Component/Skillcard"
import Title from '../Component/Title'

const Skill = () => {
    const skills = [
        {
            id: 1,
            sub: "html"
        },
        {
            id: 2,
            sub: "css"
        },
        {
            id: 3,
            sub: "js"
        },
        {
            id: 4,
            sub: "react"
        },
        {
            id: 5,
            sub: "Tailwindcss"
        },
        {
            id: 6,
            sub: "Java"
        }
    ]
    return (
        <div id='skills' className=' relative py-20 text-white bg-teal-900 px-24'>
            <Title title={"Skills"} title2={"Skill"} />
            <div className='flex flex-wrap mt-32 gap-20 justify-center items-center'>
                {
                    skills.map(skill => (
                        <Skillcard key={skill.id} skill={skill} />
                    ))

                }
            </div>
        </div >
    )
}

export default Skill