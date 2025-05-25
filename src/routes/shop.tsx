import { useLoaderData } from "react-router-dom";
import { getProducts } from "../api.ts";
import { ProductItem } from "../components/Items.tsx";
import type { Product } from "../types.ts";
import "../styles/items.css";

// TODO: Fetch product data from the FakeStoreAPI
export const loader = async () => {
    const products = await getProducts();
    return products;
};

const Shop = () => {
    const products = useLoaderData() as Product[];
    return (
        <>
            <h2 style={{alignSelf: "center"}}>Products Page</h2>
            {products ? (
                <div className="shop-container">
                    {products.map((p: Product) => (
                        <ProductItem product={p} key={p.id} />
                    ))}
                </div>
            ) : (
                <p>Oops, something went wrong.</p>
            )}
        </>
    );
};

export default Shop;
