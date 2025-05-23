import { useNavigate } from "react-router-dom";

const Shop = () => {
    const navigate = useNavigate();
    return (
        <>
            <h2>Shop stuff goes here.</h2>
            <button type="button" onClick={() => navigate(-1)}>Back</button>
        </>
    );
};

export default Shop;
