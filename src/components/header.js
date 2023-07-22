import React from 'react'
import Robot from "../assets/Group 481777.png"
import Discount from "../assets/Discount.png"
import Arrow from "../assets/Arrow - Up.png"

export default function header() {
  return (
    <div className='bg-[#00040F] w-full h-[900px]'>
        <div  className='w-[669px] h-[674px] float-right pt-[70px]'>
            <img src={Robot}/>
        </div>
        <div className='pt-[195px]'>
            <div className='flex gap-4 text-white text-[16px] h-[32px] top-48'>
                <img src={Discount} className='pl-[145px] flex'/>
                <p className=''>20% <span className='text-slate-500'>DISCOUNT FOR</span> 1 MONTH <span className='text-slate-500'>ACCOUNT</span></p>
            </div>
            <div className='text-[#FFFFFF] text-[55px] pl-[135px] pt-[19px]'>
                <div className='float-right text-[#33BBCF] border rounded-full w-[140px] h-[140px] border-[#33BBCF] text-[18px] pt-[24px]'>
                    <div className='pl-[35px] pt-[20px]'>
                        <div className='flex gap-2'>
                            <p>Get</p>
                            <img src={Arrow} className='w-[12px] h-[15px]'/>
                        </div>
                        <div>
                            Started
                            </div>
                    </div>
                </div>
                The Next<br/><span className='text-[#33BBCF]'>Generation</span><br/>Payment Method.
            </div>
            <div className='text-slate-500 pl-[136px] pt-[40px]'>
                Our team of experts uses a methodology to identify<br/> the credit cards most likely to fit your needs.<br/> We examine annual percentage rates, annual fees.
            </div>
        </div>
        <div className='inline-flex text-white pt-[143px] px-[100px]'>
            <div className='gap-[25px] pr-[51px] text-[40px]'>
                3800+ <span className='text-[#33BBCF] text-[20px]'>USER ACTIVE</span>
            </div>
            <div className='gap-[25px] border-l-2 border-slate-500 px-[51px] text-[40px]'>
                230+ <span className='text-[#33BBCF] text-[20px]'>TRUSTED BY COMPANY</span>
            </div>
            <div className='gap-[25px] border-l-2 border-slate-500 pl-[51px] text-[40px]'>
                $230M+ <span className='text-[#33BBCF] text-[20px]'>TRANSACTION</span>
            </div>
        </div>
    </div>
  )
}
