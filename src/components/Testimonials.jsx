import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
  return (<>
    <Carousel
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
      transitionTime={400}
      className='md:hidden'
    >
      <div>
        <h1 className='font-bold'>
          Learn how our users have transformed their crypto finances
        </h1>
        <img src="images/image1.png" alt="" />
        <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p>
      </div>
      <div>
        <img src="images/image2.png" alt="" />
        <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p>
      </div>
      <div>
        <img src="images/image3.png" alt="" />
        <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p>
      </div>
    </Carousel>
    <div className='md:grid md:grid-cols-3 gap-20 border-solid p-8 text-left hidden'>
      <div>
        <img src="images/image1.png" alt="" />
        <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p>
      </div>
      <div>
        <img src="images/image2.png" alt="" />
        <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p>
      </div>
      <div>
        <img src="images/image3.png" alt="" />
        <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ac eu egestas  </p>
      </div>
    </div>
  </>
  )
}

export default Testimonials