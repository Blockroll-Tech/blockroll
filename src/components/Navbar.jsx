import React from 'react'
import { Navbar } from 'flowbite-react'
import { Dropdown } from 'flowbite-react'

const Navbars = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className="!pl-6"
        >
            <Navbar.Brand href="">
                <img
                    src="/images/BlockRoll.png"
                    className="mr-3 h-6 sm:h-9"
                    // alt="Flowbite Logo"
                />
            </Navbar.Brand>
            <div className="flex items-center md:order-2">
                {/* <a href="https://form.typeform.com/to/hnHvhN7C" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Join Waitlist</a> */}
                <a href="https://form.typeform.com/to/hnHvhN7C" className="text-white bg-[#0029FF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Join Waitlist</a>
                {/* <Navbar.Toggle /> */}
            </div>
            {/* <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link>
                    <Dropdown
                        label="Solutions"
                        inline={true}
                    >
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Usecases
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Careers
                </Navbar.Link>
                <Navbar.Link>
                    <Dropdown
                        label="Resources"
                        inline={true}
                    >
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                </Navbar.Link>
            </Navbar.Collapse> */}
        </Navbar>
    )
}

export default Navbars