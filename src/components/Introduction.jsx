import React from 'react'

const Introduction = () => {
  return (
    <>
      <div className='grid md:grid-cols-2 gap-20 border-solid p-8'>
        <div className='md:text-left'>
          <div className='mt-8 font-bold text-lg pb-[10px]'>How it works</div>
          <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas </p>
        </div>
        <div>
          <img src="images/youtube.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
      </div>
    </>
  )
}

export default Introduction