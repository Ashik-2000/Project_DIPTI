import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
};
export default MainLayout;
