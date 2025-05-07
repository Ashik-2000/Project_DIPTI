const CartItem = () => {
    return (
        <div className="col-md-12">
            {/* Cart Items */}
            <div
                className="cart-item d-flex align-items-center mb-3 p-3"
                style={{ backgroundColor: "#f6f6f6", borderRadius: "8px" }}
            >
                <img
                    src="https://via.placeholder.com/100"
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
                    <h5 className="mb-1">Product Name</h5>
                    <p className="mb-0 text-muted">$20.00</p>
                </div>
                <div className="d-flex align-items-center">
                    <input
                        type="number"
                        className="form-control me-3"
                        defaultValue="1"
                        style={{ width: "70px" }}
                    />
                    <button className="btn btn-danger btn-sm">Remove</button>
                </div>
            </div>
            {/* Add more cart items here */}
        </div>
    );
};

export default CartItem;
