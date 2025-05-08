import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";

const MainLayout = ({ numCartItems }) => {
    return (
        <>
            <NavBar numCartItems={numCartItems} />
            <ToastContainer />
            <Outlet />
            <Footer />
        </>
    );
};
export default MainLayout;
