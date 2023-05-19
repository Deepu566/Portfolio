import React from 'react'
import Title from '../Component/Title'
import Detailcard from '../Component/Detailcard'
import CV from "../utilities/Resume.pdf"

const Resume = () => {
    const education = [
        {
            id: 1,
            session: "2020-2022",
            course: "MCA",
            college: "Dr. Shyama Prasad Mukharjee University",
            desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro"
        },
        {
            id: 2,
            session: "2017-2020",
            course: "Bsc IT(Information Technology)",
            college: "Ranchi College,Ranchi",
            desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro"
        },
        {
            id: 3,
            session: "2015-2017",
            course: "Intermediate",
            college: "St. John's Inter College",
            desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro"
        }
    ]
    const experience = [
        {
            id: 1,
            session: "2021-2022",
            course: "Customer Service Exxecutive",
            college: "Concentrix Daksh Private Limited",
            desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque porro"
        }
    ]
    return (
        <div id="resume" className='px-12 py-10 bg-[#212529]'>
            <Title title={"Resume"} title2={"Resume"} />
            <div className='flex gap-10 mt-20 child:flex-1 max-sm:flex-col
            max-sm:items-center max-sm:px-20'>
                <div className='flex flex-col  gap-5'>
                    <h1 className='font-bold  text-2xl text-white'>My Education</h1>
                    <div className='flex flex-col  gap-5'>
                        {
                            education.map((ed) => (
                                <Detailcard key={ed.id} detail={ed} />
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-bold text-2xl text-white'>My Experience</h1>
                    <div className='flex flex-col gap-5'>
                        {
                            experience.map((ed) => (
                                <Detailcard key={ed.id} detail={ed} />
                            ))
                        }
                    </div>
                    <button className='rounded-full px-12 py-3 mt-6 bg-[#FFC107] text-white font-bold'>
                        <a className="btn line-btn-dark btn-icon btn-radius" href={CV} title="" download>Download Resume</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Resume
