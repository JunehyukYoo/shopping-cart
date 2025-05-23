import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Root from "./routes/root.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import Shop, { loader as shopLoader } from "./routes/shop.tsx";
import Index from "./routes/index.tsx";
import Cart from "./routes/cart.tsx";
import ProductPage, { loader as productLoader } from "./routes/product.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: "/shop",
                element: <Shop />,
                loader: shopLoader,
            },
            {
                path: "/shop/product/:id",
                element: <ProductPage />,
                loader: productLoader,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
