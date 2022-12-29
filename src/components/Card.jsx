import React from 'react'

const Card = () => {
  return (
    <div className='grid md:grid-cols-2 gap-20 border-solid pt-12 pb-12'>
      <div className='md:text-left order-1 px-10 py-10 rounded-lg bg-white'>
        <h1 className='mt-8 font-bold text-lg pb-[10px]'>Sign up for free to enjoy</h1>
        <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Duis consectetur ac eu egestas </p>
      </div>
      <div className='md:text-left h-90 order-3 px-10 py-10 rounded-lg bg-white'>
        <h1 className='mt-8 font-bold text-lg pb-[10px]'>Borderless and Lightning-fast</h1>
        <p className='text-base font-medium'>Facilitating payroll with Blockroll knows no bounds. Accept and offer payments from anywhere around the world in a few seconds. Yes, that's how fast we are. </p>
      </div>
      <div className='md:text-left bg-blue-600 text-white px-10 py-10 rounded-lg h-96 order-2'>
        <h1 className='font-bold text-lg pb-[10px]'>Earn Rewards</h1>
        <p className='text-base font-medium'>Businesses and Teams using Blockroll can earn attractive rewards from staking their idle cash.</p>
      </div>
      <div className='md:text-left h-96 order-5 px-10 py-10 rounded-lg bg-white'>
        <h1 className='mt-8 font-bold text-lg pb-[10px]'>Sign up for free to enjoy</h1>
        <p className='text-base font-medium'>Blockroll ensures you adhere to regulations that govern your business and employees' payroll. </p>
      </div>
      <div className='md:text-left h-96 order-7 px-10 py-10 rounded-lg bg-white'>
        <h1 className='mt-8 font-bold text-lg pb-[10px]'>Customizable</h1>
        <p className='text-base font-medium'>Easily organize your dashboard to keep track of all activities and connect with supported accounting software.</p>
      </div>
      <div className='md:text-left bg-blue-600 text-white px-10 py-10 rounded-lg h-96 order-4'>
        <h1 className='font-bold text-lg pb-[10px]'>Secure</h1>
        <p className='text-base font-medium'>Blockroll implements best practices to keep your activities and transaction data extraordinarily secure and safe.</p>
      </div>
      <div className='md:text-left bg-blue-600 text-white px-10 py-10 rounded-lg h-96 order-6'>
        <h1 className='font-bold text-lg pb-[10px]'>Automated</h1>
        <p className='text-base font-medium'>Blockroll is automated yet flexible. Save time while managing payroll activities by automating or manually accepting some functions.</p>
      </div>
    </div>
  )
}

export default Card