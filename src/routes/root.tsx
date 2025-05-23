import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Root;
