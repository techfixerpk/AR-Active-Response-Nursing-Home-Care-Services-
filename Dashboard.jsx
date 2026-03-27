
import React from 'react';
import { services } from './services';
import { equipments } from './equipments';

export default function Dashboard() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>Admin Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-blue-600 text-white p-6 rounded-xl'>
           <p>Active Services</p>
           <h2 className='text-4xl font-bold'>{services.length}</h2>
        </div>
        <div className='bg-green-600 text-white p-6 rounded-xl'>
           <p>Equipment Inventory</p>
           <h2 className='text-4xl font-bold'>{equipments.length}</h2>
        </div>
        <div className='bg-orange-600 text-white p-6 rounded-xl'>
           <p>Target Revenue (Mock)</p>
           <h2 className='text-4xl font-bold'>Rs. 1.2M</h2>
        </div>
      </div>
      <div className='mt-10 bg-white p-6 rounded-xl border'>
         <h3 className='font-bold mb-4'>Founder Info</h3>
         <p>Name: Awais Babar</p>
         <p>Admin Email: malikawaisbabar143@gmail.com</p>
      </div>
    </div>
  );
}
