import React from 'react'
import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="">
      <Header/>
      <main>
        <div>
          <div>
            <div>
              <h1>Text</h1>
            </div>
            <div>
              <Button>text</Button>
              <Button>text</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
