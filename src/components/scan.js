import React from 'react'
import Down from "../assets/Down.png"
import Graph from "../assets/Graph.png"
import Coordinate from "../assets/Graph 1.png"
import Scan from "../assets/Scan.png"
import Paypal from "../assets/Group 481723.png"
import Apple from "../assets/apple (1) 1.png"
import Visa from "../assets/visa (2) 1.png"
import Shopify from "../assets/Shopify-Logo.wine 1.png"

export default function scan() {
  return (
    <div className='bg-[#00040F] w-full h-[650px]'>
        
            <div className='relative float-right pr-[202px] pt-[160px]'>
                <div className='border-[8px] border-[#33BBCF] rounded-full h-[381px] w-[381px]'>
                    <div className='flex justify-center pt-[55px]'>
                        <div className='border-[4px] border-[#33BBCF] rounded-full w-[253px] h-[253px]'>
                            <div className='flex justify-center pt-[55px]'>
                                <div className='border-[4px] border-[#33BBCF] rounded-full w-[124px] h-[124px]'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-[2400px] left-[870px]'>
                <div className='bg-[#14101D] w-[256px] h-[245px] rounded-lg'>
                    <div className='flex justify-between pt-[20px]'>
                        <div className='text-white font-[16px] pl-[20px]'>
                            Online Ananlysis
                        </div>
                        <div className='flex gap-[6px] pr-[26px] pt-[8px]'>
                            <p className='text-white text-[10px]'>1 Month</p>
                            <div className='pt-[6px]'>
                                <img src={Down} className='h-[3px] w-[5px]'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between pt-[20px] text-[12px]'>
                        <div className='text-[#00D2AA] pl-[20px]'>
                            <p>$ 2,334,67</p>
                            <p>Income</p>
                        </div>
                        <div className='text-[#00D9F5] pr-[20px]'>
                            <p>$ 5.31M </p>
                            <p>Expenses</p>
                        </div>
                    </div>
                    <div className='pt-[19px] pl-[20px]'>
                        <img src={Graph}/>
                        <img src={Coordinate} className='absolute top-[148px] left-[94px]'/>
                    </div>
                    <div className=' inline-flex gap-[8px] text-white pt-[28px] pl-[20px]'>
                        <div>Jan</div>
                        <div>Feb</div>
                        <div>Mar</div>
                        <div>Apr</div>
                        <div>May</div>
                        <div>Jun</div>
                        <div>Jul</div>
                    </div>
                </div>
            </div>
            <div className='absolute top-[2450px] left-[600px]'>
                <div className='bg-[#14101D] rounded-lg h-[165px] w-[210px]'>
                    <div className='pl-[88px] pt-[20px]'>
                        <div className='border border-[#00030C] bg-[#00030C] rounded-[10px] w-[30px]'>
                            <img src={Scan} className='p-[5px]'/>
                        </div>
                    </div>
                    <div className='pt-[16px] pl-[20px]'>
                        <p className='text-white fonr-bold text-[22px]'>Scan Credit Cards</p>
                        <p className='text-slate-500'>Scan your credit card in<br/><span className='pl-[40px]'>4 minutes.</span></p>
                    </div>
                </div>
            </div>
            <div className='absolute top-[2670px] left-[720px]'>
                <div className='bg-[#14101D] rounded-lg h-[140px] w-[262px]'>
                    <div className='flex justify-between pt-[20px] pl-[20px]'>
                        <div className='text-white text-[16px]'>
                            Pay Method
                        </div>
                        <div className='pr-[27px] pt-[10px]'>
                            <img src={Down} className=' w-[10px] h-[5px]'/>
                        </div>
                    </div>
                    <div className='inline-flex gap-[10px] pl-[20px] pt-[16px]'>
                        <div className='border border-white bg-white rounded-[10px] w-[48px] h-[48px]'>
                            <img src={Paypal} className='pt-[10px] pl-[10px]'/>
                        </div>
                        <div className='border border-white bg-white rounded-[10px] w-[48px] h-[48px]'>
                            <img src={Apple} className='pt-[10px] pl-[10px]'/>
                        </div>
                        <div className='border border-white bg-white rounded-[10px] w-[48px] h-[48px]'>
                            <img src={Visa} className='pt-[8px] pl-[5px]'/>
                        </div>
                        <div className='border border-white bg-white rounded-[10px] w-[48px] h-[48px]'>
                            <img src={Shopify} className='pt-[7px] pl-[1px]'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pl-[70px] pt-[179px]'>
                <p className='text-[48px] text-white'>Find a better card deal<br/> in few easy steps.</p>
                <p className='text-[18px] text-slate-500 pt-[24px]'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet<br/> quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <div className='pt-[48px] text-[18px] text-[#00040E] font-bold'>
                    <button className='bg-[#33BBCF] px-[33px] py-[19px] rounded-[10px]'>Get Started</button>
                </div>
            </div>
    </div>
  )
}
