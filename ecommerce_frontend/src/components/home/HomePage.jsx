import { useEffect, useState } from "react";
import api from "../../api";
import CardContainer from "./CardContainer";
import Header from "./Header";

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(function () {
        api.get("products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            <Header />
            <CardContainer products={products} />
        </>
    );
};
export default HomePage;
