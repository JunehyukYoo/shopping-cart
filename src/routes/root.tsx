import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";

// TODO: Fetch product data from the FakeStoreAPI
export const loader = () => {
    return;
}

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Root;
