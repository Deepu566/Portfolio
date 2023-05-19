import React, { useState } from 'react'
import "../index.css"
import Title from '../Component/Title'
import { app, db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

const GetinTouch = () => {
    const [showForm, setShowForm] = useState(false)

    const informationRef = collection(db, 'information')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const details = {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            email: e.target[2].value,
            mobile: e.target[3].value,
            messege: e.target[4].value
        }
        await addDoc(informationRef, details)
        setShowForm(false)
    }
    console.log(showForm)
    return (
        <div className='py-20 bg-teal-900'>
            <Title title={"Get in Touch"} title2={"Contact"} />

            {showForm ?
                (<form id="contact" onSubmit={handleSubmit}>
                    <div className='px-16 flex flex-col  gap-5
            max-sm:px-3'>
                        <h1 className='self-start font-bold text-3xl text-white mt-20'>Send me a Messege</h1>
                        <div className='flex gap-8 text-lg max-sm:flex-col'>
                            <input className='get-in-touch-input'
                                type="text" name='firstName' placeholder='First name' required />
                            <input className='get-in-touch-input'
                                type="text" name='lastName' placeholder='Last name' />
                        </div>
                        <div className='flex gap-8 text-lg max-sm:flex-col'>
                            <input className='get-in-touch-input'
                                type="email" name='email' placeholder='Email' required />
                            <input className='get-in-touch-input'
                                type="number" name='mobile' placeholder='Mobile' required />
                        </div>
                        <div className=''>
                            <textarea className='get-in-touch-input w-full max-sm:h-32'
                                name="message" id="" cols="30" rows="10" placeholder='Tell me about you...' required></textarea>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='rounded-full px-24 py-3 mt-6
                 bg-[#FFC107]
                 text-white font-bold'>Send
                        </button>
                    </div>
                </form>)
                :
                (
                    <div className='text-white flex flex-col gap-10  py-32'>
                        <h1 className='text-4xl text-center'>Thank you for your response</h1>
                        <h1 className='text-2xl text-center'>Your details has been succesfully sent</h1>
                        <button className='px-3 py-4 font-bold bg-black rounded-lg' onClick={() => setShowForm(!showForm)}>Send another Response</button>
                    </div>
                )
            }
        </div>
    )
}

export default GetinTouch
