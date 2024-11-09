'use client'
import React from 'react'
import Footer from '@/containers/Footer';
import Menu from '@/components/interface/menu';

export default function Home() {

  return (
    <div className="w-full">
      <div className=' '>
          <main className=''>
            <div className='flex relative bg-gradient-to-b from-[#3264EC] to-[#5D82EB] h-[calc(100vh_-_100px)] w-full'>
              <div className={`flex relative items-start`}>
                <Menu />
              </div>
              <div className='flex flex-col p-2 relative items-center w-[55%]'>
                <div className='flex flex-col w-full relative h-[250px]'></div>
                <div className='flex relative items-center w-full'>
                  <div className='flex relative ml-[50px] mr-auto flex-col'> 
                    <span className='flex relative font-aclonica text-white text-[42px]'>Study with comfort and reliability</span>
                    <span className='flex relative font-aclonica text-white text-[22px]'>Find a teacher you are comfortable with,join us</span>
                  </div>
                </div>
                <div className='flex relative ml-[50px] mr-auto w-[570px] min-w-[200px] my-3'>
                  <div className='flex rounded-lg mr-4 relative font-aclonica text-[#5D82EB] text-[22px]'>
                    <a className='flex rounded-lg p-2 cursor-pointer bg-center relative w-[150px] bg-slate-100' href='/home'>Start studying</a>
                  </div>
                  <div className='flex rounded-lg relative font-aclonica text-white text-[22px]'>
                    <a className='flex rounded-lg cursor-pointer p-2 bg-center relative w-[175px] font-aclonica border-[1px] border-slate-100' href='/catalog'>Learn more<img src='/icons/right-arrow-white.png' className='ml-2 w-[30px] h-[30px] self-center'/></a>
                  </div>
                </div>
                
              </div>
              <div className='flex absolute right-0 justify-end w-[30%] h-[calc(100vh_-_100px)]'>
                <div className='clip-img h-full overflow-hidden inline-block'>
                  <img src="/img/bg-studying-2.jpg" className='flex relative justify-end h-full clip-img w-[100%] object-cover' alt="" />
                </div>
              </div>
            </div>
          </main>
      </div>
      <Footer/>
    </div>
  );
}
