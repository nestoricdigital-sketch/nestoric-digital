// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { Suspense, lazy } from "react";
import LoadingScreen from "./components/LoadingSection";
// import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
// import Providing from "./components/Providing";
// import Testimon from "./components/Testimon";
//import Home from "./components/Home";
import Footer from "./components/Footer";
// import NotFound from "./components/pages/NotFound";
// import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Works from "./components/Works";
import Work from "./components/pages/Work";
import HeroSection from "./components/HeroSection";
import Testimon from "./components/Testimon";
import FaqSection from "./components/FaqSection";
import Providing from "./components/Providing";
// import LetsConnect from "./components/LetsConnect";
import ContactForm from './components/pages/ContactForm'
import ScrollToTop from "./components/ScrollToTop";
// import Services from "./components/pages/Services";
// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
// import WorkPage from "./components/pages/WorkPage";

// ✅ Lazy load non-critical (secondary) pages
const Services = lazy(() => import("./components/pages/Services"));
const WorkPage = lazy(() => import("./components/pages/WorkPage"));
const Blog = lazy(() => import("./components/pages/Blog"));
const About = lazy(() => import("./components/pages/About"));
const PrivacyPolicy = lazy(() => import("./components/pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./components/pages/NotFound"));

function App() {
  return (
    <div className="App">
      <div className="flex justify-center items-center bg-white">
        {/* Badge container */}
        <div className="relative w-[90%] max-w-sm">
          {/* SVG background */}
          <svg
            className="w-full h-auto"
            viewBox="0 0 397 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M397 0H0C51.5649 1.28257 38.0479 35.0129 78.599 38H299.377C373.47 38 333.921 3.41573 397 0Z"
              fill="#353535"
            />
          </svg>

          {/* Text with green dot */}
          <span className="absolute  inset-0 flex items-center justify-center text-white font-semibold text-base sm:text-lg md:text-xl gap-2">
            {/* Green dot */}
            <span className="w-3 h-3  rounded-full bg-green-500 inline-block"></span>
            24/7 Available
          </span>
        </div>
      </div>
      <ScrollToTop /> 

      <Navbar />
      {/* <HeroSection />
  
      <Providing />
      <Work/>
      <Works/>
      <Testimon />
      <FaqSection/> */}

      {/* Suspense Wrapper for Lazy Loading */}

      {/* Suspense Wrapper for Lazy Loading */}
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* ✅ Default homepage route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Providing />
                <Work />
                <Works />
                <Testimon />
                <FaqSection />
                 <ContactForm/>
              </>
            }
          />

          {/* Lazy loaded routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
