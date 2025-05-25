import type { Product } from "../types.ts";
import { Link } from "react-router-dom";
import "../styles/items.css";

export const ProductItem = ({ product }: { product: Product }) => {
    return (
        <div className="product-simple-item">
            <Link to={`/shop/product/${product.id}`}>
                {product.title}
                <br />
                {`$${product.price}`}
                <br />
                <img src={product.image} />
            </Link>
        </div>
    );
};

export const ProductDetailItem = ({ product }: { product: Product }) => {
    return <div>Testing product detail item.</div>;
};
