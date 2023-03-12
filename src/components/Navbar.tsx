import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex-between fixed top-0 z-30 w-full py-6">
        <div className="flex-between mx-auto w-5/6">
          <div className="logo-container flex-between w-full gap-16">
            <img src={Logo} alt="369outsourcing logo" />

            <div className="flex-between w-full">
              <div className="flex-between gap-8 text-sm">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
              </div>
              <div className="flex-between gap-8">
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
