import React from 'react'

const Testimonials = () => {
  return (
    <div className='grid md:grid-cols-3 gap-20 border-solid p-8 text-left'>
        <div>
          <img src="images/image1.png" alt=""  />
          <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p>
        </div>
        <div>
          <img src="images/image2.png" alt=""  />
          <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p>
        </div>
        <div>
          <img src="images/image3.png" alt=""  />
          <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p>
        </div>
      </div>
  )
}

export default Testimonials