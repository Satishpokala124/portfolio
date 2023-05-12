import React from 'react';

export default function Header() {
  return (
    <div className='flex flex-col'>
      <p className='text-2xl transition cursor-default hover:translate-x-2'>{`Hello there!! I'm`}</p>
      <h1 className='mt-2 text-5xl'>Satish Pokala</h1>
      {/* <h1 className='text-3xl font-bold'>This is my Portfolio</h1> */}
    </div>
  );
}
