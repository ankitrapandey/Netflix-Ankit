import React, { useState } from 'react'

export default function Faq() {

    const [Visibility, setVisibility] = useState({});
    const plusVisibility = (index) => {
        setVisibility(textVisibility => ({
            ...textVisibility,
            [index]: !textVisibility[index]

        }));
    }
    return (
        <>
            <div className='w-full h-[100%] bg-black py-24 px-4'>
                <h1 className='text-white font-bold text-3xl pt-[4rem] text-center text-[50px]'>Frequently Asked Questions</h1>

                <div className='lg:ml-[17rem]'>

                    <div onClick={() => plusVisibility(0)} className='lg:w-[850px]  pt-3 h-[60px] mt-[2rem] rounded-sm text-white font-semibold text-[17px] bg-zinc-600 px-5 py-3 flex justify-between'>
                        What is Netflix?<i class={`fa-solid fa-plus pt-3 text-white font-semibold ${Visibility[0] ? 'rotate-45' : ''}`}></i>
                    </div>
                    <div className={`faq-answer lg:w-[850px] text-[18px] text-white py-3 px-4 transition-all duration-500 bg-neutral-700 ${Visibility
                    [0] ? 'block opacity-100 border border-gray-200' : 'hidden opacity-0'}`}>

                        Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                        movies, anime, documentaries and more – on thousands of internet-connected devices.

                        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.
                        There's always something new to discover, and new TV shows and movies are added every week!
                    </div>

                    <div onClick={() => plusVisibility(1)} className='lg:w-[850px]  pt-3 h-[60px] mt-[.5rem] rounded-sm text-white font-semibold text-[17px] bg-zinc-600 px-5 py-3 flex justify-between'>
                        How much does Netflix cost?<i class={`fa-solid fa-plus pt-3 text-white font-semibold ${Visibility[1] ? 'rotate-45' : ''}`}></i>
                    </div>
                    <div className={`faq-answer lg:w-[850px] text-[18px] text-white py-3 px-4 transition-all duration-500 bg-neutral-700 ${Visibility
                    [1] ? 'block opacity-100 border border-gray-200' : 'hidden opacity-0'}`}>
                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                    </div>

                    <div onClick={() => plusVisibility(2)} className='lg:w-[850px]  pt-3 h-[60px] mt-[.5rem] rounded-sm text-white font-semibold text-[17px] bg-zinc-600 px-5 py-3 flex justify-between'>
                        Where can I watch?<i class={`fa-solid fa-plus pt-3 text-white font-semibold ${Visibility[2] ? 'rotate-45' : ''}`}></i>
                    </div>
                    <div className={`faq-answer w-[850px] text-[18px] text-white py-3 px-4 transition-all duration-500 bg-neutral-700 ${Visibility
                    [2] ? 'block opacity-100 border border-gray-200' : 'hidden opacity-0'}`}>
                        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                        You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                    </div>

                    <div onClick={() => plusVisibility(3)} className='lg:w-[850px]  pt-3 h-[60px] mt-[.5rem] rounded-sm text-white font-semibold text-[17px] bg-zinc-600 px-5 py-3 flex justify-between'>
                        How do I cancel?<i class={`fa-solid fa-plus pt-3 text-white font-semibold ${Visibility[3] ? 'rotate-45' : ''}`}></i>
                    </div>
                    <div className={`faq-answer w-[850px] text-[18px] text-white py-3 px-4 transition-all duration4500 bg-neutral-700 ${Visibility
                    [3] ? 'block opacity-100 border border-gray-200' : 'hidden opacity-0'}`}>
                        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                    </div>

                    <div onClick={() => plusVisibility(4)} className='lg:w-[850px]  pt-3 h-[60px] mt-[.5rem] rounded-sm text-white font-semibold text-[17px] bg-zinc-600 px-5 py-3 flex justify-between'>
                        What Can I watch On Netflix ?<i class={`fa-solid fa-plus pt-3 text-white font-semibold ${Visibility[4] ? 'rotate-45' : ''}`}></i>
                    </div>
                    <div className={`faq-answer w-[850px] text-[18px] text-white py-3 px-4 transition-all duration-500 bg-neutral-700 ${Visibility
                    [4] ? 'block opacity-100 border border-gray-200' : 'hidden opacity-0'}`}>
                        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                    </div>

                    <div onClick={() => plusVisibility(5)} className='lg:w-[850px]  pt-3 h-[60px] mt-[.5rem] rounded-sm text-white font-semibold text-[17px] bg-zinc-600 px-5 py-3 flex justify-between'>
                        Is Netflix Good for Kids ?<i class={`fa-solid fa-plus pt-3 text-white font-semibold ${Visibility[5] ? 'rotate-45' : ''}`}></i>
                    </div>
                    <div className={`faq-answer w-[850px] text-[18px] text-white py-3 px-4 transition-all duration-500 bg-neutral-700 ${Visibility
                    [5] ? 'block opacity-100 border border-gray-200' : 'hidden opacity-0'}`}>
                        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                    </div>
                </div>

                {/* <div className='mt-8 ml-[5rem]'>
                    <h4 className='text-gray-50 text-2xl text-center pb-3'>Ready to watch? Enter your email to create or restart your membership.</h4>
                    <div className='text-center'>
                        <input placeholder='Enter E-mail address' type='text' className='w-[440px] h-[40px] font-semibold px-2 rounded-md border-2 solid [white] bg-transparent text-gray-50 py-3' />
                        <button className='bg-[rgb(229,9,20)] text-white h-[5vh] w-[10vw] rounded-md mt-[1rem] mx-4 text-2xl font-extrabold'>Get Started <i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div> */}
                <div className='mt-8 ml-[5rem]'>
                    <h4 className='text-gray-50 text-2xl text-center pb-3'>Ready to watch? Enter your email to create or restart your membership.</h4>


                    <div className='text-center grid lg:grid-cols-2  grid-cols-1'>
                        <input type='text' placeholder='Enter E-mail address' className='  lg:ml-[20rem] text-2xl w-[280px] h-[40px] lg:w-[440px]   lg:h-[40px] font-semibold  lg:px-2 rounded-md border-2 solid [white] bg-transparent tex py-3' />


                        <button className='bg-[rgb(229,9,20)] text-white h-[5vh] w-[50vw] lg:mt-0 mt-5 lg:h-[6vh] lg:w-[12vw] sm:w-[10vw]  rounded-md lg:ml-[10rem]  text-2xl font-extrabold '>Get Started <i class="fa-solid fa-chevron-right"></i></button>

                    </div>
                </div>
            </div>
        </>
    )
}
