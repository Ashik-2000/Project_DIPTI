import axios from "axios";

export const getHello = async () => {
    try {
        const res = await axios.get("/api/hello/");
        return res.data;
    } catch (err) {
        console.error("API Error:", err);
        return null;
    }
};
