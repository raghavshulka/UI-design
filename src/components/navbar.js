import React, { useState } from 'react'
import Hoobar from "../assets/Group 481747.png"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {
    const [toggle,setToggle] = useState(false);

    return (
    <div className=' text-white bg-[#00040F] w-full h-[60px] '>
        <div className='flex justify-between pt-7 px-[135px]'>
            <div className='flex text-[18px] gap-[4px]'>
                <img src={Hoobar}/>
                <p>Hoo<span className='text-[#5CE1E6]'>Bank</span></p>
            </div>
            {
                toggle ?
                        <AiOutlineClose onClick={()=>setToggle(!toggle)} className='md:hidden text-white text-[25px]'/>
                :
                        <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='md:hidden text-white text-[25px]'/>
            }
            <div className='hidden md:inline-flex gap-14'>
                <div>
                    Home
                </div>
                <div>
                    About Us
                </div>
                <div>
                    Features
                </div>
                <div>
                    Solution
                </div>
            </div>
            <div className={toggle ? 'md:hidden term() w-full h-screen text-white fixed bg-black top-[92px] left-0' : 'hidden'}>
                <div className='p-5'>
                    Home
                </div>
                <div className='p-5'>
                    About Us
                </div>
                <div className='p-5'>
                    Features
                </div>
                <div className='p-5'>
                    Solution
                </div>
            </div>
        </div>
    </div>
  )
}
