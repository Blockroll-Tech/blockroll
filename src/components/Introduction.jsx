import React from 'react'

const Introduction = () => {
  return (
    <>
      <div className='grid md:grid-cols-2 gap-20 border-solid p-8'>
        <div className='md:text-left'>
          <div className='mt-8 font-bold text-lg pb-[10px]'>How it works</div>
          <div className='text-base font-medium'>
            <p className=''>
              1. We are reimagining how remote businesses can manage and facilitate their payroll processes. With Blockroll, your payroll operations are seamless, compliant, transparent, and extremely secure. <br />
            </p>
            <p className='mt-10'>
              2. At Blockroll, we believe in making payroll technology flexible, faster and cheaper for the business owners.
              <br />
            </p>
            <p>
              This is why we created an all-in-one payroll solution to help Web3 businesses to grow.
              Using Blockroll, you can receive payments from your clients, pay your coworkers effectively and grow your business internationally.
            </p>
          </div>
        </div>
        <div>
          <img src="images/youtube.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
      </div>
    </>
  )
}

export default Introduction