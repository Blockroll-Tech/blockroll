import React, { useState } from 'react'
import { Navbar } from 'flowbite-react'
import { Dropdown } from 'flowbite-react'
import UAuth from "@uauth/js";

const Navbars = () => {
    const [connectedAddress, setConnectedAddress] = useState('');

    // UAth login function is set here

    const uauth = new UAuth({
        clientID: "22a33254-1de0-4d87-973b-009f2c8c1aca",
        // client id will be your id from unstoppable domain 
        redirectUri: "http://localhost:3000",
        // redirectUri: "https://www.blockroll.app/",
        scope: "openid wallet",
    });

    // Logout
    const logout = async () => {
        await uauth.logout();

        console.log("Logged out with Unstoppable");

        setConnectedAddress("");
    };

    // Login
    const login = async () => {
        try {
            const authorization = await uauth.loginWithPopup();
            const domainName = authorization.idToken.sub;
            // const walletAddress = authorization.idToken.wallet_address;

            console.log("Logged in with Unstoppable");

            setConnectedAddress(domainName);
        } catch (error) {
            console.error(error);
        }
    };
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
                {connectedAddress ? (
                    <button
                        onClick={logout}
                        className="px-[25px] py-[10px] text-white bg-brand1 hover:drop-shadow-md rounded-full flex items-center gap-2"
                    >
                        {connectedAddress.length > 0 &&
                            `${connectedAddress.substring(
                                0,
                                5
                            )}...${connectedAddress.substring(12)}`}
                    </button>
                ) : (
                    <button
                        onClick={login}
                        className="text-white bg-[#0029FF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Connect wallet
                    </button>
                )}
                {/* <a href="https://form.typeform.com/to/hnHvhN7C" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Join Waitlist</a> */}
                {/* <a href="https://form.typeform.com/to/hnHvhN7C" className="text-white bg-[#0029FF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Join Waitlist</a> */}
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