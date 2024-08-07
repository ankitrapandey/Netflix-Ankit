import React from 'react'
import Homenav from './Homenav'
import { Link } from 'react-router-dom'

export default function Homedes() {
    return (
        <>
            <div className='bg-[url("https://i.redd.it/zjgs096khv591.jpg")] w-full h-[100vh] lg:w-full  lg:bg-no-repeat bg-cover bg-center'>
                <Homenav />
                <div className='flex justify-center items-center mt-[9rem]'>
                    <div>
                        <h1 className='text-white text-center font-bold text-[2.5rem] sm:text-[2rem] lg:text-5xl  '>Unlimited movies, TV shows and more</h1>
                        <p className='text-gray-100 text-center text-[1.5rem] sm:text-[2rem] lg:text-2xl p-2'>Watch anywhere. Cancel anytime.</p>
                        <h4 className='text-gray-50 text-[1.125rem] lg:text-2xl text-center pb-3'>Ready to watch? Enter your email to create or restart your membership.</h4>
                        <div className='text-center grid lg:grid-cols-2  grid-cols-1'>
                            <input type='text'  placeholder='Enter E-mail address' className=' text-2xl w-[280px] h-[40px] lg:w-[440px] lg:ml-0 ml-20 lg:h-[40px] font-semibold  lg:px-2 rounded-md border-2 solid [white] bg-transparent tex py-3' />

                            <Link to={'/movie'}>
                                <button className='bg-[rgb(229,9,20)] text-white h-[5vh] w-[50vw] lg:mt-0 mt-3 lg:h-[6vh] lg:w-[12vw] sm:w-[10vw]  rounded-md lg:mr-[15rem] text-2xl font-extrabold '>Get Started <i class="fa-solid fa-chevron-right"></i></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}