import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div>Icon goes here!</div>
                <Link to={`/shop`}>Shop</Link>
                <Link to={`/cart`}>Cart</Link>
            </div>
        </>
    );
};

export default Navbar;
