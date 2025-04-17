import { useEffect, useState } from "react";
import { getProducts } from "../api/product";
import "./ProductList.css"; // create this CSS file later

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => setProducts(data));
    }, []);

    return (
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    {product.image && (
                        <img
                            src={`http://127.0.0.1:8000${product.image}`}
                            alt={product.name}
                            className="product-img"
                        />
                    )}
                    <h3>{product.name}</h3>
                    <p>৳ {product.price}</p>
                    <small>Category: {product.category.name}</small>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
