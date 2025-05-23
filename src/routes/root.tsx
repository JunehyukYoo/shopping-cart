import { Link, Outlet } from "react-router-dom";
const Root = () => {
    return (
        <>
            <div className="navbar">
                <div>Icon goes here!</div>
                <Link to={`/shop`}>Shop</Link>
                <Link to={`/cart`}>Cart</Link>
            </div>
            <Outlet />
        </>
    );
};

export default Root;
