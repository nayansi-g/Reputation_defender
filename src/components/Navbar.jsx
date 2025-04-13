import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../components/assets/logo1.png";
import { ChevronRight, Phone } from "lucide-react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  return (
    <div className=" sticky top-0 z-50 shadow-md bg-black ">
      <div className="flex justify-between  text-white ml-20">
        <div className="flex text-white gap-20 justify-center items-center shadow-lg">
          <img className="w-36 h-32" src={Logo} alt="" />
          <div className="relative flex gap-10">
            <div
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <span className="flex">
                Solutions <ChevronRight />
              </span>
              <AnimatePresence>
                {show && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full w-52 mt-2 left-0 bg-white text-black border shadow "
                  >
                    <ul className="flex flex-col justify-center w-full items-center cursor-pointer p-2">
                      <li className="hover:bg-gray-500 p-1">Overview</li>
                      <li className="hover:bg-gray-500 p-1">
                        Content Suppression
                      </li>
                      <li className="hover:bg-gray-500 p-1">
                        Content Suppression
                      </li>
                      <li className="hover:bg-gray-500 p-1">
                        Personal Branding
                      </li>
                      <li className="hover:bg-gray-500 p-1">
                        Concierge Digital Security
                      </li>
                      <li className="hover:bg-gray-500 p-1">
                        Corporate Privacy
                      </li>
                      <li className="hover:bg-gray-500 p-1">VIP Services</li>
                      <li className="hover:bg-gray-500 p-1">Online Reviews</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              onMouseEnter={() => setShowFirst(true)}
              onMouseLeave={() => setShowFirst(false)}
            >
              <span className="flex">
                Who We Serve <ChevronRight />
              </span>
              <AnimatePresence>
                {showFirst && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full w-52 ml-20 left-0 mt-2 bg-white text-black border shadow "
                  >
                    <ul className="flex flex-col justify-center w-full items-center cursor-pointer p-2">
                      <li className="hover:bg-gray-500 p-1">Overview</li>
                      <li className="hover:bg-gray-500 p-1">Individuals</li>
                      <li className="hover:bg-gray-500 p-1">Job Seekers</li>
                      <li className="hover:bg-gray-500 p-1">
                        Small Businesses
                      </li>
                      <li className="hover:bg-gray-500 p-1">
                        Corporate Privacy
                      </li>
                      <li className="hover:bg-gray-500 p-1">Executives</li>
                      <li className="hover:bg-gray-500 p-1">Large Companies</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              onMouseEnter={() => setShowSecond(true)}
              onMouseLeave={() => setShowSecond(false)}
            >
              <span className="flex">
                Self Help <ChevronRight />
              </span>
              <AnimatePresence>
                {showSecond && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full w-60 ml-60 left-0 mt-2 bg-white text-black border shadow "
                  >
                    <ul className="flex flex-col justify-center w-full items-center cursor-pointer  p-2">
                      <li className="hover:bg-gray-500 p-1">Resource Center</li>
                      <li className="hover:bg-gray-500 p-1">
                        E-book & Case Studies
                      </li>
                      <li className="hover:bg-gray-500 p-1">
                        How to Remove Personal Info
                      </li>
                      <li className="hover:bg-gray-500 p-1">
                        What is Online Reputation
                      </li>
                      <li className="hover:bg-gray-500 p-1">
                        {" "}
                        Guide to Online Reputation
                      </li>
                      <li className="hover:bg-gray-500 p-1">
                        Reputation Report Card
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              onMouseEnter={() => setShowThird(true)}
              onMouseLeave={() => setShowThird(false)}
            >
              <span className="flex">
                About Us <ChevronRight />
              </span>

              <AnimatePresence>
                {showThird && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full w-52 ml-96 left-0 mt-2 bg-white text-black border shadow "
                  >
                    <ul className="flex flex-col justify-center w-full items-center cursor-pointer p-1">
                      <li className="hover:bg-gray-500 p-1">Our Story</li>
                      <li className="hover:bg-gray-500 p-1">Press Room</li>
                      <li className="hover:bg-gray-500 p-1">Careers</li>
                      <li className="hover:bg-gray-500 p-1">Legal</li>
                      <li className="hover:bg-gray-500 p-1">Privacy Policy</li>
                      <li className="hover:bg-gray-500 p-1">Patents</li>
                      <li className="hover:bg-gray-500 p-1">Contact</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 mr-10">
          <Phone className="h-4" /> 877-657-2643
        </div>
      </div>
    </div>
  );
};

export default Navbar;
