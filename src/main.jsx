import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // The main component of your app
import "./index.css"; // Your main CSS file

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
