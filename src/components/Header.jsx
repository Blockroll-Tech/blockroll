import React from 'react'

const Header = () => {
  return (
    <section className="bg-white">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-6 lg:py-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl font-extrabold leading-none sm:text-4xl">The Smartest Payroll
            Solution for Web3 Startups.
          </h1>
          <p className="mt-6 mb-8 text-base font-medium sm:mb-12">Blockroll offers Web3 Businesses and Teams a seamless and borderless
            payroll management system.
            {/* <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem </br> */}
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-[#0029FF] text-white">See Demo</a>
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Join Waitlist</a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src="images/hero.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
      </div>
    </section>
  )
}

export default Header