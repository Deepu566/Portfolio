import React from 'react'
import { AiFillHtml5 } from "react-icons/ai"
import { DiReact } from "react-icons/di"
import { DiJavascript1 } from "react-icons/di"
import { TfiCss3 } from "react-icons/tfi"
import Title from '../Component/Title'
import Resume from "../utilities/Resume.pdf"


const AboutMe = () => {
    return (
        <div id='about-me' className='text-white relative  flex flex-col gap-20 py-20 bg-[#212529] '>
            <Title title={"About me"} title2={"About"} />
            <section className='flex leading-loose h-[60%] px-12'>
                <div className='w-[65%] flex flex-col gap-8'>
                    <h2 className='text-3xl font-bold tracking-tight'>I'm
                        <span className='text-[#FFC107]'> Deepak, </span>
                        a Web Developer
                    </h2>
                    <div className='text-gray-400'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Quo officia modi cum incidunt blanditiis quae ducimus,
                            nihil culpa obcaecati sed! Quisquam rerum hic quidem
                            quas quos corporis ipsa, qui commodi?
                        </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Ipsum officia vero mollitia repellendus rerum atque sed,
                            perferendis repellat accusantium delectus alias facilis
                            cum ipsam corrupti. Alias esse ad omnis reiciendis.
                        </p>
                    </div>
                </div>
                <div className='w-[35%] text-gray-200 px-6 border-gray-500 
                child:border-b-[1px] child:p-3 '>
                    <div><span className='font-bold'>Name : </span> Deepak Kumar</div>
                    <div className='text-[#FFC107]'><span className='text-gray-200 font-bold'>Email : </span> deepu566255@gmail.com</div>
                    <div><span className='font-bold'>Age : </span> 23</div>
                    <div className='border-none'><span className='font-bold'>From : </span> Ranchi Jharkhand, India </div>
                    <div className='border-none'>
                        <button className='rounded-full px-12 py-3 mt-6 bg-[#FFC107] text-white font-bold'>
                            <a class="btn line-btn-dark btn-icon btn-radius" href={Resume} title="" download>Download CV</a>
                        </button>
                    </div>
                </div>
            </section>
            <footer className=" mt-6 text-[gray] text-9xl flex child:flex-1 child:border-r border-gray-500">
                <AiFillHtml5 className='text-blue-700' />
                <TfiCss3 />
                <DiJavascript1 />
                <DiReact />
            </footer>
        </div>
    )
}

export default AboutMe
