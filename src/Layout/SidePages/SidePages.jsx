import { Outlet } from "react-router-dom";
import Header from "../../Sherad/Navber/Header";
import Sidebar from "./SIdebar";
 
const SidePages = () => {

  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-5 lg:col-span-4 xl:col-span-3">
        <Sidebar></Sidebar>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default SidePages;