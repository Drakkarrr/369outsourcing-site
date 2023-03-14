import Navbar from "@/components/Navbar";
import NotFound from "@/components/NotFound";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/ContactUs";
import { Routes, Route } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
