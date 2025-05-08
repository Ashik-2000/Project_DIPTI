import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import api from "./api";
import CartPage from "./components/cart/CartaPage";
import CheckoutPage from "./components/checkout/CheckOutPage";
import HomePage from "./components/home/HomePage";
import ProductPage from "./components/product/ProductPage";
import NotFoundPage from "./components/ui/NotFoundPage";
import MainLayout from "./layout/MainLayout";

const App = () => {
    const [numCartItems, setNumberCartItems] = useState(0);
    const cart_code = localStorage.getItem("cart_code");

    useEffect(function () {
        if (cart_code) {
            api.get(`get_cart_stat?cart_code=${cart_code}`)
                .then((res) => {
                    console.log(res.data);
                    setNumberCartItems(res.data.num_of_items);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MainLayout numCartItems={numCartItems} />}
                >
                    <Route index element={<HomePage />} />
                    <Route
                        path="products/:slug"
                        element={
                            <ProductPage
                                setNumberCartItems={setNumberCartItems}
                            />
                        }
                    />
                    <Route
                        path="cart"
                        element={
                            <CartPage setNumberCartItems={setNumberCartItems} />
                        }
                    />
                    <Route path="checkout" element={<CheckoutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default App;
