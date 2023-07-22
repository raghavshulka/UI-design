import React from 'react'
import Harman from "../assets/Image.png"
import Steve from "../assets/Image (1).png"
import Konn from "../assets/Image (2).png"
import Airbnb from "../assets/Group 481734.png"
import Binance from "../assets/g18.png"
import Coinbase from "../assets/Group 481736.png"
import Dropbox from "../assets/Group 481737.png"

export default function comments() {
  return (
    <div className='bg-[#00040F] w-full h-[620px]'>
        <div className='inline-flex pl-[135px] pt-[60px]'>
            <div className=' hover:bg-[#11101D] h-[380px] w-[350px] rounded-xl'>
                <div className='pl-[40px]'>
                    <div className='text-[#33BBCF] italic w-[42px] h-[27px]'>
                        <p className='text-[120px]'>"</p>
                    </div>
                    <div className='text-slate-500 pt-[90px] text-[18px]'>
                        Money is only a tool. It will take<br/> you wherever you wish, but it<br/> will not replace you as the<br/> driver.
                    </div>
                    <div className='flex gap-[16px] pt-[29px]'>
                        <div className='h-[48px] w-[48px]'>
                            <img src={Harman}/>
                        </div>
                        <div>
                            <p className='text-white text-[20px]'>Herman Jensen</p>
                            <p className='text-slate-500'>Founder & Leader</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hover:bg-[#11101D] h-[380px] w-[350px] rounded-xl'>
                <div className='pl-[40px]'>
                    <div className='text-[#33BBCF] italic w-[42px] h-[27px]'>
                        <p className='text-[120px]'>"</p>
                    </div>
                    <div className='text-slate-500 pt-[90px] text-[18px]'>
                        Money makes your life easier. If<br/> you're lucky to have it, you're<br/> lucky.
                    </div>
                    <div className='flex gap-[16px] pt-[60px]'>
                        <div className='h-[48px] w-[48px]'>
                            <img src={Steve}/>
                        </div>
                        <div>
                            <p className='text-white text-[20px]'>Steve Mark</p>
                            <p className='text-slate-500'>Founder & Leader</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hover:bg-[#11101D] h-[380px] w-[350px] rounded-xl'>
                <div className='pl-[40px]'>
                    <div className='text-[#33BBCF] italic w-[42px] h-[27px]'>
                        <p className='text-[120px]'>"</p>
                    </div>
                    <div className='text-slate-500 pt-[90px] text-[18px]'>
                        It is usually people in the<br/> money business, finance, and<br/> international trade that are<br/> really rich.
                    </div>
                    <div className='flex gap-[16px] pt-[29px]'>
                        <div className='h-[48px] w-[48px]'>
                            <img src={Konn}/>
                        </div>
                        <div>
                            <p className='text-white text-[20px]'>Kenn Gallagher</p>
                            <p className='text-slate-500'>Founder & Leader</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='inline-flex gap-[100px] pl-[95px] pt-[100px]'>
            <div className='w-[192px] h-[60px]'>
                <img src={Airbnb}/>
            </div>
            <div className='w-[192px] h-[60px] pt-[10px]'>
                <img src={Binance}/>
            </div>
            <div className='w-[192px] h-[60px]'>
                <img src={Coinbase}/>
            </div>
            <div className='w-[192px] h-[60px] pt-[10px]'>
                <img src={Dropbox}/>
            </div>
        </div>
    </div>
  )
}