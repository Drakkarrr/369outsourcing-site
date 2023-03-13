import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Props {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const navBarClasses = isScrolled ? "bg-lime-300" : "bg-white bg-opacity-90";

  return (
    <>
      <nav
        className={`${navBarClasses} flex-between fixed top-0 z-30 w-full py-6`}
      >
        <div className="flex-between mx-auto w-5/6">
          <div className="logo-container flex-between w-full gap-16">
            <img src={Logo} alt="369outsourcing logo" />
            {isAboveMediumScreen ? (
              <div className="flex-between w-full">
                <div className="flex-between gap-8 text-sm">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/services">Services</NavLink>
                </div>
                <div className="flex-between cursor-pointer gap-8 rounded-md bg-black px-10 py-2 hover:bg-slate-800 hover:text-white">
                  <NavLink to="/contact">Contact Us</NavLink>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-zinc-500 p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>

        {!isAboveMediumScreen && isOpen && (
          <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-red-200 drop-shadow-xl">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsOpen(!isOpen)}>
                <XMarkIcon className="h-6 w-6 text-black" />
              </button>
            </div>

            {/* <div className="justify-en flex w-full flex-col"> */}
            <div className="text-2x1 ml-[33%] flex flex-col gap-10">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
            </div>
            {/* <div className="flex-between cursor-pointer gap-8 rounded-md bg-black px-10 py-2 hover:bg-slate-800 hover:text-white">
              <NavLink to="/contact">Contact Us</NavLink>
            </div> */}
            {/* </div> */}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
