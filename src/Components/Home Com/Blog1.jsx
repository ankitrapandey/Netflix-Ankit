import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Blog1 = () => {
   const{id}=useParams()
    const [event, setEvent]=useState([])
    
    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(response=>{
        setEvent(response.data)
       })
       .catch(error=>{
        console.error("catch the fetching error",error)
       })
    },[id])
  return (
   <>
   <div className='grid grid-cols-3 h-[100vh] w-full mt-6 px-10'>
    <div className='mt-5 w-[35vw] h-[45vh]  border-4 rounded-2xl border-pink-400 bg-gray-800'>
        <h1 className=' text-2xl pt-5 text-red-400 text-center'>Id:{event.id}</h1>

        <h2 className='text-xl pt-2 text-white pl-[2rem]'> body:{event.body}</h2>
        <Link to={'/backprevioussection'}>
        <button className='bg-sky-950 rounded text-1xl w-[15vw] text-white h-[2rem] mt-10 ml-[7rem]'>Back-previous-section</button>
        </Link>  
    </div>
   </div>
   </>
  )
}

export default Blog1
