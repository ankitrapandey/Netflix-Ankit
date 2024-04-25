import React from 'react'

export default function Middelsec1() {
  return (
      <>
          <div className='lg:w-full lg:h-[100vh] w-full bg-black lg:flex justify-center items-center px-4 text-center border-y-2 border-grey-100'>
              <div className='h-[120px] w-[500px] px-2 mb-[5rem] text-left'>
                  <h1 className='text-white font-bold lg:text-[60px] text-[1.5rem] pt-3'>Enjoy on your TV</h1>
                 <p className='text-white font-semibold lg:text-[20px] text-[0.7rem] '>Watch on smart TVs, PlayStation, Xbox,<br/>
                  Chromecast, Apple TV, Blu-ray players and more.</p> 
              </div>
              <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' className='lg:w-[570px] lg:h-[430px] w-[200vw] h-[300px] object-cover lg:mt-10'/>
              
          </div>
      </>
  )
}