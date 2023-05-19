import React from 'react'
import Title from '../Component/Title'
import Resume from "../utilities/Resume.pdf"


const AboutMe = () => {
    return (
        <div id='about-me' className='text-white relative  flex flex-col gap-20 py-48 bg-[#212529] '>
            <Title title={"About me"} title2={"About"} />
            <section className='flex  px-8
             leading-loose h-[60%]  max-sm:flex-col'>
                <div className=' flex flex-col gap-8 
                max-sm:self-center'>
                    <h2 className='text-3xl font-bold tracking-tight
                    max-sm:text-center'>I'm
                        <span className='text-[#FFC107]'> Deepak, </span>
                        a Web Developer
                    </h2>
                    <div className='text-gray-400
                    max-sm:text-justify'>
                        <p>Hi, I'm Deepak, and I am post graduated from
                            Dr. Shyama Prasad Mukharjee University in
                            2022 with a
                            degree in Computer Application.
                            My interests are in Front End Engineering, and
                            I love to create beautiful and performant products
                            with delightful user experiences.
                        </p>
                        <br />
                        <p>I previosly worked in Concentrix Daksh services, where I was a customer service executive.
                            I used to take calls and solve queries of the customer related to their problems.
                            The reason for joining this company was to work on my communication skills and also to get a overview about a proffesional job.
                            As this was my first job I got to learn many things such as time Management, pressure handleling,
                            team leading etc.
                        </p>
                    </div>
                </div>
                <div className='w-[35%] text-gray-200 px-6 border-gray-500 
                child:border-b-[1px] child:p-3 
                max-sm:w-full'>
                    <div><span className='font-bold'>Name : </span> Deepak Kumar</div>
                    <div className='text-[#FFC107]'><span className='text-gray-200 font-bold'>Email : </span> deepu566255@gmail.com</div>
                    <div><span className='font-bold'>Age : </span> 23</div>
                    <div className='border-none'><span className='font-bold'>From : </span> Ranchi Jharkhand, India </div>
                    <div className='border-none'>
                        <button className='rounded-full px-12 py-3 mt-6 bg-[#FFC107] text-white font-bold'>
                            <a className="btn line-btn-dark btn-icon btn-radius" href={Resume} title="" download>Download Resume</a>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe
