// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { Suspense, lazy, useRef, useEffect } from "react";
import LoadingScreen from "./components/LoadingSection";
// import HeroSection from "./components/HeroSection";
// import Navbar from "./components/Navbar";
// import Providing from "./components/Providing";
// import Testimon from "./components/Testimon";
//import Home from "./components/Home";
// import Footer from "./components/Footer";
// import NotFound from "./components/pages/NotFound";
// import PrivacyPolicy from "./components/pages/PrivacyPolicy";
// import Works from "./components/Works";
import Work from "./components/pages/Work";
import HeroSection from "./components/HeroSection";
import Testimon from "./components/Testimon";
import FaqSection from "./components/FaqSection";
import Providing from "./components/Providing";
// import LetsConnect from "./components/LetsConnect";
import ContactForm from "./components/pages/ContactForm";
import ScrollToTop from "./components/ScrollToTop";
// import WorksMini from "./components/WorksMini";
import AdminDashboard from "./components/superbase/AdminDashboard";
import AdminLogin from "./components/superbase/AdminLogin";
import PublicLayout from "./components/PublicLayout";
import AdminLayout from "./components/AdminLayout";
import WorksGrid from "./components/WorksGrid";
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

function PrivateRoute({ children }) {
  const isLogged = localStorage.getItem("N_admin") === "true";
  return isLogged ? (
    children
  ) : (
    <AdminLogin onLogin={() => window.location.reload()} />
  );
}
function App() {
  return (
    <>
      <ScrollToTop />
      <SmoothScrollProvider>
        <div className="App md:px-20 ">
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
              <span className="absolute  inset-0 flex items-center justify-center text-white font-light text-base  md:text-[18px] gap-3 ">
                {/* Green dot */}
                <span className="animate-blink  w-3 h-3  rounded-full bg-green-500 inline-block"></span>
                24/7 Available
              </span>
            </div>
          </div>

          {/* <Navbar /> */}
          {/* <HeroSection />
 


        {/* Suspense Wrapper for Lazy Loading */}
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              {/* ✅ Default homepage route */}

              {/* ===================== PUBLIC ROUTES ===================== */}
              <Route element={<PublicLayout />}>
                <Route
                  path="/"
                  element={
                    <>
                      <HeroSection />
                      <WorksGrid />
                      {/* <WorksMini /> */}
                      <Providing />
                      <Work /> {/* services section */}
                      {/* <Works />  */}
                      <Testimon />
                      <FaqSection />
                      <ContactForm />
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
              </Route>
              {/* ===================== ADMIN ROUTES ===================== */}
              <Route element={<AdminLayout />}>
                <Route
                  path="/admin-login"
                  element={
                    <PrivateRoute>
                      <AdminDashboard />
                    </PrivateRoute>
                  }
                />
              </Route>
            </Routes>
          </Suspense>
          {/* <Footer /> */}
          {/* <Routes>
          <Route
            path="/admin-login"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
        </Routes> */}
        </div>
      </SmoothScrollProvider>
    </>
  );
}

export default App;

//

export function SmoothScrollProvider({ children }) {
  const contentRef = useRef(null);
  const spacerRef = useRef(null);

  const current = useRef(0);
  const target = useRef(0);
  const ease = 0.08;

  useEffect(() => {
    const content = contentRef.current;
    const spacer = spacerRef.current;
    if (!content || !spacer) return;

    const updateHeight = () => {
      const height = content.offsetHeight;
      spacer.style.height = `${height}px`;
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(content);

    const onScroll = () => {
      const maxScroll = spacer.offsetHeight - window.innerHeight;

      target.current = Math.max(0, Math.min(window.scrollY, maxScroll));
    };

    const animate = () => {
      current.current += (target.current - current.current) * ease;
      content.style.transform = `translate3d(0, ${-current.current}px, 0)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll);
    requestAnimationFrame(animate);

    // Back to top support
    // window.__scrollToTop = () => {
    //   window.scrollTo({ top: 0, behavior: "smooth" });
    // };

    // new code
    window.__smoothScrollTo = (y) => {
      const maxScroll = spacerRef.current.offsetHeight - window.innerHeight;

      window.scrollTo({
        top: Math.max(0, Math.min(y, maxScroll)),
        behavior: "auto", // IMPORTANT
      });
    };

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Scroll height holder */}
      <div ref={spacerRef} />

      {/* Smooth content */}
      <div className="fixed inset-0 overflow-hidden">
        <div ref={contentRef} className="will-change-transform">
          {children}
        </div>
      </div>
    </>
  );
}
