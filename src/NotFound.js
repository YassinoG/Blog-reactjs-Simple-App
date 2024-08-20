
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page connot be found</p>
            <Link to="/">Back the home page -__- ....</Link>
        </div>
    );
}

export default NotFound;