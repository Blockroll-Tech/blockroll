import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
  return (<div className='bg-white px-10 py-10 rounded-lg'>
    <h2 className='font-bold text-xl mb-8'>Learn how our users have transformed their crypto finances</h2>
    <Carousel
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
      transitionTime={400}
      infiniteLoop={true}
      className='md:hidden bg-white'
    >
      <div>
        <img src="images/image1.png" alt="" />
        {/* <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p> */}
      </div>
      <div>
        <img src="images/image2.png" alt="" />
        {/* <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p> */}
      </div>
      <div>
        <img src="images/image3.png" alt="" />
        {/* <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p> */}
      </div>
    </Carousel>
    <div className='md:grid md:grid-cols-3 gap-20 border-solid p-8 text-left hidden bg-white'>
      <div>
        <img src="images/image1.png" alt="" />
        {/* <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p> */}
      </div>
      <div>
        <img src="images/image2.png" alt="" />
        {/* <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p> */}
      </div>
      <div>
        <img src="images/image3.png" alt="" />
        {/* <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p> */}
      </div>
    </div>
  </div>
  )
}

export default Testimonials