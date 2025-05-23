import { useNavigate } from "react-router-dom";
const Cart = () => {
    const navigate = useNavigate();
    return (
        <>
            <h2>Cart stuff goes here.</h2>
            <button type="button" onClick={() => navigate(-1)}>
                Back
            </button>
        </>
    );
};

export default Cart;
