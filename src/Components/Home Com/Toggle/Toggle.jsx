import React, { useState } from 'react'
import Bitz from './Bitz';
import Normaltask from './Normaltask';

const Toggle = () => {

    const [bitz, Setbitz] = useState(true);
    const [normal, Setnormal] = useState(false);

    const bitztask = () => {
        Setbitz(true);
        Setnormal(false);
    }
    const normaltask = () => {
        Setbitz(false);
        Setnormal(true);
    }
    return (
        <>
            <div className='flex gap-2'>
                  <button className=' bg-black border border-neutral-800 text-white h-[3rem] w-[8vw]' onClick={() => bitztask()}>show bitz</button>
                  <button className=' bg-black border border-neutral-800 text-white h-[3rem] w-[10vw]' onClick={() => normaltask()}>show normaltask</button>
              
            </div>
            <div>
                {bitz && <Bitz />}
                {normal && <Normaltask />}
            </div>
        </>
    )
}

export default Toggle
