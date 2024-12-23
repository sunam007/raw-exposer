import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
            <Sidebar />
            <div id="jopho-main">
                <Outlet />
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;
