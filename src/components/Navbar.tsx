import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/trans-lowgo.png";
import styled from "styled-components";

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <StyledNav>
        <nav className="fixed top-0 z-20 w-full bg-gray-900">
          <div className="mx-auto px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="relative flex items-center justify-between">
              <a href="/" className="inline-flex items-center">
                <div className="sm:w[20px] lg: w-12">
                  <img src={Logo} alt="Our company logo" />
                </div>
                <span className="font-bold uppercase tracking-wide text-gray-100 sm:ml-2 sm:text-sm lg:text-lg">
                  369 Outsourcing <br /> solutions
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
                    className="cta bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 items-center justify-center rounded bg-indigo-600  py-3 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
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
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <svg className="w-5 text-white" viewBox="0 0 24 24">
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
                  <StyledMobileNav>
                    <div className="absolute top-0 left-0 z-20 w-full bg-transparent">
                      <div className="navigation rounded border p-5 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <a
                              href="#"
                              aria-label="369 oursourcing solutions company logo"
                              className=" inline-flex items-center"
                            >
                              <div className="w-12">
                                <img
                                  className="w-full"
                                  src={Logo}
                                  alt="Our company logo"
                                />
                              </div>
                              <span className="heading ml-2 text-xl font-bold uppercase tracking-wide text-gray-800">
                                369Outsourcing <br /> solutions
                              </span>
                            </a>
                          </div>
                          <div>
                            <button
                              aria-label="Close Menu"
                              title="Close Menu"
                              className="focus:shadow-outline duration-20 hover:bg-white-600 -mt-2 -mr-2 rounded p-2 transition hover:scale-75 hover:outline-1 focus:outline-none"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <svg
                                className="icon w-5 text-gray-600"
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
                        <nav className="links-container">
                          <ul className="list-items space-y-4">
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
                                className="cta bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 items-center justify-center rounded px-2 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
                                aria-label="Contact Us"
                              >
                                Contact Us
                              </NavLink>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </StyledMobileNav>
                )}
              </div>
            </div>
          </div>
        </nav>
      </StyledNav>
    </>
  );
};

export default Navbar;

const StyledNav = styled.nav`
  nav {
    backdrop-filter: blur(5px);
    box-shadow: 0px 1px 10px #252525af;
    /* background: rgba(255, 255, 255, 0.05); */
    background: #127bcb;

    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    letter-spacing: 1px;

    li a {
      color: white;
      font-weight: bold;
      letter-spacing: 1px;
    }

    .cta {
      background: linear-gradient(135deg, #4682eb -20%, #01beff 120%);
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 30px;
      padding: 3px 15px;
      letter-spacing: 2.2px;

      &:hover {
        background: #127bcb;
      }
    }
    .icon {
      color: white;
      &:hover {
        background-color: transparent;
      }
    }
  }
`;

const StyledMobileNav = styled.div`
  .navigation {
    background: linear-gradient(135deg, #4682eb -20%, #01beff 120%);
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
    border: none;
    height: 80vh;
    width: 100%;
  }
  .links-container {
    background-color: transparent;
    border: 0;
    box-shadow: none;
    .list-items {
      border: 0;
      li {
        padding-bottom: 1rem;
        a {
          letter-spacing: 2.2px;
          font-size: 1.3rem;
        }
      }
    }
  }

  span.heading {
    color: white;
    letter-spacing: 1.2px;
    font-weight: bold;
  }
`;
