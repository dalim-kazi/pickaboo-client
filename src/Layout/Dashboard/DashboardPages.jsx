import { Outlet } from "react-router-dom";
import Header from "../../Sherad/Navber/Header";
import DashboardLayout from "./DashboardLayout";

 

const DashboardPages = () => {
    return (
        <div>
            <div><Header></Header></div>
            <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-5 lg:col-span-4 xl:col-span-3">
         <DashboardLayout></DashboardLayout>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-8 mb-10">
          <Outlet></Outlet>
        </div>
      </div>
        </div>
    );
};

export default DashboardPages;