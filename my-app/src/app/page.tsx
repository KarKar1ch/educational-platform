import React from 'react'
import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="text-3xl">
      <div className="bg-red-500 text-white p-4">
        XUI
      </div>
      <Header/>
      <main>

      </main>
      <Footer/>
    </div>
  );
}
