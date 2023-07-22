import React from 'react'
import Star from "../assets/Star.png"
import Shield from "../assets/Shield Done.png"
import Send from "../assets/Send.png"


export default function get_started() {
  return (
    <div className='bg-[#00040F] w-full h-[600px]'>
        <div className='float-right pr-[135px] pt-[200px]'>
            <div className='hover:bg-[#14101D] flex gap-4 rounded-[20px] p-[15px]'>
                <div className='bg-[#09977C] border border-[#09977C] rounded-full w-[64px] h-[64px] p-[16px]'>
                    <img src={Star} className='w-[30px] h-[30px]'/>
                </div>
                <div>
                    <p className='text-white text-[18px] font-bold'>Rewards</p>
                    <p className='text-slate-500 text-[16px]'>The best credit cards offer some tantalizing<br/> combinations of promotions and prizes</p>
                </div>
            </div>
            <div className='flex gap-4 hover:bg-[#14101D] rounded-[20px] p-[15px] '>
                <div className='bg-[#09977C] border border-[#09977C] rounded-full w-[64px] h-[64px] p-[16px]'>
                    <img src={Shield} className='w-[30px] h-[30px]'/>
                </div>
                <div>
                    <p className='text-white text-[18px] font-bold'>100% Secured</p>
                    <p className='text-slate-500 text-[16px]'>We take proactive steps make sure your<br/> information and transactions are secure.</p>
                </div>
            </div>
            <div className='hover:bg-[#14101D] flex gap-4 rounded-[20px] p-[15px]'>
                <div className='bg-[#09977C] border border-[#09977C] rounded-full w-[64px] h-[64px] p-[16px]'>
                    <img src={Send} className='w-[30px] h-[30px]'/>
                </div>
                <div>
                    <p className='text-white text-[18px] font-bold'>Balance Transfer</p>
                    <p className='text-slate-500 text-[16px]'>A balance transfer credit card can save<br/> you a lot of money in interest charges.</p>
                </div>
            </div>
        </div>
        <div className='pt-[180px] pl-[135px]'>
            <div className='text-white text-[48px] font-bold'>
                You do the business,<br/> we’ll handle the money.
            </div>
            <div className='pt-[24px] text-slate-500'>
                With the right credit card, you can improve your financial life by<br/> building credit, earning rewards and saving money. But with<br/> hundreds of credit cards on the market.
            </div>
            <div className='pt-[48px]'>
                <div className='text-[#00040E] font-bold pt-[12px] rounded-[10px] bg-[#33BBCF] w-[140px] text-center h-[50px]'>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}
