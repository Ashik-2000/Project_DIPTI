import { Routes, Route } from "react-router-dom";
import Login from "./pages/LogIn";
import ProductList from "./components/ProductList";
import Signup from "./pages/SignUp";

function App() {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}

export default App;
