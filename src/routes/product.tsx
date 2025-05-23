import { useLoaderData } from "react-router-dom";
import { getProduct } from "../api.ts";

export const loader = async ({ params }) => {
    const product = await getProduct(params.id);
    return product;
};

const ProductPage = () => {
    const product = useLoaderData();
    console.log(product);
    return <div>Testing product page.</div>;
};

export default ProductPage;
