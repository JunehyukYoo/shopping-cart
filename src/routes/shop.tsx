import { useLoaderData, Link } from "react-router-dom";
import { getProducts } from "../api.ts";
import type { Product } from "../types.tsx";

// TODO: Fetch product data from the FakeStoreAPI
export const loader = async () => {
    const products = await getProducts();
    return products;
};

const Shop = () => {
    const products = useLoaderData() as Product[];
    return (
        <>
            <h2>Shop stuff goes here.</h2>
            {products ? (
                <div>
                    {products.map((p: Product) => {
                        return (
                            <Link to={`/shop/product/${p.id}`} key={p.id}>
                                <img src={p.image} alt={p.title} />
                                <h3>{p.title}</h3>
                                <p>${p.price}</p>
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <p>Oops, something went wrong.</p>
            )}
        </>
    );
};

export default Shop;
