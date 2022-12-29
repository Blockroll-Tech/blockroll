import React from 'react'
import { Accordion } from 'flowbite-react'

const Faq = () => {
  return (
    <div className='grid md:grid-cols-2 gap-4 text-left mt-12 p-8 rounded-lg shadow'>
      <div className='grid md:grid-cols-3 gap-4'>
        <img src="images/help.png" alt="" />
        <h1 className='col-span-2 font-extrabold mt-8'>Frequently Asked Questions</h1>
        <p className='col-span-3 md:-mt-20'>
          What would you like to know about Blockroll? Shoot your questions as we are adding more questions to our FAQ section.
        </p>
      </div>
      <div>
        <Accordion alwaysOpen={true} className="">
          <Accordion.Panel>
            <Accordion.Title>
              What is Blockroll, and what do you do?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Blockroll is a payroll management system that facilitates crypto and fiat payroll operations for businesses and offers extra capabilities for these businesses and their teams.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What does it cost?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                We're yet to release our pricing list. However, rest assured it'll be flexible for organizations and teams.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Can non-Web3 Organizations use Blockroll?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Of course! We're building for businesses of any size who value how their payroll operations are being carried out and are looking to explore better and smarter solutions.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Where do I get started from?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Right now, we're still building. However, we will be launching our demo soon. If you're a business owner or belong to a team, you can join our waitlist here.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  )
}

export default Faq