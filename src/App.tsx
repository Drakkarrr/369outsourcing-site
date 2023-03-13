import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/ContactUs";
import { Routes, Route } from "react-router-dom";

const App = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(true);

  useEffect(() => {
    const handleOnScroll = () => {
      if (window.scrollY === 0) setIsScrolled(true);
      else setIsScrolled(false);
    };

    return window.removeEventListener("scroll", handleOnScroll);
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
