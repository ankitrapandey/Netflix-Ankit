import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    const [data, Setdata] = useState([]);
    const [get, Getdata] = useState(3);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                Setdata(response.data);
            })
            .catch(error => {
                console.error("error fetching data", error)
            })
    }, [])
    const showmore = () => {
        Getdata(get + 1)
    }
    return (
        <>
            <div className='grid grid-cols-3 h-[100vh] w-full mt-6 px-10'>
                {data.slice(0, get).map((value, index) =>

                    <div key={index} className='mt-5 w-[27vw] h-[40vh] border-4 rounded-2xl  bg-teal-500 border-gray-800'>
                        <h1 className=' text-3xl text-white text-center pt-3'>Id:{value.id}</h1>
                        <h2 className='text-2xl text-zinc-800 text-center'> title:{value.title}</h2>

                        <Link to={`/Blogsgallery/${value.id}`}>
                            <button className='bg-sky-950 rounded-md text-1xl w-[15vw] text-white h-7 mt-8 ml-[5rem]'>show Result</button>
                        </Link>
                    </div>
                )}
                <button onClick={() => showmore()} className='bg-gray-700 rounded-md text-1xl w-[15vw] text-white h-7 mt-10 ml-6'>show More</button>

            </div>
        </>
    )
}

export default Blog
