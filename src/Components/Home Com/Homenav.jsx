import React, { useEffect } from 'react'

export default function Homenav() {

    const handleLogin = () => {
        const CLIENT_ID = "65173918924-8q5evvs1uv777rhdbd79kv1qjbfikto0.apps.googleusercontent.com";
        const REDIRECT_URL = "http://localhost:3000";
        const SCOPE = "https://www.googleapis.com/auth/gmail.readonly";
        const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
        window.location.href = AUTH_URL;
    }
    return (
        <>
            <div className='w-[9rem] h-[3rem] lg:w-full lg:h-[80px] bg-transparent flex justify-between items-center  lg:px-[90px] py-8 lg:py-3'>
                <img src='https://seeklogo.com/images/N/netflix-logo-0BC9BFB255-seeklogo.com.png' className='h-[44px] pl-9 w-[14rem] font-bold ' />
                <div className='flex gap-4 lg:flex lg:gap-4'>
                    <select name="" id="" className='bg-transparent text-white w-24 rounded-md border-[white] h-8xl font-bold'>
                        <option value="" className='bg-transparent'>English</option>
                        <option value="" className='bg-transparent'>Hindi</option>
                    </select>

                    <button onClick={() => handleLogin()} className='bg-red-600 rounded-md text-1xl  w-[80px] text-white h-7'>Sing In</button>

                </div>
            </div>
        </>
    )
}