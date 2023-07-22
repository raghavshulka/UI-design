import React from 'react'
import Google from "../assets/Group.png"
import Apple from "../assets/Group 481724.png"
import Basketball from "../assets/dribbble-seeklogo.com 1.png"
import Netflix from "../assets/Netflix-Logo.wine.png"
import Vector from "../assets/Vector.png"
import Red from "../assets/Polygon 2.png"
import Green from "../assets/Polygon 4.png"
import Paypal from "../assets/Group 481723.png"
import Tick from "../assets/Tick.png"

export default function payment() {
  return (
    <div className='bg-[#00040F] w-full h-[650px]'>
        <div className='float-right pt-[200px] pr-[145px]'>
            <div className='text-white font-bold text-[48px]'>
                Easily control your<br/> billing & invoicing.
            </div>
            <div className='text-slate-500 pt-[24px]'>
                Elit enim sed massa etiam. Mauris eu adipiscing<br/> ultrices ametodio aenean neque. Fusce ipsum orci<br/> rhoncus aliporttitor integer platea placerat.
            </div>
            <div className='flex gap-[42px] pt-[49px]'>
                <img src={Google}/>
                <img src={Apple}/>
            </div>
        </div>
        <div className='pl-[135px] relative pt-[270px]'>
            <div className='bg-[#14101D] h-[330px] w-[335px] rounded-[10px]'>
                <div className='text-white text-[22px] font-bold  pt-[26px] pl-[20px]'>
                    Last transaction
                </div>
                <div className='pl-[20px] flex justify-between'>
                    <div className='flex gap-3 pt-[32px]'>
                        <div>
                            <img src={Basketball}/>
                        </div>
                        <div>
                            <p className='text-white'>Dribble Pro</p>
                            <p className='text-slate-500'>15 Days Ago</p>
                        </div>
                    </div>
                    <div className='flex text-white gap-2 pt-[50px] float-right pr-[20px]'>
                        <img src={Red} className='w-[15px] h-[14px]'/>
                        <p className='text-[12px]'>-$250,93</p>
                    </div>
                </div>
                <div className='pl-[20px] flex justify-between'>
                    <div className='flex gap-3 pt-[32px]'>
                        <div className='border border-[#FDFDFE] rounded-full bg-[#FDFDFE] px-1'>
                            <img src={Netflix} className=' pt-[11px]'/>
                        </div>
                        <div>
                            <p className='text-white'>Netflix</p>
                            <p className='text-slate-500'>4 Days Ago</p>
                        </div>
                    </div>
                    <div className='flex text-white gap-2 pt-[50px] float-right pr-[20px]'>
                        <img src={Red} className='w-[15px] h-[14px]'/>
                        <p className='text-[12px]'>-$250,93</p>
                    </div>
                </div>
                <div className='pl-[20px] flex justify-between'>
                    <div className='flex gap-3 pt-[32px]'>
                        <div className='border border-[#DFFFF0] rounded-full bg-[#DFFFF0] px-4'>
                            <img src={Vector} className=' pt-[12px]'/>
                        </div>
                        <div>
                            <p className='text-white'>Manulife Cash</p>
                            <p className='text-slate-500'>4 Days Ago</p>
                        </div>
                    </div>
                    <div className='flex text-white gap-2 pt-[50px] pl-14 '>
                        <img src={Green} className='w-[15px] h-[14px]'/>
                        <p className='text-[12px]'>-$250,93</p>
                    </div>``
                </div>
            </div>
        </div>
        <div className='pl-[360px] absolute top-[1656px]'>
            <div className='bg-[#14101D] h-[230px] w-[240px] rounded-[10px]'>
                <div className='flex gap-[11px] pl-[20px] pt-[20px]'>
                    <div className='border border-white rounded-full bg-white px-4'>
                    <img src={Paypal} className='pt-[12px]'/>
                    </div>
                    <div>
                        <p className='text-white text-[24px] font-bold'>Paypal</p>
                        <p className='text-slate-500'>Checkout</p>
                    </div>
                </div>
                <div className='flex gap-20 pt-[24px]'>
                    <div className='pl-[20px]'>
                        <p className='text-slate-500'>Total</p>
                        <p className='text-white text-[20px]'>$210</p>
                    </div>
                    <div className='pt-2'>
                        <div className='text-[#33BBCF] font-bold border border-[#33BBCF] w-[70px] h-[34px] rounded-md'>
                            <button className='pl-[7px] pt-[4px]'>Change</button>
                        </div>
                    </div>
                </div>
                <div className='pt-[19px] pl-[20px]'>
                    <button className='bg-[#33BBCF] font-bold rounded-xl px-[47px] py-[7px]'>Make Payment</button>
                </div>
            </div>
        </div>
        <div className='pl-[341px] absolute top-[2125px]'>
            <div className='bg-white w-[324px] h-[54px] rounded-[10px]'>
                <div className=' flex gap-[10px] pl-[20px] pt-[15px]'>
                    <img src={Tick} className='h-[24px] w-[24px]'/>
                    <p>Great! Your Payment is succesfully.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
