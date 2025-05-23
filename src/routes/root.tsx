import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";
import "../styles/app.css"

const Root = () => {
    return (
        <div className="app">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;
