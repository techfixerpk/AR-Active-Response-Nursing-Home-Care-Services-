
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Equipments from './Equipments';
import WhatsAppFloat from './WhatsAppFloat';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <main>
        <Hero />
        <div id='services' className='py-10'>
          <Services />
        </div>
        <div id='equipments' className='py-10 bg-gray-50'>
          <Equipments />
        </div>
      </main>
      <WhatsAppFloat />
      <ToastContainer />
      <footer className='bg-slate-900 text-white py-10 text-center'>
        <p className='font-bold'>AR (Active Response) Nursing Home Care Services</p>
        <p className='text-sm opacity-70 mt-2'>Serving Rawalpindi & Islamabad 24/7</p>
        <p className='text-xs mt-4'>Founder: Awais Babar | 0347-2241304</p>
      </footer>
    </div>
  );
}
