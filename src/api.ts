import axios from "axios";
import type { Product } from "./types.tsx";

const fakeStoreAPI = axios.create({
    baseURL: "https://fakestoreapi.com",
});

export const getProducts = async () => {
    const products = await fakeStoreAPI.get<Product[]>("/products");
    return products.data;
}

export const getProduct = async (id: string) => {
    const product = await fakeStoreAPI.get<Product>(`/products/${id}`);
    return product.data;
}
