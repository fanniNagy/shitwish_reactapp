import React from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import Badge from "react-bootstrap/Badge";

function Product({product}) {
    return (
        <Card style={{width: "18rem"}}>
            <Link to={`/${product.id}`} style={{textDecoration: "none"}}>
                <Card.Img variant="top" src={product.pictureUrl}/>
                <Card.Body>
                    <Card.Title><span id="prod-name">{product.name}</span></Card.Title>
                </Card.Body>
            </Link>
                <small className="text-muted main-price"><h4><Badge id="price" variant="info">{product.price} möney</Badge></h4></small>

        </Card>
    )
}

export default Product;