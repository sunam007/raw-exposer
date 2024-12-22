import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="">
            <Sidebar />
            <div className="ml-[21%] w-[79%] flex flex-col min-h-screen">
                <main className="flex-grow p-4 bg-gray-100">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
