import React from 'react'
import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
import Button from '@/components/Button';

export default function Home() {
  return (
    <body className="w-full">
      <div className=' '>
          <main className=''>
            <div className='flex relative bg-gradient-to-b from-[#3264EC] to-[#5D82EB] h-[calc(100vh_-_100px)] w-full'>
              <div className='grid grid-rows-[repeat(8,100px)] grid-cols-[100px_repeat(5,150px)] p-2 relative items-center w-[60%]'>
                <span className='row-start-3 min-w-[400px] row-end-4 col-start-2 col-end-8 relative font-aclonica items-center text-white text-[42px]'>Study with comfort and reliability</span>
                <span className='self-start min-w-[230px] row-start-4 row-end-5 col-start-2 col-end-8 relative font-aclonica text-white text-[22px]'>Find a teacher you are comfortable with,join us</span>
                <div className='grid row-start-5 row-end-6 col-start-2 self-start rounded-lg  col-end-3 relative font-aclonica whitespace-nowrap text-[#5D82EB] text-[22px]'>
                  <button className=' rounded-lg p-2 bg-center relative w-[150px] bg-slate-100'>Start studying</button>
                </div>
                <div className='grid row-start-5 ml-4 row-end-6 col-start-3 col-end-5 justify-self-start self-start rounded-lg relative font-aclonica whitespace-nowrap text-white text-[22px]'>
                  <button className='flex rounded-lg p-2 bg-center relative w-[175px] font-aclonica border-[1px] border-slate-100'>Learn more<img src='/icons/right-arrow-white.png' className='ml-2 w-[30px] h-[30px] self-center'/></button>
                </div>
                
              </div>
              <div className='flex absolute right-0 justify-end w-[40%] h-[calc(100vh_-_100px)]'>
                <img src="/img/bg-studying-2.jpg" className='flex relative justify-end clip-img w-[100%] object-cover' alt="" />

              </div>
            </div>
          </main>
      </div>
      <Footer/>
    </body>
  );
}
