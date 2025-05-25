import "../styles/index.css";
import Cart from "../assets/cart.png"
const Index = () => {
    return (
        <>
            <div className="index">
                <h1>Imaginary Shopping Cart</h1>
                <img src={Cart}/>
                <p>Shop, shop, shop! Fill up your imaginary cart!</p>
            </div>
        </>
    );
};

export default Index;
