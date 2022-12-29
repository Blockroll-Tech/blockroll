import React from 'react'
import { Footer } from 'flowbite-react'
import { BsDribbble, BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footers = () => {
  return (
    <Footer container={true} className="!shadow-transparent mt-12">
      <div className="w-full !text-left">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          {/* <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">
                  Who we are
                </Footer.Link>
                <Footer.Link href="#">
                  Countries
                </Footer.Link>
                <Footer.Link href="#">
                  News & Blog
                </Footer.Link>
                <Footer.Link href="#">
                  Careers
                </Footer.Link>
                <Footer.Link href="#">
                  Partners
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">
                  Data Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Cookie Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Regulation
                </Footer.Link>
                <Footer.Link href="#">
                  Careers
                </Footer.Link>
                <Footer.Link href="#">
                  Partners
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Support" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">
                  FAQs
                </Footer.Link>
                <Footer.Link href="#">
                  Contact Us
                </Footer.Link>
                <Footer.Link href="#">
                  Terms & Conditions
                </Footer.Link>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div> */}
          <div>
            <Footer.Brand
              // href="https://flowbite.com"
              src="/images/BlockRoll.png"
              alt="Blockroll"
              // name="Blockroll"
            />
            <h5>Blockroll is the smartest and best way to handle your payroll operations.</h5>
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <div className="!mt-8 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon
                  href="#"
                  icon={BsTwitter}
                  className="bg-[#0029FF]"
                />
                <Footer.Icon
                  href="#"
                  icon={BsLinkedin}
                />
                <Footer.Icon
                  href="#"
                  icon={BsFacebook}
                />
                <Footer.Icon
                  href="#"
                  icon={BsGithub}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <h5>2023 © Blockroll Technologies, All Rights Reserved.</h5>
        </div>
      </div>
    </Footer>
  )
}

export default Footers