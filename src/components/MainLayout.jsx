import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Topbar } from "./Topbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex justify-center min-h-screen overflow-hidden">
      <div className="flex min-h-screen  w-full max-w-[1440px] sm:p-1">
        <Sidebar />
        <main className="flex-1 lg:mt-[30px] lg:ml-[40px] bg-white">
          <Topbar />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
