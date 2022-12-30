import React from 'react'
import Navbars from './Navbar'

const Header = () => {
  return (
    <section className="bg-white">
      <Navbars className="!p-6"/>
      <div className="container flex flex-col justify-center pt-2 mx-auto sm:py-6 lg:py-12 lg:flex-row lg:justify-between text-left">
        <div className="flex flex-col justify-center p-6 text-left rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl font-extrabold leading-none sm:text-4xl">The Smartest Payroll
            Solution for Web3 Startups.
          </h1>
          <p className="mt-6 mb-8 text-base font-medium sm:mb-12">Blockroll offers Web3 Businesses and Teams a seamless and borderless
            payroll management system.
            {/* <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem </br> */}
          </p>
          <div className="hidden md:flex items-center md:order-2 gap-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="https://form.typeform.com/to/hnHvhN7C" className="px-8 py-2 text-lg font-semibold rounded-lg bg-[#0029FF] text-white">See Demo</a>
            <a rel="noopener noreferrer" href="https://form.typeform.com/to/hnHvhN7C" className="px-8 !mt-0 py-2 text-lg font-semibold border rounded-lg dark:border-gray-100 border-[#0029FF] text-[#0029FF]">Join Waitlist</a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src="images/hero.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
        <div className="flex items-center p-6 md:hidden md:order-2 gap-10 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a rel="noopener noreferrer" href="https://form.typeform.com/to/hnHvhN7C" className="px-8 py-2 text-base font-semibold rounded-lg bg-[#0029FF] text-white">See Demo</a>
          <a rel="noopener noreferrer" href="https://form.typeform.com/to/hnHvhN7C" className="px-8 !mt-0 py-2 text-[#0029FF] text-base font-semibold border border-[#0029FF] rounded-lg">Join Waitlist</a>
        </div>
      </div>
    </section>
  )
}

export default Header