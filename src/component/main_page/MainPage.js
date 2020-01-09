import React from "react";
import ProductContainer from "./ProductContainer";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

function MainPage() {
    return (
        <div>
            <Link to="/add"><Button variant="primary">Upload product</Button></Link>
            <ProductContainer/>
        </div>
    )
}
export default MainPage;