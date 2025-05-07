import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";

const MainLayout = ({ numCartItems }) => {
    return (
        <>
            <NavBar numCartItems={numCartItems} />
            <Outlet />
            <Footer />
        </>
    );
};
export default MainLayout;
