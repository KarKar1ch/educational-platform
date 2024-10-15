import React from 'react'
import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
import Button from '@/components/Button';

export default function Home() {
  return (
    <body className="w-full">
      <div className=''>
          <main>
            <div className='flex relative '>
              
              <div className='flex relative z-[9] justify-end w-full h-[calc(100vh_-_100px)]'>
                <img src="/img/bg-studying-2.jpg" className='flex relative justify-end clip-img w-[40%] object-cover' alt="" />

              </div>
            </div>
          </main>
      </div>
      <Footer/>
    </body>
  );
}
