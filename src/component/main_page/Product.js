import React from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

function Product({product}) {
    return (
        <Card style={{width: "18rem"}}>
            <Link to={`/${product.id}`} style={{textDecoration: "none"}}>
                <Card.Img variant="top" src={product.pictureUrl}/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Body>
            </Link>
            <Card.Footer>
                <small className="text-muted">{product.price}</small>
            </Card.Footer>
        </Card>
    )
}

export default Product;