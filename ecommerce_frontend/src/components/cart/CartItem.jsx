import { useState } from "react";
import api, { BASE_URL } from "../../api";

const CartItem = ({ item, setCartTotal, cartitems, setNumberCartItems }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const [loading, setLoading] = useState(false);
    const itemData = { quantity: quantity, item_id: item.id };

    function updateCartitem() {
        setLoading(true);
        api.patch("update_quantity/", itemData)
            .then((res) => {
                console.log(res.data);
                setLoading(false);
                setCartTotal(
                    cartitems
                        .map((cartitem) =>
                            cartitem.id === item.id ? res.data.data : cartitem
                        )
                        .reduce((acc, curr) => acc + curr.total, 0)
                );
                setNumberCartItems(
                    cartitems
                        .map((cartItem) =>
                            cartItem.id === item.id ? res.data.data : cartItem
                        )
                        .reduce((acc, curr) => acc + curr.quantity, 0)
                );
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.message);
            });
    }

    return (
        <div className="col-md-12">
            {/* Cart Items */}
            <div
                className="cart-item d-flex align-items-center mb-3 p-3"
                style={{ backgroundColor: "#f6f6f6", borderRadius: "8px" }}
            >
                <img
                    src={`${BASE_URL}${item.product.image}`}
                    alt="Product Image"
                    className="img-fluid"
                    style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "5px",
                    }}
                />
                <div className="ms-3 flex-grow-1">
                    <h5 className="mb-1">{item.product.name}</h5>
                    <p className="mb-0 text-muted">{`$${item.product.price}`}</p>
                </div>
                <div className="d-flex align-items-center">
                    <input
                        type="number"
                        min="1"
                        className="form-control me-3"
                        defaultValue={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        style={{ width: "70px" }}
                    />
                    <button
                        className="btn btn-primary btn-sm mx-2"
                        onClick={updateCartitem}
                        disabled={loading}
                    >
                        {loading ? "Updating" : "Update"}
                    </button>
                    <button className="btn btn-danger btn-sm">Remove</button>
                </div>
            </div>
            {/* Add more cart items here */}
        </div>
    );
};

export default CartItem;
