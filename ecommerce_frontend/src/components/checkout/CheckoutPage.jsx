import OrderSummary from "./OrderSummary";
import PaymentSection from "./PaymentSection";

const CheckoutPage = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <OrderSummary />
                <PaymentSection />
            </div>
        </div>
    );
};

export default CheckoutPage;
