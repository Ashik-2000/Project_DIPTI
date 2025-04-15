import { useEffect, useState } from "react";
import { getHello } from "./api/hello";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        getHello().then((data) => {
            if (data) setMessage(data.message);
        });
    }, []);

    return (
        <div>
            <h1>React + Django E-commerce</h1>
            <p>Backend says: {message}</p>
        </div>
    );
}

export default App;
