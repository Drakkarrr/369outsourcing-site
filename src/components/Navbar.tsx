import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/trans-lowgo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="z-20 w-full bg-gray-900">
        <div className="mx-auto px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <div className="lg:w-12">
                <img className="w-full" src={Logo} alt="Our company logo" />
              </div>
              <span className="ml-2 text-xl font-bold uppercase tracking-wide text-gray-100">
                369Outsourcing <br /> soulutions
              </span>
            </a>
            <ul className=" hidden items-center space-x-8 lg:flex">
              <li>
                <NavLink
                  to="/"
                  aria-label="Our product"
                  className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  aria-label="Our product"
                  className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/our-team"
                  aria-label="Product pricing"
                  className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
                >
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/our-services"
                  aria-label="Product pricing"
                  className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
                >
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className="bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 items-center justify-center rounded bg-indigo-600  py-3 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
                  aria-label="Sign up"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="focus:shadow-outline -mr-1 rounded p-2 transition duration-200 focus:outline-none"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>

              {isMenuOpen && (
                <div className="absolute top-0 left-0 z-20 w-full">
                  <div className="rounded border bg-gray-400 p-5 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <a
                          href="#"
                          aria-label="369 oursourcing solutions company logo"
                          className="inline-flex items-center"
                        >
                          <div className="w-12">
                            <img
                              className="w-full"
                              src={Logo}
                              alt="Our company logo"
                            />
                          </div>
                          <span className="ml-2 text-xl font-bold uppercase tracking-wide text-gray-800">
                            369Outsourcing <br /> solutions
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="focus:shadow-outline -mt-2 -mr-2 rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <NavLink
                            to="/"
                            aria-label="home"
                            className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
                          >
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/about-us"
                            aria-label="about"
                            className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
                          >
                            About Us
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/our-team"
                            aria-label="Product pricing"
                            className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
                          >
                            Our Team
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/our-services"
                            aria-label="services"
                            className="hover:text-teal-accent-400 font-medium tracking-wide text-gray-100 transition-colors duration-200"
                          >
                            Our Services
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/contact-us"
                            className="bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 items-center justify-center rounded px-2 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
                            aria-label="Contact Us"
                          >
                            Contact Us
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
