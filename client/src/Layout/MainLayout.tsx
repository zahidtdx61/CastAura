import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex bg-primary min-h-screen">
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default MainLayout;
