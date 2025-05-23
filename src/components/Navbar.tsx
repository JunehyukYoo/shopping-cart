import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <Link to={`/`}>ISC</Link>
                <div className="navbar-links">
                    <Link to={`/shop`}>Shop</Link>
                    <Link to={`/cart`}>Cart</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
