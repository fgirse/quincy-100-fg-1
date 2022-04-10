/* eslint-disable prettier/prettier */
import React from 'react';
import Image from 'next/image';


const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem', height:'5vh'}}>
    <p className="headingD text-5xl text-slate-50 font-bold uppercase ">{title}</p>
    <div className='w -60 mx-auto lg:w-4/12'>
    
    </div>
    
  </div>
);

export default SubHeading;