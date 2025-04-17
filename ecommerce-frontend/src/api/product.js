import axios from "axios";

export const getProducts = async () => {
    try {
        const res = await axios.get("/api/products/");
        return res.data;
    } catch (err) {
        console.error("Failed to fetch products:", err);
        return [];
    }
};
