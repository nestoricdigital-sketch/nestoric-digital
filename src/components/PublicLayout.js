// import Navbar from "./Navbar";
// import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NavBar1 from "./darktheme/NavBar1";
import Footer1 from "./darktheme/Footer1";

export default function PublicLayout() {
  return (
    <div className="font-inter ">
      <NavBar1 />
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> old*/}
      <Footer1 />
    </div>
  );
}
