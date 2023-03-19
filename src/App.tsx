import Navbar from "@/components/Navbar";
import NotFound from "@/components/NotFound";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import Team from "./components/team/Team";
import Test from "./Test";

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/* <Test /> */}
    </>
  );
};

export default App;
