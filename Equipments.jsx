
import React, { useState } from 'react';
import EquipmentCard from './EquipmentCard';

export const equipments = [
  { id: 1, name: 'Oxygen Concentrator', price: 'Rs. 5000/Month', type: 'Rent & Sale' },
  { id: 2, name: 'Bipap Machine', price: 'Contact for Rate', type: 'Rent & Sale' },
  { id: 3, name: 'Patient Hospital Bed', price: 'Rs. 3000/Month', type: 'Rent' },
  { id: 4, name: 'Manual Wheelchair', price: 'Rs. 8000', type: 'Sale' },
  { id: 5, name: 'Suction Machine', price: 'Rs. 1500/Month', type: 'Rent' },
  { id: 6, name: 'Nebulizer Machine', price: 'Rs. 4500', type: 'Sale' },
  { id: 7, name: 'Ripple Mattress', price: 'Rs. 5500', type: 'Sale' },
  { id: 8, name: 'Cardiac Monitor', price: 'Contact for Rate', type: 'Rent' }
];

export default function Equipments() {
  const [tab, setTab] = useState('All');
  const filtered = tab === 'All' ? equipments : equipments.filter(e => e.type.includes(tab));

  return (
    <section id='equipments' className='max-w-7xl mx-auto px-4'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
        <h2 className='text-3xl font-bold'>Medical Equipments</h2>
        <div className='flex gap-2 mt-4 md:mt-0 bg-white p-1 rounded-lg border shadow-sm'>
          {['All', 'Rent', 'Sale'].map(t => (
            <button 
              key={t} 
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${tab === t ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-50'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {filtered.map(e => <EquipmentCard key={e.id} item={e} />)}
      </div>
    </section>
  );
}
