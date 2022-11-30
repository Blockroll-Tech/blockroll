import React from 'react'
import { Accordion } from 'flowbite-react'

const Faq = () => {
  return (
    <div className='grid md:grid-cols-2 gap-4 text-left p-8'>
      <div className='grid md:grid-cols-3 gap-4'>
        <img src="images/help.png" alt="" />
        <h1 className='col-span-2 font-extrabold mt-8'>Frequently asked Questions</h1>
        <p className='col-span-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur volutpat, <br />
          elementum in odio. Vitae, vulputate non elit eget magna diam libero.</p>
      </div>
      <div>
        <Accordion alwaysOpen={true} className="">
          <Accordion.Panel>
            <Accordion.Title>
              Lorem ipsum dolor sit amet, consectetur?
            </Accordion.Title>
            <Accordion.Content>
              {/* <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to{' '}
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  get started
                </a>
                {' '}and start developing websites even faster with components on top of Tailwind CSS.
              </p> */}
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Lorem ipsum dolor sit amet, consectetur?
            </Accordion.Title>
            <Accordion.Content>
              {/* <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the{' '}
                <a
                  href="https://flowbite.com/figma/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Figma design system
                </a>
                {' '}based on the utility classes from Tailwind CSS and components from Flowbite.
              </p> */}
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
            Lorem ipsum dolor sit amet, consectetur?
            </Accordion.Title>
            <Accordion.Content>
              {/* <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul> */}
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  )
}

export default Faq