const OrderItem = () => {
    return (
        <div
            className="d-flex justify-content-between align-items-center mb-3"
            style={{ padding: "10px" }}
        >
            <div className="d-flex align-items-center">
                <img
                    src="#"
                    alt="Product"
                    className="img-fluid"
                    style={{
                        width: "65px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "5px",
                    }}
                />
                <div className="ms-3">
                    <h6 className="mb-0">Product Name</h6>
                    <small>Quantity: 1</small>
                </div>
            </div>
            <h6>$100.00</h6>
        </div>
    );
};

export default OrderItem;
