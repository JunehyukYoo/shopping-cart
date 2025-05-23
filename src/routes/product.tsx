import { useLoaderData } from "react-router-dom";
import { getProduct } from "../api.ts";

export const loader = async ({ params }) => {
    const product = await getProduct(params.id);
    return product;
};

const ProductPage = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div>
            {product.title}
            <br/>
            {product.price}
            <br/>
            {product.description}
            <br/>
            {product.category}
            <br/>
        </div>
    );
};

export default ProductPage;
