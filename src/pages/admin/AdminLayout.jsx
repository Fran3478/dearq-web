import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/sidebar/Sidebar";
import Header from "../../components/admin/header/Header";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex h-max">
        <Sidebar />
        <div className="mt-16 ml-64 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
