
import React from 'react';
import ServiceCard from './ServiceCard';

export const services = [
  { id: 1, title: '24/7 ICU Trained Staff', icon: 'HeartPulse' },
  { id: 2, title: 'Doctor At Home Visit', icon: 'User' },
  { id: 3, title: 'IV Medication & Drips', icon: 'Syringe' },
  { id: 4, title: 'Oxygen Therapy Service', icon: 'Wind' },
  { id: 5, title: 'Post Operative Care', icon: 'Home' },
  { id: 6, title: 'Tracheostomy Care', icon: 'Activity' },
  { id: 7, title: 'Gastric Lavage & Feeding', icon: 'Stethoscope' },
  { id: 8, title: 'Bed Sore Management', icon: 'ShieldAlert' },
  { id: 9, title: 'Lab Test Sampling @ Home', icon: 'FlaskConical' },
  { id: 10, title: 'Ambulance Service 24/7', icon: 'Truck' },
  { id: 11, title: 'Elderly Care Nursing', icon: 'Users' },
  { id: 12, title: 'Physiotherapy Sessions', icon: 'Accessibility' },
  { id: 13, title: 'ECG At Home', icon: 'Pulse' },
  { id: 14, title: 'Catheterization Service', icon: 'Pipette' },
  { id: 15, title: 'Wound Dressing', icon: 'Bandage' },
  { id: 16, title: 'Vaccination Service', icon: 'Syringe' },
  { id: 17, title: 'Palliative Care', icon: 'Heart' },
  { id: 18, title: 'Baby Care / Nanny', icon: 'Baby' },
  { id: 19, title: 'Nebulization Service', icon: 'Wind' },
  { id: 20, title: 'Blood Pressure Monitoring', icon: 'Timer' }
];

export default function Services() {
  return (
    <section id='services' className='max-w-7xl mx-auto px-4'>
      <div className='text-center mb-10'>
        <h2 className='text-3xl font-bold text-slate-900'>Our Professional Services</h2>
        <div className='h-1 w-20 bg-primary mx-auto mt-2'></div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {services.map(s => <ServiceCard key={s.id} service={s} />)}
      </div>
    </section>
  );
}
