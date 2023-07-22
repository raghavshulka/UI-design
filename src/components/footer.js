import React from 'react'
import Hoobar from "../assets/Group 481747.png"
import Copyright from "../assets/copyright 1.png"
import Instagram from "../assets/Instagram.jpg"
import Twitter from "../assets/Twitter.png"
import Linkedin from "../assets/Linkedin.png"
import Facebook from "../assets/Facebook.png"

export default function footer() {
  return (
    <div className='h-[380px] w-full bg-[#0B0A0C]'>
        <div className='inline-flex gap-[140px] border-b-2 border-[#3F3E45] pb-[40px] ml-[135px] pt-[72px]'>
            <div>
                <div className='flex gap-[9px]'>
                    <img src={Hoobar} className='w-[72px] h-[72px]'/>
                    <p className='text-white text-[40px]'>Hoo<span className='text-[#5CE1E6]'>Bank</span></p>
                </div>
                <div className='text-slate-500 pt-[30px]'>
                    A new way to make the payments<br/> easy, reliable and secure.
                </div>
            </div>
            <div>
                <div className='text-white text-[18px]'>
                    Usefull Links
                </div>
                <div className='text-slate-500 pt-[24px]'>
                    <div>
                        Content
                    </div>
                    <div>
                        How it Works
                    </div>
                    <div>
                        Create
                    </div>
                    <div>
                        Explore
                    </div>
                    <div>
                        Terms & Services
                    </div>
                </div>
            </div>
            <div>
                <div className='text-white text-[18px]'>
                    Community
                </div>
                <div className='text-slate-500 pt-[24px]'>
                    <div>
                        Help Center
                    </div>
                    <div>
                        Partners
                    </div>
                    <div>
                        Suggestions
                    </div>
                    <div>
                        Blog
                    </div>
                    <div>
                        Newsletters
                    </div>
                </div>
            </div>
            <div>
                <div className='text-white text-[18px]'>
                    Partner
                </div>
                <div className='text-slate-500 pt-[24px]'>
                    <div>
                        Our Partner
                    </div>
                    <div>
                        Become a Partner
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-between pl-[130px] pt-[30px]'>
            <div className='inline-flex text-[18px] text-slate-500 gap-[10px]'>
                <div>
                    Copyright
                </div>
                <div className='pt-[7px]'>
                    <img src={Copyright}/>
                </div>
                <div>
                    2021 HooBank. All Rights Reserved.
                </div>
            </div>
            <div className='inline-flex gap-[30px] pr-[140px]'>
                <div>
                    <img src={Instagram} className='h-[21px] w-[21px]'/>
                </div>
                <div>
                    <img src={Facebook}/>
                </div>
                <div>
                    <img src={Twitter}/>
                </div>
                <div>
                    <img src={Linkedin}/>
                </div>
            </div>
        </div>
    </div>
  )
}
