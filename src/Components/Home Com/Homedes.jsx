import React from 'react'
import Homenav from './Homenav'
import { Link } from 'react-router-dom'

export default function Homedes() {
    return (
        <>
            <div className='bg-[url("https://i.redd.it/zjgs096khv591.jpg")] h-[100vh] w-full lg:h-[100vh] lg:w-full bg-no-repeat bg-cover bg-center'>
                <Homenav />
                <div className='flex justify-center items-center mt-[9rem]'>
                    <div>
                        <h1 className='text-white text-center font-bold text-[2rem] sm:text-[2rem] lg:text-5xl  '>Unlimited movies, TV shows and more</h1>
                        <p className='text-gray-100 text-center text-[1.125rem] sm:text-[2rem] lg:text-2xl p-2'>Watch anywhere. Cancel anytime.</p>
                        <h4 className='text-gray-50 text-[1.125rem] lg:text-2xl text-center pb-3'>Ready to watch? Enter your email to create or restart your membership.</h4>
                        <div className='text-center'>
                            <input placeholder='Enter E-mail address' type='text' className=' w-[280px] h-[40px] lg:w-[440px] lg:h-[40px] font-semibold  lg:px-2 rounded-md border-2 solid [white] bg-transparent text-gray-50 py-3' />

                            <Link to={'/movie'}>
                                <button className='bg-[rgb(229,9,20)] text-white h-[5vh] w-[26vw] lg:h-[6vh] lg:w-[12vw] sm:w-[10vw] md:w-[10vw] rounded-md mt-[1rem] mx-4 text-2xl font-extrabold '>Get Started <i class="fa-solid fa-chevron-right"></i></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}